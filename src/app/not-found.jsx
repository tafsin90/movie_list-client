
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#141414] px-5 py-16 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,168,75,0.08),transparent_65%)]" />

      {/* Film grain / grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:45px_45px]" />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* Small label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e5a84b]/20 bg-[#e5a84b]/5 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5a84b]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#e5a84b] sm:text-xs">
            Out of projection
          </span>
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="select-none font-serif text-[clamp(7rem,25vw,15rem)] leading-[0.8] font-bold tracking-[-0.08em] text-[#e5a84b]">
            404
          </h1>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full rotate-[-12deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        {/* Main message */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            Well, this is awkward.
          </h2>

          <p className="mx-auto max-w-md text-sm leading-7 text-white/45 sm:text-base">
            Looks like this page didn't make the final cut. It might have been
            removed, renamed, or never existed in the first place.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mx-auto my-9 flex max-w-xs items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-serif text-sm italic text-[#e5a84b]/70">
            The End?
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Button */}
        <Link
          href="/"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#e5a84b] px-7 py-3 text-sm font-semibold text-[#141414] transition duration-300 hover:-translate-y-1 hover:bg-[#f0bd68] hover:shadow-[0_10px_35px_rgba(229,168,75,0.15)]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to FRAME
        </Link>

        {/* Footer */}
        <p className="mt-12 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20">
          FRAME <span className="mx-2 text-[#e5a84b]/60">·</span> Every story
          finds its way
        </p>
      </div>
    </main>
  );
}
