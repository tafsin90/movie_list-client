"use client";

import { useEffect, useState } from "react";
import { Magnifier } from "@gravity-ui/icons";
import MediaTable from "@/components/media/MediaTable";
import { authClient } from "@/lib/auth-client";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function MediaCollection({ status }) {
  const { data: session, isPending } = authClient.useSession();

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [jumpPage, setJumpPage] = useState("1");

  // Search Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setJumpPage(String(page));
  }, [page]);

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

        const params = new URLSearchParams({
          page: String(page),
          limit: "100",
          search: debouncedSearch,
          category: selectedType,
          sort: sortBy,
        });

        const response = await fetch(
          `${API_URL}/api/media/collection/${session.user.id}/${status}?${params}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch media");
        }

        setItems(data.items || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalItems(data.pagination?.totalItems || 0);
      } catch (error) {
        console.error("Error fetching media:", error);
        setItems([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [
    session?.user?.id,
    isPending,
    status,
    page,
    debouncedSearch,
    selectedType,
    sortBy,
  ]);

  const isWatchlist = status === "watchlist";

  // Delete Media
  const handleDelete = async (mediaId) => {
    if (!session?.user?.id) {
      alert("Please log in first.");
      return false;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/media/delete/${mediaId}/${session.user.id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete media");
      }

      setItems((prevItems) => prevItems.filter((item) => item._id !== mediaId));

      setTotalItems((prevTotal) => Math.max(0, prevTotal - 1));

      if (items.length === 1 && page > 1) {
        setPage((prevPage) => prevPage - 1);
      }

      return true;
    } catch (error) {
      console.error("Error deleting media:", error);
      alert(error.message);
      return false;
    }
  };

  const handleJump = () => {
    const targetPage = Number(jumpPage);

    if (
      !Number.isInteger(targetPage) ||
      targetPage < 1 ||
      targetPage > totalPages
    ) {
      return;
    }

    setPage(targetPage);
  };
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
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        {/* Collection Count */}
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#181818] px-4 py-3 sm:w-fit">
          <span className="text-lg font-semibold text-[#e5a84b]">
            {totalItems}
          </span>

          <span className="text-sm text-white">Titles in your collection</span>
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
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          {/* Filter */}
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setPage(1);
            }}
            className="min-w-0 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 text-sm text-white/70 outline-none focus:border-[#e5a84b]"
          >
            <option value="All">All Types</option>
            <option value="Movie">Movies</option>
            <option value="Series">Series</option>
            <option value="Anime">Anime</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
            <option value="Short Film">Short Film</option>
          </select>

          {/* Sorting */}
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="min-w-0 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 text-sm text-white/70 outline-none focus:border-[#e5a84b]"
          >
            <option value="recent">
              {isWatchlist ? "Recently Added to Wishlist" : "Recently Watched"}
            </option>

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
        <MediaTable items={items} onDelete={handleDelete} />
      )}

      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-white/[0.07] bg-[#181818] p-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Jump to Page */}
        <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] pt-3 sm:justify-end sm:border-t-0 sm:pt-0">
          <label
            htmlFor="jump-page"
            className="text-xs font-semibold tracking-wider text-white/40"
          >
            GO TO PAGE
          </label>

          <div className="flex items-center gap-2">
            <input
              id="jump-page"
              type="number"
              min="1"
              max={totalPages}
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleJump();
                }
              }}
              disabled={loading || totalPages <= 1}
              className="w-16 rounded-lg border border-white/10 bg-[#222222] px-2 py-2.5 text-center text-sm text-white outline-none transition focus:border-[#e5a84b] disabled:opacity-40"
            />

            <button
              type="button"
              onClick={handleJump}
              disabled={loading || totalPages <= 1}
              className="rounded-lg bg-[#e5a84b] px-4 py-2.5 text-xs font-bold tracking-wider text-[#141414] transition hover:bg-[#f0bd68] disabled:cursor-not-allowed disabled:opacity-40"
            >
              GO
            </button>
          </div>
        </div>

        {/* Previous / Next */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={page === 1 || loading}
            onClick={() => setPage((prevPage) => prevPage - 1)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#222222] px-3 py-2.5 text-sm text-white/70 transition hover:border-[#e5a84b]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span>←</span>
            Previous
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span className="flex h-8 min-w-8 items-center justify-center rounded-md bg-[#e5a84b] px-2 font-semibold text-[#141414]">
              {page}
            </span>

            <span className="text-white/30">of</span>

            <span className="font-medium text-white/60">{totalPages}</span>
          </div>

          <button
            type="button"
            disabled={page >= totalPages || loading}
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#222222] px-3 py-2.5 text-sm text-white/70 transition hover:border-[#e5a84b]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
            <span>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}
