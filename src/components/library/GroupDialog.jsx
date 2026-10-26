import { FiGrid, FiPlus, FiX } from "react-icons/fi";

export default function GroupDialog({ onClose, onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();
    onCreate(String(new FormData(event.currentTarget).get("groupName")).trim());
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="modal-card group-modal" onSubmit={handleSubmit}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close"><FiX /></button>
        <div className="modal-kicker"><FiGrid /> MAKE IT YOURS</div>
        <h2>A new little corner.</h2>
        <p className="modal-copy">Give your collection a name. Anime, date night, comfort rewatches — anything goes.</p>
        <label className="field-label">GROUP NAME
          <input required name="groupName" autoFocus placeholder="e.g. Documentaries" />
        </label>
        <div className="modal-actions">
          <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
          <button className="add-title-button" type="submit"><FiPlus /> Create group</button>
        </div>
      </form>
    </div>
  );
}
