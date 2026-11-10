"use client";

const ArchiveTimeline = ({
  decades,
  activeDecade,
  onSelect,
}) => {
  if (decades.length === 0) return null;

  return (
    <section className="sticky top-[76px] z-20 mb-10 border-y border-white/10 bg-[#141414]/95 py-4 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/35">
          EXPLORE BY DECADE
        </p>

        <p className="text-[10px] text-white/30">
          {decades.length} eras
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {decades.map((decade) => {
          const isActive = activeDecade === decade.value;

          return (
            <button
              key={decade.value}
              onClick={() => onSelect(decade.value)}
              className={`group flex shrink-0 flex-col gap-1 border-b-2 pb-2 pr-5 text-left transition-colors ${
                isActive
                  ? "border-[#e5a84b] text-[#e5a84b]"
                  : "border-transparent text-white/40 hover:text-white/80"
              }`}
            >
              <span className="text-sm font-semibold">
                {decade.value}s
              </span>

              <span className="text-[10px] text-white/30">
                {decade.count} titles
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ArchiveTimeline;