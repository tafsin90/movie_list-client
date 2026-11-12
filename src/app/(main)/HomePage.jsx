"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";

export default function HomePage() {
  const { data: session, isPending } = authClient.useSession();

  const [stats, setStats] = useState({
    watchlist: 0,
    finished: 0,
    favourites: 0,
  });

  useEffect(() => {
    if (isPending) return;

    if (!session?.user?.id) {
      setStats({
        watchlist: 0,
        finished: 0,
        favourites: 0,
      });
      return;
    }
    async function fetchStats() {
      try {
        // console.log("User ID:", session.user.id);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/stats/${session.user.id}`,
        );

        if (!response.ok) {
          // console.log("Status:", response.status);
          // console.log("Backend error:", errorData);

          return;
        }

        const data = await response.json();

        // console.log("API Status:", response.status);
        // console.log("API Data:", data);

        setStats(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStats();
  }, [session?.user?.id, isPending]);
  const statistics = [
    {
      number: String(stats.watchlist).padStart(4, "0"),
      label: "On my watchlist",
    },
    {
      number: String(stats.finished).padStart(4, "0"),
      label: "Already watched",
    },
  ];

  return (
    <main className="min-h-screen bg-[#141414] px-4 pb-10 pt-7 text-[#F0E8DA] sm:px-6 sm:pt-8 md:px-10 md:pt-10">
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION */}
        <section>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#E9B96E] sm:text-xs">
            Lights. Camera. Action.
          </p>

          <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Life's too short for
            <br className="hidden sm:block" />
            bad movie nights.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#AAA196] sm:text-base ">
            Keep the films you watched, save the ones you want to watch, and
            never forget the stories that stayed with you.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
            <Link
              href="/all"
              className="group flex items-center gap-3 rounded-lg bg-[#D9A451] px-5 py-3.5 text-xs font-semibold text-[#171411] transition duration-200 hover:bg-[#EABD77] sm:px-6 sm:text-sm"
            >
              Explore your collection
              <span className="transition-transform group-hover:translate-x-1">
                <BiSolidRightTopArrowCircle className="size-4" />
              </span>
            </Link>

            <Link
              href="/add"
              className="rounded-lg border border-[#5A5144] px-5 py-3.5 text-xs font-medium text-[#EDE3D5] transition hover:border-[#D9A451] hover:text-[#D9A451] sm:px-6 sm:text-sm"
            >
              <span className="flex items-center gap-1">
                <CiCirclePlus className="size-4" />
                <p> Add something new</p>
              </span>
            </Link>
          </div>
        </section>

        {/* CINEMATIC IMAGE + COLLECTION STATISTICS */}
        <section className="mt-8 sm:mt-10 md:mt-12">
          <div className="overflow-hidden rounded-2xl bg-[#0D0D0D]">
            {/* MOBILE IMAGE */}
            <div className="relative aspect-[4/3] w-full sm:hidden">
              <Image
                src="/image/0aeae0bc39b7ed844344445a1d647a31.jpg"
                alt="Cinematic portrait"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />

              <h2 className="absolute left-5 top-7 font-serif text-3xl italic text-white drop-shadow-lg">
                Welcome to FRAME.
              </h2>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden sm:flex lg:min-h-[calc(100svh-250px)]">
              <Image
                src="/image/0aeae0bc39b7ed844344445a1d647a31.jpg"
                alt="Cinematic portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />

              <h2 className="relative z-10 mr-auto max-w-[75%] p-8 text-left font-serif text-5xl italic text-[#D9A451] drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] lg:p-10 lg:text-6xl">
                Welcome to FRAME.
              </h2>

              {/* DESKTOP STATISTICS */}
              <div className="relative z-10 p-8 lg:p-10">
                <div className="mb-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#292016] drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]  ">
                    The collection
                  </p>

                  <h3 className="font-serif text-3xl  text-[#F0E8DA] drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
                    A little bit of everything.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {statistics.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/20 bg-black/45 p-5 backdrop-blur-sx hover:backdrop-blur-sm transition-all duration-300 ease-in-out"
                    >
                      <h3 className="font-serif text-4xl text-[#F0E8DA] lg:text-6xl">
                        {stat.number}
                      </h3>

                      <p className="mt-2 text-sm text-[#D0C6B8]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MOBILE STATISTICS */}
            <div className="p-4 sm:hidden">
              <div className="mb-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E9B96E]">
                  The collection
                </p>

                <h3 className="font-serif text-2xl text-white">
                  A little bit of everything.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {statistics.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 rounded-xl border border-white/20 bg-[#171717] p-3"
                  >
                    <h3 className="font-serif text-2xl text-[#F0E8DA]">
                      {stat.number}
                    </h3>

                    <p className="mt-2 break-words text-[9px] leading-4 text-[#D0C6B8]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
