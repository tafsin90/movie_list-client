
"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Pencil, TrashBin } from "@gravity-ui/icons";

export default function FranchiseCard({
  franchise,
  onEdit,
  onDelete,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1c] transition hover:border-[#e5a84b]/50">
      <Link href={`/franchises/${franchise._id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#252525]">
          {franchise.poster ? (
            <img
              src={franchise.poster}
              alt={franchise.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white/20">
              <span className="text-5xl">🎬</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white">
              {franchise.name}
            </h3>

            <p className="mt-1 text-sm text-white/60">
              {franchise.subcollectionCount || 0} subcollections
            </p>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between border-t border-white/10 p-3">
        <span className="text-xs text-white/40">
          Franchise collection
        </span>

        <div className="flex gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => onEdit(franchise)}
            aria-label="Edit franchise"
          >
            <Pencil className="h-4 w-4 text-white/70" />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => onDelete(franchise._id)}
            aria-label="Delete franchise"
          >
            <TrashBin className="h-4 w-4 text-red-400" />
          </Button>
        </div>
      </div>
    </div>
  );
}
