import { FiPlus } from "react-icons/fi";

export default function WelcomeHeader({ onAddTitle }) {
  return (
    <section className="welcome-row">
      <div>
        <div className="eyebrow">
          <span className="eyebrow-line" /> MONDAY, OCTOBER 26 <span className="eyebrow-dot">·</span> A GOOD DAY FOR A MOVIE
        </div>
        <h1>Your next great<br className="mobile-break" /> <em>watch</em> is waiting.</h1>
        <p className="welcome-copy">A little corner of the internet for everything you love to watch.</p>
      </div>
      <button className="add-title-button" onClick={onAddTitle}>
        <FiPlus /> Add a title <span className="button-shortcut">⌘ I</span>
      </button>
    </section>
  );
}
