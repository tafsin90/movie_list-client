
"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

import FranchiseForm from "@/components/franchises/FranchiseForm";
import { Button } from "@heroui/react";
import FranchiseCard from "@/components/franchises/FranchisesCard";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Franchises() {
  const { data: session, isPending } = authClient.useSession();

  const userId = session?.user?.id;

  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formOpen, setFormOpen] = useState(false);
  const [editingFranchise, setEditingFranchise] = useState(null);

  const fetchFranchises = useCallback(async () => {
    if (!userId) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${API}/api/franchise-folders/user/${userId}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch franchises");
      }

      const data = await response.json();

      setFranchises(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load franchises");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchFranchises();
    } else if (!isPending) {
      setLoading(false);
    }
  }, [userId, isPending, fetchFranchises]);

  const handleCreate = async (formData) => {
    try {
      const response = await fetch(
        `${API}/api/franchise-folders`,
        {
          method: "POST",
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
        throw new Error(data.message);
      }

      setFormOpen(false);
      await fetchFranchises();
    } catch (error) {
      alert(error.message);
      throw error;
    }
  };

  const handleUpdate = async (formData) => {
    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${editingFranchise._id}`,
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
        throw new Error(data.message);
      }

      setEditingFranchise(null);
      setFormOpen(false);

      await fetchFranchises();
    } catch (error) {
      alert(error.message);
      throw error;
    }
  };

  const handleDelete = async (franchiseId) => {
    const confirmed = window.confirm(
      "Delete this franchise and all its subcollections? Your original movies and series will remain in your Watchlist and Finished collections.",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${franchiseId}?userId=${encodeURIComponent(userId)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      await fetchFranchises();
    } catch (error) {
      alert(error.message);
    }
  };

  const openCreateForm = () => {
    setEditingFranchise(null);
    setFormOpen(true);
  };

  const openEditForm = (franchise) => {
    setEditingFranchise(franchise);
    setFormOpen(true);
  };

  if (isPending) {
    return (
      <div className="py-20 text-center text-white/50">
        Loading...
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="py-20 text-center text-white/50">
        Please sign in to view your franchises.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#141414] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Franchises
            </h1>

            <p className="mt-2 text-sm text-white/50">
              Organize your movie universes and franchises.
            </p>
          </div>

          <Button
            onPress={openCreateForm}
            className="bg-[#e5a84b] font-semibold text-black"
          >
            + Create Franchise
          </Button>
        </div>

        {loading ? (
          <div className="py-20 text-center text-white/50">
            Loading franchises...
          </div>
        ) : franchises.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
            <div className="mb-4 text-5xl">🎬</div>

            <h2 className="text-xl font-semibold">
              No franchises yet
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Create your first franchise collection.
            </p>

            <Button
              onPress={openCreateForm}
              className="mt-6 bg-[#e5a84b] font-semibold text-black"
            >
              Create Your First Franchise
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {franchises.map((franchise) => (
              <FranchiseCard
                key={franchise._id}
                franchise={franchise}
                onEdit={openEditForm}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {formOpen && (
        <FranchiseForm
          franchise={editingFranchise}
          onClose={() => {
            setFormOpen(false);
            setEditingFranchise(null);
          }}
          onSubmit={
            editingFranchise
              ? handleUpdate
              : handleCreate
          }
        />
      )}
    </main>
  );
}
