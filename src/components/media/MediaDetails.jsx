"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* ---------- Rating ring (IMDb) ---------- */
function RatingRing({ rating }) {
  const value = Number(rating);
  const hasRating = Number.isFinite(value) && value > 0;

  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference * (1 - (hasRating ? Math.min(value, 10) / 10 : 0));

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-20 w-20 shrink-0">
        <svg viewBox="0 0 80 80" className="-rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="5"
          />

          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#f5c518"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
          {hasRating ? value.toFixed(1) : "–"}
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          {hasRating ? (
            <>
              {value}/10 on <span className="text-[#F5C518]">IMDB</span>
            </>
          ) : (
            "Not rated yet"
          )}
        </p>

        <p className="text-xs text-white/40">Community score</p>
      </div>
    </div>
  );
}

/* ---------- Tilting poster ---------- */
function TiltPoster({ src, alt }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px]">
      {" "}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative aspect-[2/3] w-full overflow-hidden rounded-[28px] rounded-br-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/15"
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex aspect-[2/3] items-center justify-center bg-[#202020] text-sm text-white/30">
            No poster available
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function MediaDetails({ id }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isPending) return;

    if (!session?.user?.id) {
      setLoading(false);
      setError("Please sign in to view this media.");
      return;
    }

    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/editmedia/${id}/${session.user.id}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load media.");
        }

        setMedia(data);
      } catch (error) {
        console.error("Error fetching media:", error);
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [id, session, isPending]);

  const formatDate = (date) => {
    if (!date) return "Not available";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /* Loading skeleton */
  if (isPending || loading) {
    return (
      <div className="grid animate-pulse gap-10 md:grid-cols-[300px_1fr]">
        <div className="mx-auto aspect-[2/3] w-full max-w-[300px] rounded-[28px] bg-white/5" />
        <div className="space-y-5 py-4">
          <div className="h-5 w-40 rounded bg-white/5" />
          <div className="h-12 w-3/4 rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-white/5" />
          <div className="h-20 w-full rounded bg-white/5" />
        </div>
      </div>
    );
  }

  /* Error state */
  if (error || !media) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-serif text-2xl text-white">
          Can't load this title
        </h2>
        <p className="max-w-sm text-sm text-white/50">
          {error || "This title isn't in your collection."}
        </p>
        <button
          onClick={() => router.back()}
          className="rounded-full bg-[#e5a84b] px-6 py-2.5 text-sm font-medium text-black transition hover:bg-[#f0bd68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5a84b]"
        >
          Go back
        </button>
      </div>
    );
  }

  const isFinished = media.status === "finished";
  const isSeries = media.category === "Series" || media.category === "Anime";

  const facts = [
    { label: "Released", value: media.releaseDate || "Unknown" },
    { label: "Runtime", value: media.runtime || "Not available" },
    ...(isSeries
      ? [{ label: "Seasons", value: media.seasons || "Not available" }]
      : []),
    { label: "Country", value: media.country || "Unknown" },
    { label: "Language", value: media.language || "Unknown" },
  ];

  return (
    <div className="relative isolate space-y-10 sm:space-y-14">
      {" "}
      {/* Ambient glow pulled from the poster */}
      {media.poster && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-10%] -top-24 -z-10 h-[560px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black 20%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 20%, transparent)",
          }}
        >
          <Image
            src={media.poster}
            alt={media.title}
            fill
            className="h-full w-full scale-125 object-cover opacity-30 blur-3xl saturate-150"
          />
        </div>
      )}
      <button
        onClick={() => router.back()}
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-sm text-white/60 backdrop-blur transition hover:border-[#e5a84b]/50 hover:text-[#e5a84b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e5a84b]"
      >
        <span className="transition-transform group-hover:-translate-x-0.5">
          ←
        </span>
        Back to collection
      </button>
      <div className="grid min-w-0 grid-cols-1 gap-8 sm:gap-10 md:grid-cols-[300px_minmax(0,1fr)] md:gap-14">
        <TiltPoster src={media.poster} alt={media.title} />

        <div className="flex flex-col justify-center">
          {/* Category + status */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              {media.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${
                isFinished
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-[#e5a84b]/10 text-[#e5a84b]"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isFinished ? "bg-emerald-400" : "bg-[#e5a84b]"
                }`}
              />
              {isFinished ? "Finished" : "On your watchlist"}
            </span>
          </div>

          <h1 className="break-words font-serif text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {media.title}
          </h1>

          <p className="mt-5 max-w-[62ch] text-sm leading-7 text-white/60 sm:mt-6 sm:text-base sm:leading-8">
            {media.description || "No description available."}
          </p>

          <div className="mt-6 sm:mt-8">
            <RatingRing rating={media.imdbRating} />
          </div>

          {/* Facts */}
          <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/10 pt-6 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-10">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-white/40">{fact.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Genres */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
            {media.genres?.length > 0 ? (
              media.genres.map((genre, index) => (
                <span
                  key={`${genre}-${index}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/75 transition hover:border-[#e5a84b]/50 hover:text-[#e5a84b] hover:cursor-pointer"
                >
                  {genre}
                </span>
              ))
            ) : (
              <span className="text-sm text-white/40">No genres added</span>
            )}
          </div>

          <div className="mt-9">
            <Link
              href={`/edit/${media._id}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#e5a84b] px-7 py-3 text-sm font-semibold text-black shadow-[0_10px_20px_-10px_rgba(229,168,75,0.3)] transition hover:bg-[#f0bd68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5a84b]"
            >
              Edit media
            </Link>
          </div>
        </div>
      </div>
      {/* Timeline */}
      <section className="rounded-[28px] rounded-tr-[6px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
        <h2 className="font-serif text-xl text-white">
          Your history with this title
        </h2>

        <ol className="relative mt-7 space-y-8 border-l border-white/10 pl-7">
          <li className="relative">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#e5a84b] bg-[#141414]" />
            <p className="text-xs text-white/40">Added to your collection</p>
            <p className="mt-1.5 text-sm text-white/85">
              {formatDate(media.createdAt)}
            </p>
          </li>

          <li className="relative">
            <span
              className={`absolute -left-[33px] top-1 h-3 w-3 rounded-full ${
                isFinished ? "bg-emerald-400" : "bg-[#e5a84b]"
              }`}
            />
            <p className="text-xs text-white/40">
              {isFinished ? "Marked as finished" : "Moved to watchlist"}
            </p>
            <p className="mt-1.5 text-sm text-white/85">
              {formatDate(media.statusChangedAt || media.createdAt)}
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
