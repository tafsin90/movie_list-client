"use client";

import { useState } from "react";

import AddWatchlistForm from "@/components/add/AddWatchlistForm";
import AddFinishedForm from "@/components/add/AddFinishedForm";
import { Bookmark, Check } from "@gravity-ui/icons";

export default function AddPage() {
  const [selectedOption, setSelectedOption] = useState("a");

  return (
    <main className="min-h-screen w-full  px-5 py-12  md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#e5a84b]">
            Your Collection
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Add Something New<span className="text-[#e5a84b]">.</span>
          </h1>

          <p className="mt-3 text-sm text-white/45 md:text-base">
            Keep track of what you want to watch and what you've already seen.
          </p>
        </div>

        {/* Selection */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Watchlist Option */}
          <button
            type="button"
            onClick={() => setSelectedOption("watchlist")}
            className={`group rounded-xl border p-6 text-left transition-all duration-200 ${
              selectedOption === "watchlist"
                ? "border-[#e5a84b] bg-[#e5a84b]/[0.07]"
                : "border-white/10 bg-[#1b1b1b] hover:border-white/25"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-3xl">
                <Bookmark className="h-7 w-7" />
              </span>

              <span
                className={`h-3 w-3 rounded-full border ${
                  selectedOption === "watchlist"
                    ? "border-[#e5a84b] bg-[#e5a84b]"
                    : "border-white/30"
                }`}
              />
            </div>

            <h2 className="text-xl font-semibold">Add to Watchlist</h2>

            <p className="mt-2 text-sm leading-relaxed text-white/45">
              Something you're planning to watch? Save it for later.
            </p>
          </button>

          {/* Finished Option */}
          <button
            type="button"
            onClick={() => setSelectedOption("finished")}
            className={`group rounded-xl border p-6 text-left transition-all duration-200 ${
              selectedOption === "finished"
                ? "border-[#e5a84b] bg-[#e5a84b]/[0.07]"
                : "border-white/10 bg-[#1b1b1b] hover:border-white/25"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-3xl">
                <Check className="h-7 w-7" />{" "}
              </span>

              <span
                className={`h-3 w-3 rounded-full border ${
                  selectedOption === "finished"
                    ? "border-[#e5a84b] bg-[#e5a84b]"
                    : "border-white/30"
                }`}
              />
            </div>

            <h2 className="text-xl font-semibold">Add to Finished</h2>

            <p className="mt-2 text-sm leading-relaxed text-white/45">
              Already watched it? Add it to your finished collection.
            </p>
          </button>
        </div>

        {/* Selected Form */}
        {/* Selected Form */}
<div>
  {selectedOption === "watchlist" && <AddWatchlistForm />}

  {selectedOption === "finished" && <AddFinishedForm />}
</div>
      </div>
    </main>
  );
}








