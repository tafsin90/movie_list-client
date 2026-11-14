"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AddFranchiseMedia({
  userId,
  franchiseId,
  existingMediaIds,
  onClose,
  onAdded,
}) {
  const [media, setMedia] = useState([]);
  const [status, setStatus] = useState("watchlist");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  // FETCH MEDIA BY STATUS
  useEffect(() => {
    let cancelled = false;

    const fetchMedia = async () => {
      if (!userId) {
        setLoading(false);
        setError("Please sign in to load your media.");
        return;
      }

      try {
        setLoading(true);
        setError("");
        setMedia([]);
        setSelected([]);

        let allMedia = [];
        let currentPage = 1;
        let totalPages = 1;

        // Fetch all pages for the selected status.
        do {
          const response = await fetch(
            `${API}/api/media/collection/${encodeURIComponent(userId)}/${status}?page=${currentPage}&limit=50`,
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Failed to fetch media");
          }

          allMedia = [...allMedia, ...(data.items || [])];

          totalPages = data.pagination?.totalPages || 1;
          currentPage++;
        } while (currentPage <= totalPages);

        if (!cancelled) {
          setMedia(allMedia);
        }
      } catch (error) {
        console.error("Fetch franchise media error:", error);

        if (!cancelled) {
          setError(error.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchMedia();

    return () => {
      cancelled = true;
    };
  }, [userId, status]);

  // FILTER MEDIA
  const filteredMedia = media.filter((item) => {
    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const notAdded = !existingMediaIds.includes(item._id);

    return matchesSearch && notAdded;
  });

  // SELECT / DESELECT MEDIA
  const toggleSelection = (mediaId) => {
    setSelected((previous) =>
      previous.includes(mediaId)
        ? previous.filter((id) => id !== mediaId)
        : [...previous, mediaId],
    );
  };

  // ADD SELECTED MEDIA
  const handleAdd = async () => {
    if (selected.length === 0 || adding) return;

    setAdding(true);
    setError("");

    let addedCount = 0;
    let failedCount = 0;
    let errorMessage = "";

    try {
      for (const mediaId of selected) {
        try {
          const response = await fetch(
            `${API}/api/franchise-folders/${franchiseId}/items`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId,
                mediaId,
              }),
            },
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Failed to add media");
          }

          addedCount++;
        } catch (error) {
          failedCount++;

          if (!errorMessage) {
            errorMessage = error.message;
          }
        }
      }

      if (addedCount > 0) {
        await onAdded();
      }

      if (failedCount === 0) {
        onClose();
        return;
      }

      alert(
        `${addedCount} media added successfully. ${failedCount} failed. ${errorMessage}`,
      );

      setSelected([]);
    } catch (error) {
      console.error("Add franchise media error:", error);
      setError(error.message);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-white/10 bg-[#202020]">
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <h2 className="text-xl font-semibold text-white">Add Media</h2>

            <p className="mt-1 text-xs text-white/40">
              Select movies and series from your collections.
            </p>
          </div>

          <button
            onClick={onClose}
            disabled={adding}
            className="text-2xl text-white/50 hover:text-white disabled:opacity-30"
          >
            ×
          </button>
        </div>

        {/* CONTENT */}

        <div className="space-y-4 p-5">
          {/* STATUS TABS */}

          <div className="flex gap-3">
            <button
              onClick={() => setStatus("watchlist")}
              disabled={adding}
              className={`flex-1 rounded-lg py-2 ${
                status === "watchlist"
                  ? "bg-[#e5a84b] text-black"
                  : "bg-white/5 text-white/60"
              }`}
            >
              Watchlist
            </button>

            <button
              onClick={() => setStatus("finished")}
              disabled={adding}
              className={`flex-1 rounded-lg py-2 ${
                status === "finished"
                  ? "bg-[#e5a84b] text-black"
                  : "bg-white/5 text-white/60"
              }`}
            >
              Finished
            </button>
          </div>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search your movies and series..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white outline-none focus:border-[#e5a84b]"
          />

          {/* MEDIA LIST */}

          <div className="max-h-[40vh] space-y-2 overflow-y-auto">
            {loading ? (
              <p className="py-10 text-center text-white/50">
                Loading {status}...
              </p>
            ) : error ? (
              <div className="py-10 text-center">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            ) : filteredMedia.length === 0 ? (
              <p className="py-10 text-center text-white/50">
                {media.length === 0
                  ? `Your ${status} is empty.`
                  : "No matching media found."}
              </p>
            ) : (
              filteredMedia.map((item) => (
                <button
                  key={item._id}
                  onClick={() => toggleSelection(item._id)}
                  disabled={adding}
                  className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition ${
                    selected.includes(item._id)
                      ? "border-[#e5a84b] bg-[#e5a84b]/10"
                      : "border-white/5 bg-white/[0.03] hover:bg-white/[0.07]"
                  }`}
                >
                  <Image
                    src={item.poster || "/images/placeholder.png"}
                    alt={item.title}
                    width={44}
                    height={64}
                    className="h-16 w-11 rounded object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      {item.releaseDate?.slice(0, 4) || "Unknown year"}
                      {" · "}
                      {item.category || item.mediaType}
                    </p>
                  </div>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#e5a84b] text-sm text-[#e5a84b]">
                    {selected.includes(item._id) ? "✓" : "+"}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between border-t border-white/10 p-5">
          <p className="text-sm text-white/50">{selected.length} selected</p>

          <div className="flex gap-3">
            <Button variant="light" onPress={onClose} isDisabled={adding}>
              Cancel
            </Button>

            <Button
              isLoading={adding}
              isDisabled={selected.length === 0 || loading || !!error}
              onPress={handleAdd}
              className="bg-[#e5a84b] font-semibold text-black"
            >
              Add Selected
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
