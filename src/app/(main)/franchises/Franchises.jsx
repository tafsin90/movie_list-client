"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

import FranchiseForm from "@/components/franchises/FranchiseForm";
import DeleteConfirmationModal from "@/components/franchises/DeleteConfirmationModal";
import { Button, Modal } from "@heroui/react";
import FranchiseCard from "@/components/franchises/FranchisesCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import FranchiseLoading from "./FranchiseLoading";
import { RiClapperboardAiFill } from "react-icons/ri";
import { TrashBin } from "@gravity-ui/icons";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Franchises() {
  const { data: session, isPending } = authClient.useSession();

  const userId = session?.user?.id;

  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formOpen, setFormOpen] = useState(false);
  const [editingFranchise, setEditingFranchise] = useState(null);

  const [deleteFranchiseId, setDeleteFranchiseId] = useState(null);

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
      // console.error(error);
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
      const response = await fetch(`${API}/api/franchise-folders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...formData,
        }),
      });

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

  const handleDelete = async () => {
    if (!deleteFranchiseId) return;

    try {
      const response = await fetch(
        `${API}/api/franchise-folders/${deleteFranchiseId}?userId=${encodeURIComponent(userId)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setDeleteFranchiseId(null);

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

  const deletingFranchise = franchises.find(
    (franchise) => franchise._id === deleteFranchiseId,
  );
  return (
    <main className="min-h-screen bg-[#141414] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Franchises</h1>

            <p className="mt-2 text-sm text-white/50">
              Organize your movie universes and franchises.
            </p>
          </div>

          <Button
            onPress={openCreateForm}
            className="bg-[#e5a84b] font-semibold text-black"
          >
            <AiOutlinePlusCircle />
            Create Franchise
          </Button>
        </div>

        {loading ? (
          <FranchiseLoading />
        ) : franchises.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#1a1a1a] px-6 py-16 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ">
              <RiClapperboardAiFill className="text-4xl" />
            </div>

            <h2 className="text-xl font-semibold text-white">
              No franchises yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
              Start organizing your favorite movie universes.
            </p>

            <Button
              onPress={openCreateForm}
              className="mt-7 bg-[#e5a84b] px-6 font-semibold text-black transition-colors hover:bg-[#f0b85f]"
            >
              Create Your First Franchise
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            {franchises.map((franchise) => (
              <FranchiseCard
                key={franchise._id}
                franchise={franchise}
                onEdit={openEditForm}
                onDelete={setDeleteFranchiseId}
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
          onSubmit={editingFranchise ? handleUpdate : handleCreate}
        />
      )}

      {/* delete Modal */}
      <DeleteConfirmationModal
        isOpen={!!deleteFranchiseId}
        onOpenChange={(isOpen) => {
          if (!isOpen) setDeleteFranchiseId(null);
        }}
        title="Delete Franchise?"
        message="Are you sure you want to delete"
        itemName={deletingFranchise?.name}
        warning="Your original movies and series will remain in your Watchlist and Finished collections."
        confirmText="Delete Franchise"
        onConfirm={handleDelete}
      />
    </main>
  );
}
