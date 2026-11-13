
"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import AddFranchiseMedia from "@/components/franchises/AddFranchiseMedia";
import FranchiseForm from "@/components/franchises/FranchiseForm";

import Link from "next/link";
import { useParams } from "next/navigation";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function FranchiseDetails() {
  const params = useParams();
  const franchiseId = params.FranchiseId;

  const { data: session, isPending } = authClient.useSession();
  const userId = session?.user?.id;

  const [franchise, setFranchise] = useState(null);
  const [parentFranchise, setParentFranchise] = useState(null);

  const [items, setItems] = useState([]);
  const [children, setChildren] = useState([]);

  const [loading, setLoading] = useState(true);
  const [showAddMedia, setShowAddMedia] = useState(false);
  const [showSubcollectionForm, setShowSubcollectionForm] = useState(false);

  const [savingOrder, setSavingOrder] = useState(false);
  const [error, setError] = useState("");

  const [sortMode, setSortMode] = useState("custom");

  // CHECK WHETHER THIS IS A PARENT OR CHILD
  const isParent = franchise?.parentId == null;

  // FETCH FRANCHISE DETAILS
  const fetchFranchise = useCallback(async () => {
    if (!userId || !franchiseId) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API}/api/franchise-folders/${franchiseId}?userId=${encodeURIComponent(userId)}`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load franchise");
      }

      setFranchise(data.franchise);
      setItems(data.items || []);
      setChildren(data.children || []);

      // FETCH PARENT DETAILS WHEN THIS IS A SUBCOLLECTION
      if (data.franchise.parentId != null) {
        const parentResponse = await fetch(
          `${API}/api/franchise-folders/${data.franchise.parentId}?userId=${encodeURIComponent(userId)}`,
        );

        const parentData = await parentResponse.json();

        if (parentResponse.ok) {
          setParentFranchise(parentData.franchise);
        } else {
          setParentFranchise(null);
        }
      } else {
        setParentFranchise(null);
      }
    } catch (error) {
      console.error("Franchise loading error:", error);

      setError(error.message);
      setFranchise(null);
      setItems([]);
      setChildren([]);
      setParentFranchise(null);
    } finally {
      setLoading(false);
    }
  }, [userId, franchiseId]);

  useEffect(() => {
    if (isPending) return;

    if (!userId) {
      setLoading(false);
      return;
    }

    if (!franchiseId) {
      setLoading(false);
      setError("Franchise ID is missing");
      return;
    }

    fetchFranchise();
  }, [isPending, userId, franchiseId, fetchFranchise]);

  // CREATE SUBCOLLECTION
  const handleCreateSubcollection = async (formData) => {
    try {
      const response = await fetch(`${API}/api/franchise-folders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...formData,
          parentId: franchiseId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create subcollection");
      }

      setShowSubcollectionForm(false);

      await fetchFranchise();
    } catch (error) {
      alert(error.message);
      throw error;
    }
  };

  // REMOVE MEDIA
  const handleRemove = async (mediaId) => {
    const confirmed = window.confirm(
      "Remove this title from this collection?",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${franchiseId}/items/${mediaId}?userId=${encodeURIComponent(userId)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to remove media");
      }

      await fetchFranchise();
    } catch (error) {
      alert(error.message);
    }
  };

  // SAVE CUSTOM ORDER
  const saveOrder = async (updatedItems) => {
    try {
      setSavingOrder(true);

      const mediaIds = updatedItems.map((item) => item.media._id);

      const response = await fetch(
        `${API}/api/franchise-folders/${franchiseId}/order`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            mediaIds,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update order");
      }

      setItems(
        updatedItems.map((item, index) => ({
          ...item,
          order: index + 1,
        })),
      );
    } catch (error) {
      alert(error.message);
      await fetchFranchise();
    } finally {
      setSavingOrder(false);
    }
  };

  // MOVE ITEM UP OR DOWN
  const moveItem = async (index, direction) => {
    if (sortMode !== "custom" || savingOrder) return;

    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= items.length) {
      return;
    }

    const updatedItems = [...items];

    const [movedItem] = updatedItems.splice(index, 1);

    updatedItems.splice(newIndex, 0, movedItem);

    setItems(updatedItems);

    await saveOrder(updatedItems);
  };

  // RELEASE DATE SORTING
  const handleSort = async (mode) => {
    setSortMode(mode);

    if (mode === "release") {
      const sortedItems = [...items].sort((a, b) => {
        const dateA = a.media?.releaseDate || "9999-99-99";
        const dateB = b.media?.releaseDate || "9999-99-99";

        return dateA.localeCompare(dateB);
      });

      setItems(sortedItems);
    } else {
      await fetchFranchise();
    }
  };

  // SESSION CHECK
  if (isPending) {
    return (
      <div className="py-20 text-center text-white/50">
        Checking your session...
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="py-20 text-center text-white/50">
        Please sign in to continue.
      </div>
    );
  }

  // LOADING
  if (loading) {
    return (
      <div className="py-20 text-center text-white/50">
        Loading franchise...
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="py-20 text-center text-white">
        <h2 className="mb-4 text-xl font-semibold">
          Failed to load franchise
        </h2>

        <p className="mb-5 text-red-400">{error}</p>

        <button onClick={fetchFranchise} className="mr-4 text-[#e5a84b]">
          Try Again
        </button>

        <Link href="/franchises" className="text-white/60">
          Back to Franchises
        </Link>
      </div>
    );
  }

  // NOT FOUND
  if (!franchise) {
    return (
      <div className="py-20 text-center text-white">
        <h2 className="mb-4 text-2xl font-semibold">
          Franchise not found
        </h2>

        <Link href="/franchises" className="text-[#e5a84b]">
          Back to Franchises
        </Link>
      </div>
    );
  }

  const watchlistCount = items.filter(
    (item) => item.media?.status === "watchlist",
  ).length;

  const finishedCount = items.filter(
    (item) => item.media?.status === "finished",
  ).length;

  return (
    <main className="min-h-screen bg-[#141414] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* BREADCRUMBS */}

        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/franchises"
            className="text-white/50 hover:text-[#e5a84b]"
          >
            Franchises
          </Link>

          {parentFranchise && (
            <>
              <span className="text-white/30">/</span>

              <Link
                href={`/franchises/${parentFranchise._id}`}
                className="text-white/50 hover:text-[#e5a84b]"
              >
                {parentFranchise.name}
              </Link>
            </>
          )}

          <span className="text-white/30">/</span>

          <span className="text-[#e5a84b]">{franchise.name}</span>
        </div>

        {/* FRANCHISE HEADER */}

        <div className="mb-10 flex flex-col gap-6 md:flex-row">
          <div className="h-64 w-44 shrink-0 overflow-hidden rounded-xl bg-[#252525]">
            {franchise.poster ? (
              <img
                src={franchise.poster}
                alt={franchise.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-5xl">
                🎬
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-2 text-sm uppercase tracking-widest text-[#e5a84b]">
              {isParent ? "Franchise" : "Subcollection"}
            </p>

            <h1 className="text-3xl font-bold md:text-5xl">
              {franchise.name}
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-white/50">
              {franchise.description || "No description available."}
            </p>

            {/* FRANCHISE INFORMATION */}

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/60">
              <span>{items.length} Titles</span>
              <span>{watchlistCount} Watchlist</span>
              <span>{finishedCount} Finished</span>

              {isParent && (
                <span>{children.length} Subcollections</span>
              )}
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onPress={() => setShowAddMedia(true)}
                className="bg-[#e5a84b] font-semibold text-black"
              >
                + Add Media
              </Button>

              {isParent && (
                <Button
                  onPress={() => setShowSubcollectionForm(true)}
                  className="border border-white/20 bg-white/5 text-white"
                >
                  + Add Subcollection
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* SUBCOLLECTIONS - PARENT ONLY */}

        {isParent && children.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Subcollections
              </h2>

              <p className="mt-1 text-sm text-white/40">
                Explore the different collections inside {franchise.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((child) => (
                <Link
                  key={child._id}
                  href={`/franchises/${child._id}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1c] transition hover:border-[#e5a84b]/50"
                >
                  <div className="h-52 overflow-hidden bg-[#252525]">
                    {child.poster ? (
                      <img
                        src={child.poster}
                        alt={child.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-5xl">
                        🎞️
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold transition group-hover:text-[#e5a84b]">
                      {child.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-white/40">
                      {child.description || "No description available."}
                    </p>

                    <p className="mt-4 text-xs text-[#e5a84b]">
                      Open subcollection →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* MEDIA COLLECTION - PARENT AND CHILD */}

        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">
                Collection
              </h2>

              <p className="mt-1 text-sm text-white/40">
                Arrange your titles in your preferred viewing order.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleSort("custom")}
                className={`rounded-lg px-4 py-2 text-sm ${
                  sortMode === "custom"
                    ? "bg-[#e5a84b] text-black"
                    : "bg-white/5 text-white/60"
                }`}
              >
                Custom Order
              </button>

              <button
                onClick={() => handleSort("release")}
                className={`rounded-lg px-4 py-2 text-sm ${
                  sortMode === "release"
                    ? "bg-[#e5a84b] text-black"
                    : "bg-white/5 text-white/60"
                }`}
              >
                Release Order
              </button>
            </div>
          </div>

          {/* MEDIA LIST */}

          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-white/15 py-20 text-center">
              <div className="mb-4 text-5xl">🎞️</div>

              <h3 className="text-lg font-semibold">
                This collection is empty
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Add movies and series from your existing collections.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => {
                const media = item.media;

                if (!media) return null;

                return (
                  <div
                    key={media._id}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1c1c1c] p-3 transition hover:border-white/20 sm:gap-5 sm:p-4"
                  >
                    {/* ORDER */}

                    <div className="flex w-8 shrink-0 flex-col items-center">
                      <span className="text-sm font-semibold text-[#e5a84b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* POSTER */}

                    <img
                      src={media.poster}
                      alt={media.title}
                      className="h-20 w-14 shrink-0 rounded-lg object-cover sm:h-24 sm:w-16"
                    />

                    {/* DETAILS */}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold text-white">
                        {media.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/50">
                        <span>
                          {media.releaseDate?.slice(0, 4) || "Unknown year"}
                        </span>

                        <span>·</span>

                        <span>{media.category}</span>

                        <span>·</span>

                        <span>{media.mediaType}</span>
                      </div>

                      <span
                        className={`mt-2 inline-block rounded-full px-2 py-1 text-[10px] uppercase ${
                          media.status === "finished"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {media.status}
                      </span>
                    </div>

                    {/* ORDER CONTROLS */}

                    {sortMode === "custom" && (
                      <div className="flex shrink-0 flex-col gap-1">
                        <button
                          disabled={index === 0 || savingOrder}
                          onClick={() => moveItem(index, -1)}
                          className="rounded bg-white/5 px-3 py-1 text-white/70 hover:bg-white/10 disabled:opacity-20"
                          aria-label="Move up"
                        >
                          ↑
                        </button>

                        <button
                          disabled={index === items.length - 1 || savingOrder}
                          onClick={() => moveItem(index, 1)}
                          className="rounded bg-white/5 px-3 py-1 text-white/70 hover:bg-white/10 disabled:opacity-20"
                          aria-label="Move down"
                        >
                          ↓
                        </button>
                      </div>
                    )}

                    {/* REMOVE */}

                    <button
                      onClick={() => handleRemove(media._id)}
                      className="shrink-0 rounded-lg px-2 py-2 text-sm text-red-400 hover:bg-red-500/10"
                      title="Remove from collection"
                    >
                      ×
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* ADD MEDIA MODAL */}

      {showAddMedia && (
        <AddFranchiseMedia
          userId={userId}
          franchiseId={franchiseId}
          existingMediaIds={items
            .filter((item) => item.media)
            .map((item) => item.media._id)}
          onClose={() => setShowAddMedia(false)}
          onAdded={async () => {
            setShowAddMedia(false);
            await fetchFranchise();
          }}
        />
      )}

      {/* ADD SUBCOLLECTION MODAL - PARENT ONLY */}

      {isParent && showSubcollectionForm && (
        <FranchiseForm
          franchise={null}
          onClose={() => setShowSubcollectionForm(false)}
          onSubmit={handleCreateSubcollection}
        />
      )}
    </main>
  );
}
