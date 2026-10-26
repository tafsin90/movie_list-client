import { FiChevronDown, FiChevronRight, FiFilter, FiGrid, FiSliders } from "react-icons/fi";
import { genres } from "@/data/demoTitles";
import TitleCard, { EmptyCollection } from "./TitleCard";

export default function CollectionSection({
  section,
  titles,
  group,
  genre,
  onGenreChange,
  onGroupReset,
  onAddTitle,
  onEditTitle,
  onRemoveTitle,
  onToggleWatched,
}) {
  return (
    <section className="collection-section">
      <div className="section-top">
        <div>
          <div className="eyebrow section-eyebrow"><span className="eyebrow-line" /> YOUR COLLECTION</div>
          <h2>
            {section === "watchlist" ? "On your list" : "The ones you’ve seen"}
            <span className="title-count">{String(titles.length).padStart(2, "0")}</span>
          </h2>
        </div>
        <div className="collection-tools">
          <button className="sort-button" onClick={() => onGenreChange(genre === "All titles" ? "Drama" : "All titles")}>
            <FiSliders /><span>{genre === "All titles" ? "Filter" : genre}</span><FiChevronDown size={13} />
          </button>
          <button className="view-toggle selected" aria-label="Grid view"><FiGrid /></button>
          <button className="view-toggle" aria-label="Sort"><FiFilter /></button>
        </div>
      </div>

      <div className="genre-row">
        <span className="genre-label">GENRE</span>
        {genres.map((item) => (
          <button
            key={item}
            className={`genre-chip ${genre === item ? "genre-selected" : ""}`}
            onClick={() => onGenreChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="result-note">
        <span>SHOWING <b>{String(titles.length).padStart(2, "0")}</b> TITLES</span>
        <span><FiGrid size={13} /> <button onClick={onGroupReset}>{group === "All titles" ? "All groups" : group}</button></span>
      </div>

      {titles.length ? (
        <div className="movie-grid">
          {titles.map((item, index) => (
            <TitleCard
              key={item.id}
              item={item}
              index={index}
              onEdit={onEditTitle}
              onRemove={onRemoveTitle}
              onToggleWatched={onToggleWatched}
            />
          ))}
        </div>
      ) : <EmptyCollection onAddTitle={onAddTitle} />}

      <div className="collection-footer">
        <span>THAT’S A WRAP FOR NOW <span className="footer-star">✳</span></span>
        <button onClick={onGroupReset}>VIEW ALL COLLECTIONS <FiChevronRight /></button>
      </div>
    </section>
  );
}
