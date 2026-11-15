
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { MdOutlinePermMedia, MdOutlineStar } from "react-icons/md";
import { IoCheckmarkDoneCircle, IoHourglassOutline } from "react-icons/io5";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

// Lazy-load charts only when the Statistics page needs them.
const StatisticsCharts = dynamic(
  () => import("./StatisticsCharts"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="animate-pulse text-white/50">
          Loading charts...
        </p>
      </div>
    ),
  },
);

const categoryColors = {
  movie: "#F4B942",
  "short film": "#FF5C5C",
  series: "#4285F4",
  documentary: "#A78BFA",
  anime: "#34C88A",
  animation: "#F472B6",
};

function getCategoryColor(category) {
  return (
    categoryColors[category?.toLowerCase()] ||
    "#9B7BEA"
  );
}

function OverviewCard({
  icon,
  label,
  value,
  description,
  iconColor,
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#222222] p-4 transition-colors duration-200 hover:bg-[#292929] sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <span
          className="text-lg"
          style={{ color: iconColor }}
        >
          {icon}
        </span>

        <p className="text-right text-sm text-white/60">
          {label}
        </p>
      </div>

      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
        {value}
      </h2>

      <p className="mt-1 text-sm text-white/50">
        {description}
      </p>
    </div>
  );
}

function CollectionBreakdown({ categories = [] }) {
  const total = categories.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  if (!total) {
    return (
      <div className="rounded-xl border border-white/5 bg-[#222222] p-5">
        <h2 className="font-semibold">
          Your Collection Breakdown
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Add media to see your collection distribution.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/5 bg-[#222222] p-4 sm:p-5">
      <h2 className="font-semibold">
        Your Collection Breakdown
      </h2>

      <p className="mt-2 text-sm text-white/50">
        Category distribution
      </p>

      {/* SEGMENTED BAR */}
      <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-white/10">
        {categories.map((item) => {
          const percentage = (item.value / total) * 100;

          return (
            <div
              key={item.name}
              title={`${item.name}: ${percentage.toFixed(1)}%`}
              style={{
                width: `${percentage}%`,
                backgroundColor: getCategoryColor(item.name),
              }}
            />
          );
        })}
      </div>

      {/* CATEGORY LABELS */}
      <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-2">
        {categories.map((item) => {
          const percentage = (item.value / total) * 100;

          return (
            <div
              key={item.name}
              className="flex items-center gap-1.5 text-sm"
              style={{
                color: getCategoryColor(item.name),
              }}
            >
              <span className="font-medium">
                {item.name}
              </span>

              <span>
                {percentage.toFixed(0)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Statistics() {
  const { data: session, isPending } = authClient.useSession();

  const [activeTab, setActiveTab] = useState("watchlist");

  const [statistics, setStatistics] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  const userId = session?.user?.id;

  useEffect(() => {
    if (isPending) return;

    if (!userId) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchStatistics = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API}/api/media/stats/${userId}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }

        const data = await response.json();

        setStatistics(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Statistics error:", error);

          setError(
            "Failed to load statistics. Please try again.",
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchStatistics();

    return () => {
      controller.abort();
    };
  }, [userId, isPending, retry]);

  const overview = statistics?.overview;

  const activeCategories =
    statistics?.categories?.[activeTab] || [];

  const activeGenres =
    statistics?.genres?.[activeTab] || [];

  if (isPending || loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 text-white">
        <p className="animate-pulse text-white/50">
          Loading statistics...
        </p>
      </section>
    );
  }


  if (error) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-white">
        <p className="text-center text-red-400">
          {error}
        </p>

        <Button
          onPress={() => setRetry((previous) => previous + 1)}
          className="bg-[#D9A441] text-black"
        >
          Try Again
        </Button>
      </section>
    );
  }

  if (!statistics || !overview) {
    return null;
  }

  return (
    <section className="min-h-screen space-y-6 px-4 py-8 text-white sm:px-6 lg:px-8">

      {/* HEADER */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Statistics Dashboard Concept
        </h1>

        <p className="text-sm text-white/50 sm:text-base">
          Explore your media collection through statistics.
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">

        <OverviewCard
          icon={<MdOutlinePermMedia />}
          label="Total titles"
          value={overview.total}
          description="All media in your collection"
          iconColor="#E5A83B"
        />

        <OverviewCard
          icon={<IoCheckmarkDoneCircle />}
          label="Completed"
          value={overview.completed}
          description="Finished watching"
          iconColor="#55B987"
        />

        <OverviewCard
          icon={<IoHourglassOutline />}
          label="Watchlist"
          value={overview.watchlist}
          description="Waiting to watch"
          iconColor="#4F8CFF"
        />

        <OverviewCard
          icon={<MdOutlineStar />}
          label="Average IMDB rating (Watchlist + Finished)"
          value={overview.ratedCount > 0
            ? overview.averageRating
            : "—"}
          description={`${overview.ratedCount} rated titles`}
          iconColor="#E5A83B"
        />

      </div>

      {/* COLLECTION BREAKDOWN */}
      <CollectionBreakdown
        categories={overview.categories}
      />

      {/* TABS */}
      <div className="flex w-full gap-3">
        <Button
          className={`flex-1 ${
            activeTab === "watchlist"
              ? "bg-[#D9A441] text-black"
              : "border border-white/10 bg-[#222222] text-white"
          }`}
          onPress={() => setActiveTab("watchlist")}
        >
          Watchlist
        </Button>

        <Button
          className={`flex-1 ${
            activeTab === "finished"
              ? "bg-[#D9A441] text-black"
              : "border border-white/10 bg-[#222222] text-white"
          }`}
          onPress={() => setActiveTab("finished")}
        >
          Finished
        </Button>
      </div>

      {/* CHARTS */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          {activeTab === "watchlist"
            ? "Watchlist Statistics"
            : "Finished Statistics"}
        </h2>

        <StatisticsCharts
          categories={activeCategories}
          genres={activeGenres}
        />
      </div>

    </section>
  );
}
