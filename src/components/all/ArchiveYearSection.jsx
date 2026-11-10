import ArchivePoster from "./ArchivePoster";

const ArchiveYearSection = ({ year, items }) => {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {year}
        </h2>

        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs text-white/35">
          {items.length} titles
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-12">
        {items.map((item) => (
          <ArchivePoster
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default ArchiveYearSection;