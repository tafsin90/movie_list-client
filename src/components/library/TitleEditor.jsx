import { FiFilm, FiPlus, FiX } from "react-icons/fi";
import { defaultGroups, genres } from "@/data/demoTitles";
import { getPosterUrl } from "@/lib/movie-utils";

export default function TitleEditor({ title, groups, selectedGroup, onClose, onSave }) {
  const collectionOptions = [...new Set([...defaultGroups, ...groups])];

  function handleSubmit(event) {
    event.preventDefault();
    onSave(new FormData(event.currentTarget));
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="modal-card" onSubmit={handleSubmit}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close"><FiX /></button>
        <div className="modal-kicker"><FiFilm /> YOUR PERSONAL COLLECTION</div>
        <h2>{title ? "Edit this title" : "Add to your collection"}</h2>
        <p className="modal-copy">Keep a little note of the stories you love.</p>

        <label className="field-label">TITLE
          <input required name="title" placeholder="What are we watching?" defaultValue={title?.title || ""} />
        </label>
        <div className="field-pair">
          <label className="field-label">YEAR
            <input name="year" type="number" placeholder="2024" defaultValue={title?.year || ""} />
          </label>
          <label className="field-label">FORMAT
            <select name="kind" defaultValue={title?.kind || "Movie"}>
              <option>Movie</option><option>Series</option><option>Anime</option><option>Documentary</option>
            </select>
          </label>
        </div>

        <div className="field-pair">
          <label className="field-label">COLLECTION
            <select name="group" defaultValue={title?.group || (selectedGroup === "All titles" ? "Movies" : selectedGroup)}>
              {collectionOptions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="field-label">YOUR RATING
            <input name="rating" type="number" min="0" max="5" step="0.1" placeholder="4.5" defaultValue={title?.rating || ""} />
          </label>
        </div>

        <label className="field-label">POSTER IMAGE URL
          <input name="image" placeholder="Paste an image link (optional)" defaultValue={title ? getPosterUrl(title.image) : ""} />
        </label>

        <fieldset className="genre-field">
          <legend className="field-label">GENRES <span>CHOOSE ALL THAT FIT</span></legend>
          <div className="genre-options">
            {genres.slice(1).map((item) => (
              <label key={item}>
                <input type="checkbox" name="genres" value={item} defaultChecked={title?.genres.includes(item)} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="modal-actions">
          <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
          <button className="add-title-button" type="submit"><FiPlus /> {title ? "Save changes" : "Add title"}</button>
        </div>
      </form>
    </div>
  );
}
