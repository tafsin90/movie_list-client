"use client";

import { useEffect, useMemo, useState } from "react";

import ArchiveHeader from "@/components/all/ArchiveHeader";
import ArchiveToolbar from "@/components/all/ArchiveToolbar";
import ArchiveTimeline from "@/components/all/ArchiveTimeline";
import ArchiveYearSection from "@/components/all/ArchiveYearSection";

import { authClient } from "@/lib/auth-client";

export default function AllPage() {
  // Authentication
  const { data: session, isPending } = authClient.useSession();

  // MongoDB collection
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toolbar states
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("year");
  const [activeDecade, setActiveDecade] = useState(null);

  // Fetch all media from MongoDB
  useEffect(() => {
    if (!session?.user?.id) {
      setItems([]);
      setLoading(false);
      return;
    }

    const fetchMedia = async () => {
      try {
        setLoading(true);

        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/allmedia/collection/${session.user.id}`;

        // console.log("Logged-in user ID:", session.user.id);

        const response = await fetch(url);
        const data = await response.json();

        // console.log("API response:", data);

        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }

        setItems(data);
      } catch (error) {
        console.error("Error fetching media:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [session]);

  // Search, filter and sort
  const filteredItems = items
    .filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesType =
        selectedType === "All" || item.category === selectedType;

      const matchesStatus =
        selectedStatus === "All" || item.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);

        case "rating":
          return Number(b.imdbRating || 0) - Number(a.imdbRating || 0);

        case "recent":
          return new Date(b.createdAt) - new Date(a.createdAt);

        case "year":
        default:
          return (
            Number.parseInt(b.releaseDate, 10) -
            Number.parseInt(a.releaseDate, 10)
          );
      }
    });

  // Group media by decade and year
  const groupedArchive = useMemo(() => {
    const groups = {};
    const unknownYearItems = [];

    filteredItems.forEach((item) => {
      const year = Number.parseInt(item.releaseDate, 10);

      if (!Number.isFinite(year)) {
        unknownYearItems.push(item);
        return;
      }

      const decade = Math.floor(year / 10) * 10;

      if (!groups[decade]) {
        groups[decade] = {};
      }

      if (!groups[decade][year]) {
        groups[decade][year] = [];
      }

      groups[decade][year].push(item);
    });

    return {
      decades: Object.keys(groups)
        .map(Number)
        .sort((a, b) => b - a)
        .map((decade) => ({
          value: decade,
          years: Object.keys(groups[decade])
            .map(Number)
            .sort((a, b) => b - a)
            .map((year) => ({
              year,
              items: groups[decade][year],
            })),
        })),

      unknownYearItems,
    };
  }, [filteredItems]);

  // Prepare timeline data
  const decades = useMemo(() => {
    return groupedArchive.decades.map((decade) => ({
      value: decade.value,
      count: decade.years.reduce((total, year) => total + year.items.length, 0),
    }));
  }, [groupedArchive]);

  // Set the first decade as active
  useEffect(() => {
    if (decades.length === 0) {
      setActiveDecade(null);
      return;
    }

    if (!decades.some((item) => item.value === activeDecade)) {
      setActiveDecade(decades[0].value);
    }
  }, [decades, activeDecade]);

  // Update active decade while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("[data-decade]");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveDecade(Number(visibleSections[0].target.dataset.decade));
        }
      },
      {
        rootMargin: "-130px 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [groupedArchive]);

  // Scroll to selected decade
  const handleDecadeSelect = (decade) => {
    setActiveDecade(decade);

    const section = document.getElementById(`decade-${decade}`);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Loading state
  if (isPending || loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#141414] text-white">
        <p className="text-sm text-white/40">Loading your archive...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen w-full min-w-0 max-w-[1600px] overflow-x-clip bg-[#141414] px-3 pb-16 pt-6 text-white sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
      {/* Header */}
      <ArchiveHeader items={items} />

      {/* Toolbar */}
      <ArchiveToolbar
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Result count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs text-white/40">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredItems.length}
          </span>{" "}
          of {items.length} titles
        </p>
      </div>

      {/* Timeline */}
      <ArchiveTimeline
        decades={decades}
        activeDecade={activeDecade}
        onSelect={handleDecadeSelect}
      />

      {/* Cinema Wall */}
      {filteredItems.length > 0 ? (
        <div>
          {groupedArchive.decades.map((decade) => (
            <div
              key={decade.value}
              id={`decade-${decade.value}`}
              data-decade={decade.value}
              className="mb-14 scroll-mt-40"
            >
              {decade.years.map((yearGroup) => (
                <ArchiveYearSection
                  key={yearGroup.year}
                  year={yearGroup.year}
                  items={yearGroup.items}
                />
              ))}
            </div>
          ))}

          {/* Titles without a valid release year */}
          {groupedArchive.unknownYearItems.length > 0 && (
            <ArchiveYearSection
              year="Unknown Year"
              items={groupedArchive.unknownYearItems}
            />
          )}
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-4 text-center">
          <p className="text-lg font-medium text-white/70">No titles found</p>

          <p className="mt-2 text-sm text-white/35">
            Try changing your search or filters.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setSelectedType("All");
              setSelectedStatus("All");
              setSortBy("year");
            }}
            className="mt-5 text-sm text-[#e5a84b] transition-colors hover:text-[#f3c47a]"
          >
            Clear all filters
          </button>
        </div>
      )}
    </main>
  );
}
