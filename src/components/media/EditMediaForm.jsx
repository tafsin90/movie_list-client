"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SiSitepoint } from "react-icons/si";
import { authClient } from "@/lib/auth-client";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

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

export default function EditMediaForm({ id }) {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const userId = session?.user?.id;

  const [formData, setFormData] = useState({
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

  const [status, setStatus] = useState("watchlist");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Convert saved genres into an array.
  const parseGenres = (savedGenres) => {
    if (Array.isArray(savedGenres)) {
      return savedGenres;
    }

    if (typeof savedGenres === "string") {
      try {
        const parsedGenres = JSON.parse(savedGenres);

        if (Array.isArray(parsedGenres)) {
          return parsedGenres;
        }
      } catch {
        return savedGenres
          .split(",")
          .map((genre) => genre.trim())
          .filter(Boolean);
      }
    }

    return [];
  };

  // Fetch existing media from MongoDB.
  useEffect(() => {
    if (isPending) return;

    if (!userId) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/editmedia/${id}/${userId}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load media.");
        }

        const media = data.media || data.item || data.data || data;

        setFormData({
          title: media.title || "",
          poster: media.poster || "",
          description: media.description || "",
          releaseDate: media.releaseDate || "",
          imdbRating: media.imdbRating ?? "",
          runtime: media.runtime || "",
          seasons: media.seasons ?? "",
          language: media.language || "",
          country: media.country || "",
          mediaType: media.mediaType || "movie",
        });

        // Load the saved category.
        const savedCategory = media.category || "Movie";

        setSelectedCategory(savedCategory);

        // Include custom saved categories.
        setCategories((previous) =>
          previous.some(
            (category) =>
              category.toLowerCase() === savedCategory.toLowerCase(),
          )
            ? previous
            : [...previous, savedCategory],
        );

        // Load saved genres.
        setGenres(parseGenres(media.genres));

        // Load saved status.
        setStatus(media.status || "watchlist");
      } catch (error) {
        console.error("Failed to load media:", error);
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [id, userId, isPending]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Add a custom category.
  const addCategory = () => {
    const value = customCategory.trim();

    if (!value) return;

    const alreadyExists = categories.some(
      (category) => category.toLowerCase() === value.toLowerCase(),
    );

    if (!alreadyExists) {
      setCategories((previous) => [...previous, value]);
    }

    setSelectedCategory(value);

    setFormData((previous) => ({
      ...previous,
      mediaType: value === "Series" ? "tv" : previous.mediaType,
    }));

    setCustomCategory("");
  };

  // Select or unselect a genre.
  const toggleGenre = (genre) => {
    setGenres((previous) =>
      previous.includes(genre)
        ? previous.filter((item) => item !== genre)
        : [...previous, genre],
    );
  };

  // Add a custom genre.
  const addGenre = () => {
    const value = customGenre.trim();

    if (!value) return;

    const alreadyExists = genres.some(
      (genre) => genre.toLowerCase() === value.toLowerCase(),
    );

    if (!alreadyExists) {
      setGenres((previous) => [...previous, value]);
    }

    setCustomGenre("");
  };

  // Update existing media.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setError("Please login first.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const mediaData = {
        ...formData,
        userId,
        user: session?.user?.name || "",
        category: selectedCategory,
        genres,
        status,
      };

      const response = await fetch(`${API_URL}/api/editmedia/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mediaData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update media.");
      }

      router.back();
      router.refresh();
    } catch (error) {
      console.error("Update failed:", error);
      setError(error.message || "Failed to update media.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || isPending) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-white/50">Loading media details...</p>
      </div>
    );
  }

  if (error && !formData.title) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <p className="text-sm text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top Divider */}
      <div className="mb-1 border-b-2 border-white/20" />
      <div className="mb-1 border-b-2 border-[#e5a84b]/[0.2]" />
      <div className="mb-10 border-b-2 border-white/20" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1b1b1b]">
        {/* Form Header */}
        <div className="border-b border-white/10 px-6 py-5 md:px-8">
          <h2 className="text-2xl font-semibold">Edit Media</h2>

          <p className="mt-1 text-sm text-white/40">
            Update your media information and collection status.
          </p>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Title */}
            <div>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />
                <h3 className="font-semibold text-white">Title</h3>
              </div>

              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
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

                      setFormData((previous) => ({
                        ...previous,
                        mediaType: category === "Series" ? "tv" : "movie",
                      }));
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
                className="mt-2 cursor-pointer text-xs font-medium text-[#e5a84b] hover:underline"
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
                Enter your movie poster link.
              </p>

              <input
                id="poster"
                name="poster"
                type="url"
                value={formData.poster}
                onChange={handleChange}
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
                <span className="font-bold italic text-white/70">
                  (optional)
                </span>
              </p>

              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="e.g. 2014"
                  className={inputClass}
                />
              </div>

              {/* IMDb Rating */}
              <div>
                <div className="flex items-center gap-2">
                  <SiSitepoint className="text-[#e5a84b]" />
                  <h3 className="font-semibold text-white">IMDb Rating</h3>
                </div>

                <input
                  id="imdbRating"
                  name="imdbRating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={formData.imdbRating}
                  onChange={handleChange}
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
                  id="runtime"
                  name="runtime"
                  type="text"
                  value={formData.runtime}
                  onChange={handleChange}
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
                  id="seasons"
                  name="seasons"
                  type="number"
                  min="1"
                  value={formData.seasons}
                  onChange={handleChange}
                  placeholder="e.g. 5"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Country and Language */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Country */}
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
                  onChange={handleChange}
                  placeholder="e.g. United Kingdom, United States"
                  className={inputClass}
                />
              </div>

              {/* Language */}
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
                  onChange={handleChange}
                  placeholder="e.g. English, Japanese, French"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Status */}
            <section>
              <div className="flex items-center gap-2">
                <SiSitepoint className="text-[#e5a84b]" />
                <h3 className="font-semibold text-white">Collection Status</h3>
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={inputClass}
              >
                <option value="watchlist">Watchlist</option>
                <option value="finished">Finished</option>
              </select>
            </section>

            {/* Error */}
            {error && <p className="text-sm text-red-400">{error}</p>}

            {/* Submit */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => router.back()}
                disabled={saving}
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-[#e5a84b] px-7 py-3 text-sm font-semibold text-[#141414] transition hover:bg-[#f0bb68] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
