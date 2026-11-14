"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import AddFranchiseMedia from "@/components/franchises/AddFranchiseMedia";
import FranchiseForm from "@/components/franchises/FranchiseForm";

import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { RiClapperboardAiFill, RiFilmAiFill } from "react-icons/ri";
import { TrashBin, Pencil } from "@gravity-ui/icons";
import DeleteConfirmationModal from "@/components/franchises/DeleteConfirmationModal";
import { TiPlus } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FranchiseCard from "@/components/franchises/FranchisesCard";
import FranchiseLoading from "../FranchiseLoading";

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

  // DELETE MEDIA MODAL
  const [deletingMedia, setDeletingMedia] = useState(null);

  // EDIT AND DELETE SUBCOLLECTION
  const [editingSubcollection, setEditingSubcollection] = useState(null);
  const [deletingSubcollection, setDeletingSubcollection] = useState(null);

  // CHECK WHETHER THIS IS A PARENT OR CHILD
  const isParent = franchise?.parentId == null;

  // FETCH FRANCHISE DETAILS
  const fetchFranchise = useCallback(async () => {
    if (!userId || !franchiseId) return;

    try {
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

    setLoading(true);
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

  // UPDATE SUBCOLLECTION
  const handleUpdateSubcollection = async (formData) => {
    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${editingSubcollection._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            ...formData,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update subcollection");
      }

      setEditingSubcollection(null);

      await fetchFranchise();
    } catch (error) {
      alert(error.message);
      throw error;
    }
  };

  // DELETE SUBCOLLECTION
  const handleDeleteSubcollection = async () => {
    if (!deletingSubcollection) return;

    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${deletingSubcollection._id}?userId=${encodeURIComponent(userId)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete subcollection");
      }

      setDeletingSubcollection(null);

      await fetchFranchise();
    } catch (error) {
      alert(error.message);
    }
  };

  // OPEN DELETE MEDIA MODAL
  const handleRemove = (media) => {
    setDeletingMedia(media);
  };

  // CONFIRM REMOVE MEDIA
  const handleConfirmRemove = async () => {
    if (!deletingMedia) return;

    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${franchiseId}/items/${deletingMedia._id}?userId=${encodeURIComponent(userId)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to remove media");
      }

      setDeletingMedia(null);
      setItems((previousItems) =>
        previousItems.filter(
          (item) => item.media?._id !== deletingMedia._id,
        ),
      );
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

  // LOADING
  if (loading) {
    return <FranchiseLoading />;
  }

  // ERROR
  if (error) {
    return (
      <div className="px-4 py-20 text-center text-white">
        <h2 className="mb-4 text-xl font-semibold">Failed to load franchise</h2>

        <p className="mb-5 text-red-400">{error}</p>

        <button
          onClick={() => {
            setLoading(true);
            fetchFranchise();
          }}
          className="mr-4 text-[#e5a84b]"
        >
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
      <div className="px-4 py-20 text-center text-white">
        <h2 className="mb-4 text-2xl font-semibold">Franchise not found</h2>

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
    <main className="min-h-screen bg-[#141414] px-3 py-4 text-white sm:px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* BREADCRUMBS */}

        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:mb-8 sm:text-sm">
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

          <span className="break-all text-[#e5a84b]">{franchise.name}</span>
        </div>

        {/* FRANCHISE HEADER */}

        <div className="mb-8 flex flex-col gap-5 sm:gap-6 md:flex-row">
          <div className="relative h-56 w-36 shrink-0 overflow-hidden rounded-xl bg-[#252525] sm:h-64 sm:w-44">
            {franchise.poster ? (
              <Image
                src={franchise.poster}
                alt={franchise.name}
                fill
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-5xl">
                <RiClapperboardAiFill />
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <p className="mb-2 text-sm uppercase tracking-widest text-[#e5a84b]">
              {isParent ? "Franchise" : "Subcollection"}
            </p>

            <h1 className="break-words text-2xl font-bold sm:text-3xl md:text-5xl">
              {franchise.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              {franchise.description || "No description available."}
            </p>

            {/* FRANCHISE INFORMATION */}

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60 sm:gap-5 sm:text-sm">
              <span>{items.length} Titles</span>
              <span>{watchlistCount} Watchlist</span>
              <span>{finishedCount} Finished</span>

              {isParent && <span>{children.length} Subcollections</span>}
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
              <Button
                onPress={() => setShowAddMedia(true)}
                className="bg-[#e5a84b] font-semibold text-black"
              >
                <TiPlus />
                Add Media
              </Button>

              {isParent && (
                <Button
                  onPress={() => setShowSubcollectionForm(true)}
                  className="border border-white/20 bg-white/5 text-white"
                >
                  <TiPlus />
                  Add Subcollection Franchise
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* SUBCOLLECTIONS - PARENT ONLY */}

        {isParent && children.length > 0 && (
          <section className="mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Subcollections
              </h2>

              <p className="mt-1 text-sm text-white/40">
                Explore the different collections inside{" "}
                <span className="font-semibold italic text-white">
                  {franchise.name}
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
              {children.map((child) => (
                <FranchiseCard
                  key={child._id}
                  franchise={child}
                  onEdit={setEditingSubcollection}
                  onDelete={(id) => {
                    const selectedSubcollection = children.find(
                      (child) => child._id === id,
                    );

                    setDeletingSubcollection(selectedSubcollection);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* MEDIA COLLECTION - PARENT AND CHILD */}

        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Titles</h2>

              <p className="mt-1 text-sm text-white/40">
                Arrange your titles in your preferred viewing order.
              </p>
            </div>

            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                onClick={() => handleSort("custom")}
                className={`flex-1 rounded-lg px-3 py-2 text-xs sm:flex-none sm:px-4 sm:text-sm ${
                  sortMode === "custom"
                    ? "bg-[#e5a84b] text-black"
                    : "bg-white/5 text-white/60"
                }`}
              >
                Custom Order
              </button>

              <button
                onClick={() => handleSort("release")}
                className={`flex-1 rounded-lg px-3 py-2 text-xs sm:flex-none sm:px-4 sm:text-sm ${
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
              <div className="mb-4 flex justify-center text-5xl">
                <RiFilmAiFill />
              </div>

              <h3 className="text-lg font-semibold">
                This collection is empty
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Add movies and series from your existing collections.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((item, index) => {
                const media = item.media;

                if (!media) return null;

                return (
                  <div
                    key={media._id}
                    className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-[#1c1c1c] p-2 transition hover:border-white/20 sm:gap-5 sm:p-4"
                  >
                    {/* ORDER */}

                    <div className="flex w-6 shrink-0 flex-col items-center sm:w-8">
                      <span className="text-xs font-semibold text-[#e5a84b] sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* POSTER */}

                    <Link href={`/details/${media._id}`}>
                      <Image
                        src={media.poster}
                        alt={media.title}
                        width={64}
                        height={96}
                        className="h-16 w-11 shrink-0 rounded-lg object-cover sm:h-24 sm:w-16"
                      />
                    </Link>

                    {/* DETAILS */}

                    <Link
                      href={`/details/${media._id}`}
                      className="min-w-0 flex-1"
                    >
                      <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                        {media.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-white/50 sm:gap-2 sm:text-xs">
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
                    </Link>

                    {/* ORDER CONTROLS */}

                    {sortMode === "custom" && (
                      <div className="flex shrink-0 flex-col gap-1">
                        <button
                          disabled={index === 0 || savingOrder}
                          onClick={() => moveItem(index, -1)}
                          className="rounded bg-white/5 px-2 py-2 text-white/70 hover:bg-white/10 disabled:opacity-20 sm:px-3"
                          aria-label="Move up"
                        >
                          <IoIosArrowUp />
                        </button>

                        <button
                          disabled={index === items.length - 1 || savingOrder}
                          onClick={() => moveItem(index, 1)}
                          className="rounded bg-white/5 px-2 py-2 text-white/70 hover:bg-white/10 disabled:opacity-20 sm:px-3"
                          aria-label="Move down"
                        >
                          <IoIosArrowDown />
                        </button>
                      </div>
                    )}

                    {/* REMOVE */}

                    <button
                      onClick={() => handleRemove(media)}
                      className="shrink-0 rounded-lg p-1.5 text-sm text-red-400 hover:bg-red-500/10 sm:p-2"
                      title="Remove from collection"
                    >
                      <TrashBin />
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
          onAdded={(addedMedia) => {
            setShowAddMedia(false);
            setItems((previousItems) => {
              const lastOrder = previousItems.reduce(
                (maxOrder, item) => Math.max(maxOrder, item.order || 0),
                0,
              );
              const updatedItems = [
                ...previousItems,
                ...addedMedia.map((media, index) => ({
                  media,
                  order: lastOrder + index + 1,
                })),
              ];

              return sortMode === "release"
                ? updatedItems.sort((a, b) => {
                    const dateA = a.media?.releaseDate || "9999-99-99";
                    const dateB = b.media?.releaseDate || "9999-99-99";

                    return dateA.localeCompare(dateB);
                  })
                : updatedItems;
            });
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

      {/* EDIT SUBCOLLECTION MODAL */}

      {editingSubcollection && (
        <FranchiseForm
          franchise={editingSubcollection}
          onClose={() => setEditingSubcollection(null)}
          onSubmit={handleUpdateSubcollection}
        />
      )}

      {/* DELETE MEDIA MODAL */}

      <DeleteConfirmationModal
        isOpen={!!deletingMedia}
        onOpenChange={(isOpen) => {
          if (!isOpen) setDeletingMedia(null);
        }}
        title="Remove Title?"
        message="Are you sure you want to remove"
        itemName={deletingMedia?.title}
        warning="This will only remove the title from this franchise collection. Your original movie or series will remain in your Watchlist or Finished collection."
        confirmText="Remove Title"
        onConfirm={handleConfirmRemove}
      />

      {/* DELETE SUBCOLLECTION MODAL */}

      <DeleteConfirmationModal
        isOpen={!!deletingSubcollection}
        onOpenChange={(isOpen) => {
          if (!isOpen) setDeletingSubcollection(null);
        }}
        title="Delete Subcollection?"
        message="Are you sure you want to delete"
        itemName={deletingSubcollection?.name}
        warning="This action will remove this subcollection from your franchise."
        confirmText="Delete Subcollection"
        onConfirm={handleDeleteSubcollection}
      />
    </main>
  );
}
