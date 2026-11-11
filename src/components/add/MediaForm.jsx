"use client";

import { useState } from "react";
import TMDBSearch from "./TMDBSearch";
import { SiSitepoint } from "react-icons/si";
import { format } from "date-fns";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#e5a84b]";

const defaultCategories = [
  "Movie",
  "Series",
  "Animation",
  "Anime",
  "Documentary",
  "Short Film",
];

const defaultGenres = [
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
  "Rom-Com",
  "Western",
  "Dark Comedy",
  "Sports & Game",
  "Psychological Thriller",
  "Historical Fiction",
  "Biography",
];

export default function MediaForm({ destination }) {
  const [formData, setFormData] = useState({
    userId: "",
    user: "",
    title: "",
    poster: "",
    description: "",
    releaseDate: "",
    imdbRating: "",
    runtime: "",
    seasons: "",
    language: "",
    country: "",
    mediaType: "movie",
  });

  const [categories, setCategories] = useState(defaultCategories);
  const [selectedCategory, setSelectedCategory] = useState("Movie");
  const [customCategory, setCustomCategory] = useState("");

  const [genres, setGenres] = useState([]);
  const [customGenre, setCustomGenre] = useState("");

  const { data: session, isPending } = authClient.useSession();
  const userId = session?.user?.id;

  const handleMovieSelect = (movie) => {
    setFormData({
      userId: userId,
      user: session?.user?.name,
      title: movie.title || "",
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
      description: movie.overview || "",
      releaseDate: movie.release_date
        ? format(new Date(movie.release_date), "yyyy")
        : "",
      imdbRating: movie.imdb_rating || "",
      runtime: movie.media_type === "movie" ? formatRuntime(movie.runtime) : "",

      seasons: movie.media_type === "tv" ? movie.seasons || "" : "",
      language: movie.language || "",
      country: movie.country || "",
      mediaType: movie.media_type || "movie",
    });

    setSelectedCategory(movie.media_type === "tv" ? "Series" : "Movie");

    setGenres(movie.genres?.map((genre) => genre.name) || []);
  };

  const addCategory = () => {
    const value = customCategory.trim();

    if (
      value &&
      !categories.some(
        (category) => category.toLowerCase() === value.toLowerCase(),
      )
    ) {
      setCategories([...categories, value]);
      setSelectedCategory(value);
    }

    setCustomCategory("");
  };

  const toggleGenre = (genre) => {
    setGenres((previous) =>
      previous.includes(genre)
        ? previous.filter((item) => item !== genre)
        : [...previous, genre],
    );
  };

  const addGenre = () => {
    const value = customGenre.trim();

    if (
      value &&
      !genres.some((genre) => genre.toLowerCase() === value.toLowerCase())
    ) {
      setGenres([...genres, value]);
    }

    setCustomGenre("");
  };

  function formatRuntime(minutes) {
    if (!minutes) return "";

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) return `${remainingMinutes} min`;
    if (remainingMinutes === 0) return `${hours} hour`;

    return `${hours} hour ${remainingMinutes} min`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isPending) {
      alert("Please wait, session is loading!");
      return;
    }

    if (!session?.user?.id) {
      alert("Please login first!");
      return;
    }

    try {
      const submittedForm = new FormData(e.currentTarget);

      const mediaData = Object.fromEntries(submittedForm.entries());

      mediaData.userId = session.user.id;
      mediaData.user = session.user.name;
      mediaData.category = selectedCategory;
      mediaData.genres = genres;
      mediaData.status = destination;
      mediaData.mediaType = formData.mediaType;

      // console.log("========== MEDIA DATA ==========");
      // console.log(mediaData);

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/media`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mediaData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add media");
      }

      // Clear form
      e.target.reset();

      setFormData({
        userId: "",
        user: "",
        title: "",
        poster: "",
        description: "",
        releaseDate: "",
        imdbRating: "",
        runtime: "",
        seasons: "",
        language: "",
        country: "",
        mediaType: "movie",
      });

      setSelectedCategory("Movie");
      setGenres([]);
      console.log("========== DATABASE RESPONSE ==========");
      console.log(data);

      // alert("Media added successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
      // alert(error.message);
    }
  };

  return (
    <div>
      <div className="border-b-2 mb-1 border-white/20 "></div>
      <div className="border-b-2 mb-1 border-[#e5a84b]/[0.2] "></div>
      <div className="border-b-2 mb-10 border-white/20 "></div>

      {/* form */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1b1b1b]">
        {/* Form Header */}
        <div className="border-b border-white/10 px-6 py-5 md:px-8">
          <h2 className="text-2xl font-semibold">
            {destination === "watchlist"
              ? "Add to your Watchlist"
              : "Add to your Finished collection"}
          </h2>

          <p className="mt-1 text-sm text-white/40">
            Find a title or enter its details manually.
          </p>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          {/* TMDB Search */}
          <TMDBSearch onSelect={handleMovieSelect} />

          {/* Divider */}
          <div className="flex items-center gap-4 mt-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-[#e5a84b]/40" />
            <span className="text-sm uppercase tracking-widest text-[#e5a84b] rounded-full border border-[#e5a84b]/20  px-4 py-1.5 text-[12px] font-semibold ">
              Or add manually
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-[#e5a84b]/40" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Title */}
            <div>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />

                <h3 className="font-semibold text-white">Title</h3>
              </div>

              <p className="mt-1 text-xs text-white/40">
                Search movies using TMDB.
              </p>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter movie or series title"
                className={inputClass}
              />
            </div>

            {/* Category */}
            <section>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />

                <h3 className="font-semibold text-white">Category</h3>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setFormData({
                        ...formData,
                        mediaType: category === "Series" ? "tv" : "movie",
                      });
                    }}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                      selectedCategory === category
                        ? "border-[#e5a84b] bg-[#e5a84b]/10 text-[#e5a84b]"
                        : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Custom Category */}
              <input
                type="text"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCategory();
                  }
                }}
                placeholder="Type another category..."
                className={inputClass}
              />

              <button
                type="button"
                onClick={addCategory}
                className="mt-2 text-xs font-medium text-[#e5a84b] hover:underline hover:cursor-pointer"
              >
                + Add custom category
              </button>
            </section>

            {/* Genres */}
            <section>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />

                <h3 className="font-semibold text-white">Genres</h3>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {[...new Set([...defaultGenres, ...genres])].map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => toggleGenre(genre)}
                    className={`rounded-full border px-3.5 py-2 text-xs transition ${
                      genres.includes(genre)
                        ? "border-[#e5a84b] bg-[#e5a84b]/10 text-[#e5a84b]"
                        : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {genres.includes(genre) && "✓ "}
                    {genre}
                  </button>
                ))}
              </div>

              {/* Custom Genres */}
              <input
                type="text"
                value={customGenre}
                onChange={(e) => setCustomGenre(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addGenre();
                  }
                }}
                placeholder="Type another genre..."
                className={inputClass}
              />

              <button
                type="button"
                onClick={addGenre}
                className="mt-2 text-xs font-medium text-[#e5a84b] hover:underline"
              >
                + Add custom genre
              </button>

              {/* Selected Genres */}
              {genres.length > 0 && (
                <p className="mt-3 text-xs text-white/40">
                  Selected: {genres.join(", ")}
                </p>
              )}
            </section>
            {/* Poster URL */}
            <div>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />

                <h3 className="font-semibold text-white">Poster link</h3>
              </div>

              <p className="mt-1 text-xs text-white/40">
                Enter your movie poster link
              </p>

              <input
                id="poster"
                name="poster"
                type="url"
                value={formData.poster}
                onChange={(e) =>
                  setFormData({ ...formData, poster: e.target.value })
                }
                placeholder="https://example.com/poster.jpg"
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />

                <h3 className="font-semibold text-white">Description</h3>
              </div>

              <p className="mt-1 text-xs text-white/40">
                Describe your plot{" "}
                <span className="italic text-white/70 font-bold">
                  (optional)
                </span>
              </p>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Write a short description..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Movie Information */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Release Date */}
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />

                  <h3 className="font-semibold text-white">Release Date</h3>
                </div>

                <input
                  id="releaseDate"
                  name="releaseDate"
                  type="text"
                  value={formData.releaseDate}
                  onChange={(e) =>
                    setFormData({ ...formData, releaseDate: e.target.value })
                  }
                  placeholder="e.g. 2014"
                  className={inputClass}
                />
              </div>

              {/* IMDb Rating */}
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />

                  <h3 className="font-semibold text-white">IMDB Rating </h3>
                </div>

                <input
                  id="imdbRating"
                  name="imdbRating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={formData.imdbRating}
                  onChange={(e) =>
                    setFormData({ ...formData, imdbRating: e.target.value })
                  }
                  placeholder="e.g. 8.8"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Runtime / Total Seasons */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Runtime */}
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />
                  <h3 className="font-semibold text-white">Runtime</h3>
                </div>

                <input
                  type="text"
                  name="runtime"
                  value={formData.runtime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      runtime: e.target.value,
                    })
                  }
                  placeholder="e.g. 1 hour 43 min"
                  className={inputClass}
                />
              </div>

              {/* Total Seasons */}
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />
                  <h3 className="font-semibold text-white">Total Seasons</h3>
                </div>

                <input
                  type="number"
                  name="seasons"
                  min="1"
                  value={formData.seasons}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seasons: e.target.value,
                    })
                  }
                  placeholder="e.g. 5"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Country and Language */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />

                  <h3 className="font-semibold text-white">Country</h3>
                </div>

                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  placeholder="e.g. United Kingdom, United States"
                  className={inputClass}
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />

                  <h3 className="font-semibold text-white">Language</h3>
                </div>

                <input
                  id="language"
                  name="language"
                  type="text"
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  placeholder="e.g. English, Japanese, French"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Selected Information */}
            <input type="hidden" name="category" value={selectedCategory} />

            <input type="hidden" name="genres" value={JSON.stringify(genres)} />

            {/* Submit */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    title: "",
                    poster: "",
                    description: "",
                    releaseDate: "",
                    imdbRating: "",
                    runtime: "",
                    seasons: "",
                    language: "",
                    country: "",
                    mediaType: "movie",
                  });

                  setGenres([]);
                  setSelectedCategory("Movie");
                  setCustomCategory("");
                  setCustomGenre("");
                }}
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                Reset Form
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#e5a84b] px-7 py-3 text-sm font-semibold text-[#141414] transition hover:bg-[#f0bb68]"
              >
                {destination === "watchlist"
                  ? "Add to Watchlist"
                  : "Add to Finished"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
