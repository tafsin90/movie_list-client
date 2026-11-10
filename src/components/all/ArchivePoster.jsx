"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ArchivePoster = ({ item }) => {
  const isFinished = item.status === "finished";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group w-full max-w-[140px] min-w-0"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-[#222]">
        {" "}
        <Image
          src={item.poster}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        <span
          className={`absolute right-2 top-2 z-10 rounded-md border px-2 py-1 text-[9px] font-medium tracking-wide backdrop-blur-md transition-all duration-300 ${
            isFinished
              ? "border-emerald-300/20 bg-emerald-950/75 text-emerald-200 shadow-[0_0_8px_rgba(16,185,129,0.15)] group-hover:border-emerald-300/60 group-hover:bg-emerald-900/80 group-hover:text-emerald-100 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5),0_0_28px_rgba(16,185,129,0.35),0_0_45px_rgba(16,185,129,0.15)]"
              : "border-amber-300/20 bg-amber-950/75 text-amber-200 shadow-[0_0_8px_rgba(245,158,11,0.15)] group-hover:border-amber-300/60 group-hover:bg-amber-900/80 group-hover:text-amber-100 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5),0_0_28px_rgba(245,158,11,0.35),0_0_45px_rgba(245,158,11,0.15)]"
          }`}
        >
          {isFinished ? "FINISHED" : "WATCHLIST"}
        </span>
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* IMDb rating */}
        {item.imdbRating && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-[10px] text-[#e5a84b]">★</span>

            <span className="text-[10px] font-medium text-white">
              {Number(item.imdbRating).toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Poster information */}
      <div className="mt-3">
        <h3 className="truncate text-sm font-medium text-white/85 transition-colors group-hover:text-[#e5a84b]">
          {item.title}
        </h3>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xs text-white/35">{item.releaseDate}</p>

          <p className="truncate text-[10px] text-white/30">{item.category}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default ArchivePoster;
