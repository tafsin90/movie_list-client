"use client";

import { useState } from "react";
import { Button, Dropdown, Label } from "@heroui/react";
import {
  Plus,
  Xmark,
  ChevronDown,
} from "@gravity-ui/icons";
import { FiFilter } from "react-icons/fi";

const genreOptions = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Documentary",
  "Family",
  "History",
  "Music",
  "Sport",
  "War",
  "Western",
];

export default function GenreFilter({ selectedGenres, onChange }) {
  const [genreInput, setGenreInput] = useState("");

  const addGenre = (genre) => {
    const trimmedGenre = genre.trim();

    if (!trimmedGenre) return;

    const alreadyExists = selectedGenres.some(
      (item) => item.toLowerCase() === trimmedGenre.toLowerCase(),
    );

    if (!alreadyExists) {
      onChange([...selectedGenres, trimmedGenre]);
    }

    setGenreInput("");
  };

  const removeGenre = (genre) => {
    onChange(selectedGenres.filter((item) => item !== genre));
  };

  const handleSelectionChange = (keys) => {
    const selectedOptions = keys === "all" ? genreOptions : Array.from(keys);

    const customGenres = selectedGenres.filter(
      (genre) =>
        !genreOptions.some(
          (option) => option.toLowerCase() === genre.toLowerCase(),
        ),
    );

    onChange([...customGenres, ...selectedOptions]);
  };

  return (
    <div className="w-full sm:w-64">
      {/* DROPDOWN */}
      <Dropdown>
        <Button
          aria-label="Filter by Genre"
          variant="secondary"
          className="flex h-[46px] w-full items-center justify-between rounded-lg border border-white/10 bg-[#1c1c1c] px-3 text-sm text-white/70 shadow-none transition-all hover:border-[#e5a84b]/50 hover:bg-[#222222] data-[pressed=true]:bg-[#222222]"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#e5a84b]">
              {selectedGenres.length > 0 ? selectedGenres.length : <FiFilter />}
            </span>

            {selectedGenres.length > 0 ? "Genres Selected" : "Filter by Genre"}
          </span>

          <ChevronDown className="h-4 w-4 text-white/40" />
        </Button>

        <Dropdown.Popover className="w-[280px] rounded-xl border border-white/10 bg-[#202020] p-3 shadow-2xl">
          {/* HEADER */}
          <div className="mb-3 flex items-center justify-between px-1">
            <div>
              <p className="text-sm font-semibold text-white">Filter Genres</p>
              <p className="mt-0.5 text-[11px] text-white/40">
                Select multiple genres
              </p>
            </div>

            <span className="rounded-md bg-[#e5a84b]/10 px-2 py-1 text-[10px] font-semibold text-[#e5a84b]">
              {selectedGenres.length} SELECTED
            </span>
          </div>

          {/* CUSTOM GENRE INPUT */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addGenre(genreInput);
            }}
            className="mb-3 flex items-center gap-2 rounded-lg border border-white/10 bg-[#151515] px-3 transition-colors focus-within:border-[#e5a84b]/60"
          >
            <input
              type="text"
              value={genreInput}
              onChange={(e) => setGenreInput(e.target.value)}
              placeholder="Add custom genre..."
              className="w-full min-w-0 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
            />

            <button
              type="submit"
              disabled={!genreInput.trim()}
              aria-label="Add genre"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#e5a84b]/10 text-[#e5a84b] transition hover:bg-[#e5a84b]/20 disabled:opacity-30"
            >
              <Plus className="h-4 w-4" />
            </button>
          </form>

          {/* GENRE OPTIONS */}
          <Dropdown.Menu
            aria-label="Select genres"
            selectionMode="multiple"
            selectedKeys={
              new Set(
                selectedGenres.filter((genre) =>
                  genreOptions.some(
                    (option) => option.toLowerCase() === genre.toLowerCase(),
                  ),
                ),
              )
            }
            onSelectionChange={handleSelectionChange}
            className="max-h-56 overflow-y-auto"
          >
            {genreOptions.map((genre) => (
              <Dropdown.Item
                key={genre}
                id={genre}
                textValue={genre}
                className="rounded-lg px-3 py-2 text-sm !text-white outline-none transition-colors hover:bg-white/[0.06] hover:text-white data-[selected=true]:bg-[#e5a84b]/10 data-[selected=true]:text-[#e5a84b]"
              >
                <Label className="!text-white/80">{genre}</Label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>

          {/* CLEAR FILTERS */}
          {selectedGenres.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="mt-3 w-full border-t border-white/[0.08] pt-3 text-center text-xs font-medium text-red-400 transition hover:text-red-300"
            >
              Clear all filters
            </button>
          )}
        </Dropdown.Popover>
      </Dropdown>

      {/* SELECTED GENRE TAGS */}
      {selectedGenres.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {selectedGenres.map((genre) => (
            <span
              key={genre}
              className="flex items-center gap-1 rounded-md border border-[#e5a84b]/20 bg-[#e5a84b]/[0.08] px-2 py-1 text-[11px] font-medium text-[#e5a84b]"
            >
              {genre}

              <button
                type="button"
                onClick={() => removeGenre(genre)}
                aria-label={`Remove ${genre}`}
                className="ml-0.5 rounded-sm text-[#e5a84b]/50 transition hover:text-white"
              >
                <Xmark className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
