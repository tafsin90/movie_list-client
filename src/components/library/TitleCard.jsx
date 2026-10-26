import { FiBookmark, FiCheck, FiClock, FiFilm, FiHeart, FiSliders, FiStar, FiX } from "react-icons/fi";
import { getPosterUrl } from "@/lib/movie-utils";
import IconButton from "./IconButton";

export default function TitleCard({ item, index, onEdit, onRemove, onToggleWatched }) {
  const isWatchlist = item.state === "watchlist";

  return (
    <article className="movie-card" style={{ "--card-delay": `${index * 55}ms` }}>
      <div
        className="poster"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,17,16,.05) 22%, rgba(18,17,16,.82) 100%), url('${getPosterUrl(item.image)}')`,
          "--poster-tint": item.tint,
        }}
      >
        <span className="poster-label">{item.label}</span>
        <span className={`poster-rating ${isWatchlist ? "unrated" : ""}`}>
          {isWatchlist ? <><FiHeart /> SAVED</> : <><FiStar /> {item.rating.toFixed(1)}</>}
        </span>

        <div className="poster-bottom">
          <div className="poster-meta">{item.kind.toUpperCase()} <span>·</span> {item.year}</div>
          <h3>{item.title}</h3>
          <div className="poster-tags">
            {item.genres.map((genre) => <span key={genre}>{genre}</span>)}
          </div>
        </div>

        <div className="card-actions">
          <IconButton label={isWatchlist ? "Move to watched" : "Move to watchlist"} onClick={() => onToggleWatched(item)}>
            {isWatchlist ? <FiCheck /> : <FiBookmark />}
          </IconButton>
          <IconButton label="Edit title" onClick={() => onEdit(item)}><FiSliders /></IconButton>
          <IconButton label="Remove title" onClick={() => onRemove(item)}><FiX /></IconButton>
        </div>
      </div>

      <div className="card-footer">
        <span><FiClock size={13} /> {item.length}</span>
        <span>{item.progress}</span>
      </div>
    </article>
  );
}

export function EmptyCollection({ onAddTitle }) {
  return (
    <div className="empty-state">
      <div className="empty-icon"><FiFilm /></div>
      <h3>Nothing on this reel yet</h3>
      <p>Try a different search or genre, or add a title you love.</p>
      <button className="add-title-button" onClick={onAddTitle}><span>＋</span> Add a title</button>
    </div>
  );
}
