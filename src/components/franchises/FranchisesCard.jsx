
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import Image from "next/image";
import { RiClapperboardAiFill } from "react-icons/ri";

export default function FranchiseCard({
  franchise,
  onEdit,
  onDelete,
}) {
  const [posterError, setPosterError] = useState(false);

  const poster = franchise.poster?.trim();

  const validPoster =
    poster &&
    (poster.startsWith("https://") ||
      poster.startsWith("http://") ||
      poster.startsWith("/"));

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1c] transition hover:border-[#e5a84b]/50">
      <Link href={`/franchises/${franchise._id}`}>
        <div className="relative aspect-[5/6] overflow-hidden bg-[#252525]">
          {validPoster && !posterError ? (
            <Image
              src={poster}
              alt={franchise.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              onError={() => setPosterError(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-white/30">
              <span className="text-6xl"><RiClapperboardAiFill /></span>
              <span className="text-sm">No Poster</span>
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
        

        <div className="flex justify-between w-full gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className={"flex-1 bg-white/10"}
            onPress={() => onEdit(franchise)}
            aria-label="Edit franchise"
          >
            <Pencil className="h-4 w-4 text-white/70" />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="light"
            className={"flex-1 bg-white/10"}
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
