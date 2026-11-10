"use client";

import { Magnifier } from "@gravity-ui/icons";

const ArchiveToolbar = ({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
}) => {
  const selectClass =
    "min-w-0 w-full rounded-lg border border-white/10 bg-[#1c1c1c] px-2 py-2.5 text-sm text-white/70 outline-none transition-colors focus:border-[#e5a84b] sm:px-3";

  return (
    <section className="mb-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-3 transition-colors focus-within:border-[#e5a84b] sm:px-4">
          <Magnifier className="h-4 w-4 shrink-0 text-white/35" />

          <input
            type="text"
            placeholder="Search your archive..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:w-auto">
          {" "}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Types</option>
            <option value="Movie">Movies</option>
            <option value="Series">Series</option>
            <option value="Anime">Anime</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
            <option value="Short Film">Short Film</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Status</option>
            <option value="watchlist">Watchlist</option>
            <option value="finished">Finished</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`${selectClass} col-span-2 sm:col-span-1`}
          >
            <option value="title">Title: A-Z</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ArchiveToolbar;
