const ArchiveHeader = ({ items }) => {
  const total = items.length;

  const movies = items.filter((item) => item.category === "Movie").length;

  const series = items.filter((item) => item.category === "Series").length;
  const anime = items.filter((item) => item.category === "Anime").length;

  const animation = items.filter(
    (item) => item.category === "Animation",
  ).length;
  const shortFilm = items.filter(
    (item) => item.category === "Short Film",
  ).length;
  const documentary = items.filter(
    (item) => item.category === "Documentary",
  ).length;

  return (
    <section className="mb-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.3em] text-[#e5a84b]">
            YOUR PERSONAL CINEMA
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The Archive<span className="text-[#e5a84b]">.</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
            Every story you've collected, from every era of cinema. Your entire
            collection, in one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <div>
            <p className="text-2xl font-semibold text-white">{total}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Total Titles
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">{movies}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Movies
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">{series}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Series
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">{anime}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Anime
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">{animation}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Animation
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">{shortFilm}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Short Film
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">{documentary}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
              Documentary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveHeader;
