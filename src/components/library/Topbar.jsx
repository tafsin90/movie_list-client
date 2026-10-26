import { FiGrid, FiSearch, FiSettings } from "react-icons/fi";
import IconButton from "./IconButton";

export default function Topbar({ section, query, onQueryChange, onMenuOpen, onSettingsOpen }) {
  return (
    <header className="topbar">
      <button className="mobile-menu" onClick={onMenuOpen} aria-label="Open menu"><FiGrid /></button>
      <div className="breadcrumb">LIBRARY <span>/</span> <b>{section === "watchlist" ? "WATCHLIST" : "WATCHED"}</b></div>
      <div className="top-actions">
        <label className="searchbox">
          <FiSearch size={16} />
          <input placeholder="Find a title..." value={query} onChange={(event) => onQueryChange(event.target.value)} />
          <kbd>⌘ K</kbd>
        </label>
        <span className="top-divider" />
        <IconButton label="Settings" onClick={onSettingsOpen}><FiSettings /></IconButton>
        <div className="tiny-avatar">T</div>
      </div>
    </header>
  );
}
