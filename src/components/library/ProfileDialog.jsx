import { FiCheck, FiCommand, FiHeart, FiX } from "react-icons/fi";

export default function ProfileDialog({ onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-card group-modal">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close"><FiX /></button>
        <div className="modal-kicker"><FiCommand /> YOUR SPACE</div>
        <h2>Welcome to FRAME.</h2>
        <p className="modal-copy">This is your personal film journal. Your collection is saved in this demo session only.</p>
        <div className="demo-notice"><FiHeart /> Sign-in and syncing can be added when you’re ready.</div>
        <div className="modal-actions">
          <button className="add-title-button" onClick={onClose}>Sounds good <FiCheck /></button>
        </div>
      </div>
    </div>
  );
}
