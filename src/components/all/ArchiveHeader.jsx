const ArchiveHeader = ({ items }) => {
  const total = items.length;

  const movies = items.filter((item) => item.category === "Movie").length;

  const series = items.filter((item) => item.category === "Series").length;
  const anime = items.filter((item) => item.category === "Anime").length;

  const animation = items.filter(
    (item) => item.category === "Animation",
  ).length;
  const shortFilm = items.filter((item) => item.category === "Short Film").length;
  const documentary = items.filter((item) => item.category === "Documentary").length;

  return (
    <section className="mb-10">
  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div className="min-w-0">
      <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-[#e5a84b] sm:text-[11px] sm:tracking-[0.3em]">
        YOUR PERSONAL CINEMA
      </p>

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        The Archive<span className="text-[#e5a84b]">.</span>
      </h1>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
        Every story you've collected, from every era of cinema. Your entire
        collection, in one place.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-5 sm:grid-cols-4 md:flex md:flex-wrap md:gap-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
      {/* Keep all seven statistic blocks here */}
    </div>
  </div>
</section>
  );
};

export default ArchiveHeader;
