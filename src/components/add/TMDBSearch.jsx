"use client";

import { Magnifier } from "@gravity-ui/icons";
import { useEffect, useRef, useState } from "react";

export default function TMDBSearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const skipNextSearch = useRef(false);

  useEffect(() => {
    if (skipNextSearch.current) {
      skipNextSearch.current = false;
      return;
    }

    const searchTerm = query.trim();
    if (!searchTerm) {
      setMovies([]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/search?query=${encodeURIComponent(searchTerm)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("TMDB search failed");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setMovies(data.results || []);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("TMDB search failed:", error);
          setMovies([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  function handleSearch(value) {
    setMovies([]);
    setIsLoading(Boolean(value.trim()));
    setQuery(value);
  }

  async function handleSelectMovie(movie) {
    const title = movie.title || movie.name || "";
    skipNextSearch.current = title !== query;
    setQuery(title);
    setMovies([]);
    setIsLoading(false);
    // console.log(movie)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/${movie.media_type}/${movie.id}`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch media details");
      }

      onSelect(data);
    } catch (error) {
      console.error("Media details failed:", error);
    }
  }
  return (
    <section>
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5a84b]" />
          <span className=" font-semibold tracking-[0.2em] text-[#e5a84b] uppercase">
            Quick Search
          </span>
        </div>

        <h3 className="font-semibold text-white">Find a title</h3>

        <p className="mt-1 text-sm text-white/40">
          Search shows you are looking for. Lights, camera, discover!
        </p>
      </div>

      <div className="relative mt-3">
        <Magnifier
          className="absolute top-1/2 left-4 -translate-y-1/2 text-[#e5a84b]"
          size={18}
        />

        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-xl border border-[#e5a84b]/20 bg-[#1e1b16] py-4 pr-4 pl-12 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#e5a84b] focus:shadow-[0_0_15px_rgba(229,168,75,0.12)]"
        />
      </div>

      {isLoading && <p className="mt-2 text-xs text-white/40">Searching...</p>}

      {movies.length > 0 && (
        <div className="mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#202020]">
          {movies.map((movie) => (
            <button
              key={movie.id}
              type="button"
              onClick={() => handleSelectMovie(movie)}
              className="flex w-full items-center gap-3 border-b border-white/5 p-3 text-left transition hover:bg-white/5"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="h-14 w-10 rounded object-cover"
                />
              ) : (
                <div className="flex h-14 w-10 items-center justify-center rounded bg-white/5 text-xs text-white/30">
                  N/A
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-white">
                  {movie.title || movie.name}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  {movie.media_type === "tv" ? "TV Series" : "Movie"} ·{" "}
                  {(movie.release_date || movie.first_air_date || "").slice(
                    0,
                    4,
                  ) || "Year unavailable"}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
