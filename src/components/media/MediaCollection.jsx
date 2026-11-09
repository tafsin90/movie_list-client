
"use client";

import { useEffect, useState } from "react";
import { Magnifier } from "@gravity-ui/icons";
import MediaTable from "@/components/media/MediaTable";
import { authClient } from "@/lib/auth-client";

export default function MediaCollection({ status }) {
  const { data: session, isPending } = authClient.useSession();

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPending) return;

    if (!session?.user?.id) {
      setItems([]);
      setLoading(false);
      return;
    }

    const fetchMedia = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:5000/api/media/collection/${session.user.id}/${status}`,
        );

        const data = await response.json();

        setItems(data);
      } catch (error) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [session, isPending, status]);

  const filteredMovies = items
    .filter((movie) => {
      const matchesSearch = movie.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesType =
        selectedType === "All" || movie.category === selectedType;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);

        case "rating":
          return Number(b.imdbRating || 0) - Number(a.imdbRating || 0);

        case "newest":
          return new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0);

        case "recent":
        default:
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      }
    });

  const isWatchlist = status === "watchlist";

  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-[#141414] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
      {/* Heading */}
      <div className="mb-7 sm:mb-9">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-[#e5a84b] sm:text-[11px]">
          YOUR PERSONAL COLLECTION
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {isWatchlist ? "Watchlist" : "Finished"}
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
          {isWatchlist
            ? "Everything you want to watch, organized in one place."
            : "All the movies and series you've finished watching."}
        </p>
      </div>

      {/* Toolbar */}
      <div className="mb-5 flex flex-col md:flex-row justify-between md:items-center gap-3">
        {/* Collection Count */}
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#181818] px-4 py-3 sm:w-fit">
          <span className="text-lg font-semibold text-[#e5a84b]">
            {filteredMovies.length}
          </span>

          <span className="text-sm text-white">
            Titles in your collection
          </span>
        </div>

        {/* Search, Filter and Sorting */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {/* Search */}
          <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 transition-colors focus-within:border-[#e5a84b] sm:col-span-1 sm:w-64">
            <Magnifier className="h-4 w-4 shrink-0 text-white/40" />

            <input
              type="text"
              placeholder="Search titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          {/* Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="min-w-0 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 text-sm text-white/70 outline-none focus:border-[#e5a84b]"
          >
            <option value="All">All Types</option>
            <option value="Movie">Movies</option>
            <option value="Series">Series</option>
            <option value="Anime">Anime</option>
          </select>

          {/* Sorting */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="min-w-0 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 text-sm text-white/70 outline-none focus:border-[#e5a84b]"
          >
            <option value="recent">Recently Added</option>
            <option value="title">Title: A-Z</option>
            <option value="rating">Highest IMDb Rating</option>
            <option value="newest">Newest Release</option>
          </select>
        </div>
      </div>

      {/* Table / Cards */}
      {loading || isPending ? (
        <div className="py-16 text-center text-white/40">
          Loading your collection...
        </div>
      ) : (
        <MediaTable items={filteredMovies} />
      )}
    </main>
  );
}
