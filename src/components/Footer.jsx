import Link from "next/link";
import {
  House,
  Bookmark,
  CircleCheckFill,
  ArrowUpRight,
} from "@gravity-ui/icons";
import { FaClapperboard } from "react-icons/fa6";
import { IoMdFilm } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e5a84b]/20 bg-[#11100e] text-[#e8dfcd]">
      {/* Film strip decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-[#8c5b2b] via-[#e5a84b] to-[#8c5b2b]" />

      <div className="mx-auto max-w-340 px-6 pb-8 pt-14 sm:px-10">
        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-black tracking-[-2px] text-white">
                FR<span className="text-[#e5a84b]">A</span>ME
                <span className="ml-1 text-[#e5a84b]">.</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Every frame tells a story. Every story leaves a mark. Keep track
              of the movies you love and the stories you never want to forget.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-[#e5a84b]/30 px-4 py-2">
              <IoMdFilm className="h-4 w-4 text-[#e5a84b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e5a84b]">
                Your Personal Cinema Archive
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-serif text-lg italic text-[#e5a84b]">
              The Collection
            </h3>

            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 transition-colors hover:text-[#e5a84b]"
                >
                  <House className="h-4 w-4" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/watchlist"
                  className="flex items-center gap-3 transition-colors hover:text-[#e5a84b]"
                >
                  <Bookmark className="h-4 w-4" />
                  Watchlist
                </Link>
              </li>

              <li>
                <Link
                  href="/finished"
                  className="flex items-center gap-3 transition-colors hover:text-[#e5a84b]"
                >
                  <CircleCheckFill className="h-4 w-4" />
                  Finished
                </Link>
              </li>

              <li>
                <Link
                  href="/all"
                  className="flex items-center gap-3 transition-colors hover:text-[#e5a84b]"
                >
                  <FaClapperboard className="h-4 w-4" />
                  All Media
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 font-serif text-lg italic text-[#e5a84b]">
              Behind the Frames
            </h3>

            <p className="text-sm leading-7 text-white/45">
              A personal space for film lovers. Organize your watchlist, revisit
              your favorites, and build an archive of every story worth
              remembering.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#e5a84b] transition-colors hover:text-white"
            >
              Our Story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Vintage Ticket Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 border-t border-dashed border-white/15" />

          <div className="flex items-center gap-2 rounded-sm border border-[#e5a84b]/30 px-4 py-2">
            <IoMdFilm className="h-4 w-4 text-[#e5a84b]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e5a84b]">
              End of Reel
            </span>
          </div>

          <div className="h-px flex-1 border-t border-dashed border-white/15" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} FRAME. All frames reserved.
          </p>

          <p className="font-serif text-sm italic text-white/45">
            "Cinema is a matter of what's in the frame."
          </p>

          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-[#e5a84b] transition-colors hover:text-white"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>

      {/* Background watermark */}
      <div className="pointer-events-none absolute -bottom-12 right-8 select-none font-black tracking-[-12px] text-white/[0.015]">
        FRAME
      </div>
    </footer>
  );
}
