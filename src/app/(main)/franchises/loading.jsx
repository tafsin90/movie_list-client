
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#141414] px-4 text-white">
      <div className="flex flex-col items-center text-center">

        {/* Loading Spinner */}
        <div className="relative mb-6 h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#e5a84b]" />
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold">
          Loading Franchises
        </h2>

        <p className="mt-2 max-w-sm text-sm text-white/50">
          Preparing your movie universes and collections.
          Please wait a moment...
        </p>

        {/* Animated Dots */}
        <div className="mt-5 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#e5a84b]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#e5a84b] [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#e5a84b] [animation-delay:300ms]" />
        </div>

      </div>
    </main>
  );
}
