
"use client";

import { useEffect, useState } from "react";

export default function FranchiseForm({
  franchise,
  onClose,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(franchise?.name || "");
    setPoster(franchise?.poster || "");
    setDescription(franchise?.description || "");
  }, [franchise]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setLoading(true);

    try {
      await onSubmit({
        name,
        poster,
        description,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-5 rounded-2xl border border-white/10 bg-[#202020] p-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {franchise ? "Edit Franchise" : "Create Franchise"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-white/50"
          >
            ×
          </button>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            Franchise Name
          </label>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Marvel, Fast & Furious..."
            className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white outline-none focus:border-[#e5a84b]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            Poster URL
          </label>

          <input
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            placeholder="https://example.com/poster.jpg"
            className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white outline-none focus:border-[#e5a84b]"
          />
        </div>

        {poster && (
          <img
            src={poster}
            alt="Poster preview"
            className="h-40 w-28 rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}

        <div>
          <label className="mb-2 block text-sm text-white/70">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something about this franchise..."
            rows={4}
            className="w-full resize-none rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-white outline-none focus:border-[#e5a84b]"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-white/60 hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-[#e5a84b] px-5 py-2 font-semibold text-black disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : franchise
                ? "Save Changes"
                : "Create Franchise"}
          </button>
        </div>
      </form>
    </div>
  );
}
