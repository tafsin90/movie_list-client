import { FiBookmark, FiCheck, FiStar } from "react-icons/fi";

export default function StatsOverview({ watchCount, watchedCount, averageRating }) {
  return (
    <section className="stats-row">
      <div className="stat-card">
        <span className="stat-icon amber"><FiBookmark /></span>
        <span className="stat-value">{String(watchCount).padStart(2, "0")}</span>
        <span className="stat-label">ON YOUR WATCHLIST</span>
        <span className="stat-meta">Your next movie night</span>
      </div>
      <div className="stat-card">
        <span className="stat-icon sage"><FiCheck /></span>
        <span className="stat-value">{String(watchedCount).padStart(2, "0")}</span>
        <span className="stat-label">TITLES WATCHED</span>
        <span className="stat-meta">And counting <span className="tiny-spark">✳</span></span>
      </div>
      <div className="stat-card">
        <span className="stat-icon rose"><FiStar /></span>
        <span className="stat-value">{averageRating.toFixed(1)}<small>/5</small></span>
        <span className="stat-label">YOUR AVERAGE RATING</span>
        <span className="stat-meta">You have great taste.</span>
      </div>
      <div className="stat-card stat-quote">
        <span className="quote-mark">“</span>
        <span className="quote-text">Movies touch our hearts and awaken our vision.</span>
        <span className="quote-by">— MARTIN SCORSESE</span>
        <span className="quote-orbit">✳</span>
      </div>
    </section>
  );
}
