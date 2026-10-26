import { FiCheck, FiFilm, FiMoreHorizontal, FiPlus } from "react-icons/fi";
import { defaultGroups } from "@/data/demoTitles";
import IconButton from "./IconButton";

const primaryGroups = ["All titles", ...defaultGroups];

export default function Sidebar({
  section,
  group,
  groups,
  watchCount,
  watchedCount,
  titleCount,
  mobileOpen,
  onSectionChange,
  onGroupChange,
  onCreateGroup,
  onProfileOpen,
}) {
  return (
    <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
      <div className="brand">
        <div className="brand-mark"><FiFilm size={19} /></div>
        <span>FRAME<span className="brand-period">.</span></span>
        <span className="brand-edition">YOUR FILM JOURNAL</span>
      </div>

      <div className="sidebar-scroll">
        <p className="nav-caption">YOUR LIBRARY</p>
        <button className={`nav-item ${section === "watchlist" ? "active" : ""}`} onClick={() => onSectionChange("watchlist")}>
          <FiFilm /><span>Watchlist</span><span className="nav-count">{watchCount}</span>
        </button>
        <button className={`nav-item ${section === "watched" ? "active" : ""}`} onClick={() => onSectionChange("watched")}>
          <FiCheck /><span>Watched</span><span className="nav-count">{watchedCount}</span>
        </button>

        <div className="nav-divider" />
        <div className="group-heading">
          <p className="nav-caption">YOUR GROUPS</p>
          <IconButton label="Create a group" onClick={onCreateGroup}><FiPlus /></IconButton>
        </div>

        {primaryGroups.map((item, index) => (
          <GroupButton key={item} name={item} index={index} active={group === item} count={item === "All titles" ? titleCount : undefined} onClick={() => onGroupChange(item)} />
        ))}
        {groups.filter((item) => !primaryGroups.includes(item)).map((item) => (
          <GroupButton key={item} name={item} active={group === item} onClick={() => onGroupChange(item)} />
        ))}

        <button className="add-group" onClick={onCreateGroup}><FiPlus size={14} /> New group</button>

        <div className="sidebar-note">
          <div className="note-star">✳</div>
          <p className="note-title">A little more you.</p>
          <p className="note-copy">Your collection, your taste, your next great watch.</p>
          <span className="note-spark">✳</span>
        </div>
      </div>

      <button className="profile-row" onClick={onProfileOpen}>
        <div className="avatar">T</div>
        <span className="profile-name">Your space<span>Personal library</span></span>
        <FiMoreHorizontal className="profile-more" />
      </button>
    </aside>
  );
}

function GroupButton({ name, index, active, count, onClick }) {
  return (
    <button className={`nav-item group-item ${active ? "group-active" : ""}`} onClick={onClick}>
      <span className={`group-dot dot-${index ?? "extra"}`} />
      <span>{name}</span>
      {count !== undefined && <span className="nav-count">{count}</span>}
    </button>
  );
}
