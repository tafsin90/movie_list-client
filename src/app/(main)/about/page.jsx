"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const features = [
  {
    number: "01",
    title: "The Watchlist",
    description:
      "For all those movies and series you swear you'll watch someday. Someday deserves an organised list.",
    stamp: "THE PLAN",
  },
  {
    number: "02",
    title: "The Watched Archive",
    description:
      "A little home for everything you've finished. Because remembering what you've watched shouldn't be a plot twist.",
    stamp: "THE RECEIPTS",
  },
  {
    number: "03",
    title: "Movies, Series & Anime",
    description:
      "Different kinds of stories, one place to keep them. No need to choose a favourite child.",
    stamp: "ALL STORIES",
  },
  {
    number: "04",
    title: "IMDb Ratings",
    description:
      "A little extra context before you commit two hours or an entire weekend to something.",
    stamp: "THE NUMBERS",
  },
  {
    number: "05",
    title: "Collection Timeline",
    description:
      "Look back at your collection and see how your watchlist and viewing history have grown.",
    stamp: "THE MEMORIES",
  },
  {
    number: "06",
    title: "Edit & Manage",
    description:
      "Change details, update your status, and keep your personal archive looking the way you want.",
    stamp: "YOUR RULES",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/taaaaafssiiiiin/?hl=en",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/tafsin90",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-tafsin-5048a6377/",
    icon: FaLinkedinIn,
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#141414] text-[#f3ead9]">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:5px_5px]" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#e5a84b]/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* HERO */}
        <section className="relative flex min-h-[620px] flex-col justify-center py-24 sm:min-h-[700px] sm:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-5xl"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#e5a84b]/40 px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-[#e5a84b]">
                A LITTLE ABOUT FRAME
              </span>

              <span className="font-mono tracking-[0.1em] text-xs text-white/70">
                EST. OUT OF PURE ANNOYANCE
              </span>
            </div>

            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-[#e5a84b]/80 sm:text-sm">
              WELCOME TO THE ARCHIVE
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-[#f3ead9] sm:text-6xl md:text-7xl lg:text-[88px]">
              NOT ALL WHO WANDER ARE LOST.
              <span className="mt-2 block italic text-[#e5a84b]">
                SOME JUST FORGOT WHAT THEY WANTED TO WATCH.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Welcome to FRAME. A home for everything I watch (and everything I
              pretend I'll watch).
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#e5a84b] px-6 py-3.5 text-sm font-semibold text-[#17130d] transition hover:bg-[#f2bd68]"
              >
                Explore FRAME
                <span className="transition-transform group-hover:translate-x-1">
                  <FaArrowRightLong />
                </span>
              </Link>

              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                PLEASE ENJOY MY LITTLE EFFORT
              </span>
            </div>
          </motion.div>

          {/* Decorative film stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 8, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="pointer-events-none absolute bottom-16 right-4 hidden rotate-6 border-2 border-[#e5a84b]/35 p-4 text-center sm:block lg:right-12"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e5a84b]/60">
              FRAME
            </p>
            <p className="mt-1 font-serif text-3xl italic text-[#e5a84b]/70">
              No. 001
            </p>
            <p className="mt-1 text-[9px] tracking-[0.25em] text-[#e5a84b]/40">
              THE STORY BEGINS
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#e5a84b]/30 to-transparent" />
        </section>

        {/* ORIGIN STORY */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-32"
        >
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-[#e5a84b]">
              CHAPTER 01 — THE ORIGIN
            </p>

            <h2 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              It started with a list.
              <span className="block italic text-[#e5a84b]">Obviously.</span>
            </h2>

            <div className="mt-8 h-1 w-20 bg-[#e5a84b]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60 sm:text-lg">
            <p>
              I love stories. Books, movies, series, anything that can take me
              somewhere else for a while. I also have a habit of finding things
              I want to watch, adding them to a list, and then completely
              forgetting that the list exists.
            </p>

            <p>
              My movie list was supposed to solve that problem. Instead, it
              became another problem. Random notes, scattered lists, and that
              familiar question:
              <span className="text-[#f3ead9]">
                “Wait, what was that movie I wanted to watch?”
              </span>
            </p>

            <p>
              So, out of pure <span className="text-[#e5a84b]">annoyance</span>,
              I decided to build something of my own. Somewhere I could keep my
              watchlist, remember what I'd finished, and organise all the
              stories I wanted to experience.
            </p>

            <p className="font-serif text-2xl italic leading-relaxed text-[#e5a84b] sm:text-3xl">
              And that's how FRAME happened. Not a grand business plan. Just one
              person trying to get their watchlist together.
            </p>
          </div>
        </motion.section>

        {/* QUOTE STRIP */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden border-y border-[#e5a84b]/20 bg-[#1b1916] px-6 py-12 sm:px-12 sm:py-16"
        >
          <span className="absolute -right-2 -top-12 font-serif text-[180px] leading-none text-[#e5a84b]/[0.045]">
            “
          </span>

          <p className="relative max-w-4xl font-serif text-2xl leading-relaxed text-[#f3ead9] sm:text-3xl md:text-4xl">
            Some stories leave you asking{" "}
            <span className="italic text-[#e5a84b]">“Why so serious?”</span>.
            Others make you promise{" "}
            <span className="italic text-[#e5a84b]">“I'll be back.”</span> And
            sometimes, all you need is a little{" "}
            <span className="italic text-[#e5a84b]">
              “May the Force be with you.”
            </span>
          </p>

          <p className="relative mt-7 font-mono text-[10px] tracking-[0.2em] text-white/35">
            THE DARK KNIGHT · THE TERMINATOR · STAR WARS
          </p>
        </motion.section>

        {/* FEATURES */}
        <section className="py-24 sm:py-32">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-5 font-mono text-xs tracking-[0.3em] text-[#e5a84b]">
                CHAPTER 02 — THE COLLECTION
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl">
                What's inside
                <span className="italic text-[#e5a84b]"> the frame?</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              A few useful things to keep your entertainment life from becoming
              a beautiful mess.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden border border-white/10 bg-[#1b1b1b] p-6 transition-colors duration-300 hover:border-[#e5a84b]/40 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#e5a84b]/70">
                    {feature.number}
                  </span>

                  <span className="border border-white/50 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-white/50">
                    {feature.stamp}
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="font-serif text-2xl text-[#f3ead9] transition-colors group-hover:text-[#e5a84b]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-8 -right-3 font-serif text-8xl italic text-white/[0.025] transition-colors group-hover:text-[#e5a84b]/[0.06]">
                  {feature.number}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CREATOR */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 border-y border-white/10 py-24 md:grid-cols-[1fr_1.1fr] md:gap-20 md:py-32"
        >
          <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border border-[#e5a84b]/20 bg-[#1c1a17] p-8">
            <div className="absolute inset-4 border border-dashed border-[#e5a84b]/20" />

            <div className="relative text-center">
              <p className="font-mono text-[10px] tracking-[0.35em] text-[#e5a84b]/60">
                THE PERSON BEHIND THE PROJECT
              </p>

              <h2 className="mt-5 font-serif text-6xl italic text-[#e5a84b] sm:text-7xl">
                Tafsin
              </h2>

              <div className="mx-auto my-6 h-px w-20 bg-[#e5a84b]/50" />

              <p className="font-mono text-xs tracking-[0.25em] text-white/40">
                ONE DEVELOPER.
                <br />
                TOO MANY STORIES.
              </p>
            </div>

            <span className="absolute bottom-7 right-7 rotate-[-12deg] border border-[#e5a84b]/30 px-3 py-2 font-mono text-[9px] tracking-[0.2em] text-[#e5a84b]/60">
              ORIGINAL CREATION
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-[#e5a84b]">
              CHAPTER 03 — THE CREATOR
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              A quiet person with
              <span className="block italic text-[#e5a84b]">
                a head full of stories.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/55">
              <p>
                Hey, I'm Tafsin. I enjoy my own company, though the occasional
                adventure with one or two good friends is always welcome.
              </p>

              <p>
                One of my biggest dreams is to travel. I want to see new places,
                experience different cultures, and collect stories along the
                way. Until then, books, movies, and series let me explore a few
                worlds without even leaving my room.
              </p>

              <p>
                I'm also a developer, which explains why a simple problem like
                losing track of my watchlist somehow turned into an entire
                project.
              </p>

              <p className="font-serif text-xl italic text-[#e5a84b]">
                Built by me, for me. Shared with anyone who has ever said, "I'll
                watch that later."
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 text-sm text-white/55 transition hover:border-[#e5a84b]/50 hover:text-[#e5a84b]"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* FINAL MESSAGE */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative py-28 text-center sm:py-36"
        >
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-[#e5a84b]">
            THE END? NOT EVEN CLOSE.
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
            Life's too short for bad movies.
            <span className="mt-3 block italic text-[#e5a84b]">
              There are stories waiting to be discovered. This is just a place to keep track of them.
            </span>
            <span className="text-2xl md:text-3xl ">Now, enough talking. You've probably got something to watch.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            So go on. Add that movie you've been meaning to watch. Update that
            series you finally finished. Make this little corner of the internet
            yours.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#e5a84b]/50 px-7 py-4 text-sm font-semibold text-[#e5a84b] transition hover:bg-[#e5a84b] hover:text-[#17130d]"
          >
            Back to FRAME
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <p className="mt-16 font-mono text-[9px] tracking-[0.35em] text-white/30">
            MADE WITH CURIOSITY, CODE & A SLIGHTLY UNHEALTHY WATCHLIST
          </p>
        </motion.section>
      </div>
    </main>
  );
}
