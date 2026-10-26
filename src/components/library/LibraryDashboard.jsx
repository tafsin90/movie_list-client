"use client";

import { useMemo, useState } from "react";
import { demoTitles } from "@/data/demoTitles";
import { filterTitles, getGroups, saveTitleFromForm } from "@/lib/movie-utils";
import CollectionSection from "./CollectionSection";
import GroupDialog from "./GroupDialog";
import ProfileDialog from "./ProfileDialog";
import Sidebar from "./Sidebar";
import StatsOverview from "./StatsOverview";
import TitleEditor from "./TitleEditor";
import Topbar from "./Topbar";
import WelcomeHeader from "./WelcomeHeader";

export default function LibraryDashboard() {
  const [titles, setTitles] = useState(demoTitles);
  const [customGroups, setCustomGroups] = useState([]);
  const [section, setSection] = useState("watchlist");
  const [group, setGroup] = useState("All titles");
  const [genre, setGenre] = useState("All titles");
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(null);
  const [editingTitle, setEditingTitle] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const visibleTitles = useMemo(
    () => filterTitles(titles, { section, group, genre, query }),
    [titles, section, group, genre, query],
  );
  const groups = useMemo(() => getGroups(customGroups, titles), [customGroups, titles]);
  const watchedTitles = titles.filter((item) => item.state === "watched");
  const watchCount = titles.filter((item) => item.state === "watchlist").length;
  const watchedCount = watchedTitles.length;
  const averageRating = watchedTitles.reduce((total, item) => total + item.rating, 0) / (watchedCount || 1);

  function openTitleEditor(title = null) {
    setEditingTitle(title);
    setModal("title");
  }

  function saveTitle(formData) {
    const currentTitle = editingTitle || { id: Date.now(), state: section };
    const updatedTitle = saveTitleFromForm(formData, currentTitle);

    setTitles((currentTitles) => editingTitle
      ? currentTitles.map((item) => item.id === editingTitle.id ? updatedTitle : item)
      : [updatedTitle, ...currentTitles]);
    closeModal();
  }

  function createGroup(name) {
    const exists = ["All titles", "Movies", "Series", "Anime", ...customGroups]
      .some((existingGroup) => existingGroup.toLowerCase() === name.toLowerCase());

    if (!name || exists) return;
    setCustomGroups((currentGroups) => [...currentGroups, name]);
    setGroup(name);
    closeModal();
  }

  function removeTitle(title) {
    setTitles((currentTitles) => currentTitles.filter((item) => item.id !== title.id));
  }

  function toggleWatched(title) {
    setTitles((currentTitles) => currentTitles.map((item) => (
      item.id === title.id
        ? { ...item, state: item.state === "watchlist" ? "watched" : "watchlist" }
        : item
    )));
  }

  function closeModal() {
    setModal(null);
    setEditingTitle(null);
  }

  return (
    <main className="app-shell">
      <Sidebar
        section={section}
        group={group}
        groups={groups}
        watchCount={watchCount}
        watchedCount={watchedCount}
        titleCount={titles.length}
        mobileOpen={mobileNavOpen}
        onSectionChange={(nextSection) => { setSection(nextSection); setMobileNavOpen(false); }}
        onGroupChange={setGroup}
        onCreateGroup={() => setModal("group")}
        onProfileOpen={() => setModal("profile")}
      />

      {mobileNavOpen && (
        <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileNavOpen(false)} />
      )}

      <section className="main-panel">
        <Topbar
          section={section}
          query={query}
          onQueryChange={setQuery}
          onMenuOpen={() => setMobileNavOpen(true)}
          onSettingsOpen={() => setModal("profile")}
        />

        <div className="content-wrap">
          <WelcomeHeader onAddTitle={() => openTitleEditor()} />
          <StatsOverview watchCount={watchCount} watchedCount={watchedCount} averageRating={averageRating} />
          <CollectionSection
            section={section}
            titles={visibleTitles}
            group={group}
            genre={genre}
            onGenreChange={setGenre}
            onGroupReset={() => setGroup("All titles")}
            onAddTitle={() => openTitleEditor()}
            onEditTitle={openTitleEditor}
            onRemoveTitle={removeTitle}
            onToggleWatched={toggleWatched}
          />
          <footer className="page-footer">
            <span>MADE FOR THE LOVE OF THE STORY <span>✳</span></span>
            <span>YOUR TASTE. YOUR COLLECTION. <b>FRAME.</b></span>
          </footer>
        </div>
      </section>

      {modal === "title" && (
        <TitleEditor
          title={editingTitle}
          groups={groups}
          selectedGroup={group}
          onClose={closeModal}
          onSave={saveTitle}
        />
      )}
      {modal === "group" && <GroupDialog onClose={closeModal} onCreate={createGroup} />}
      {modal === "profile" && <ProfileDialog onClose={closeModal} />}
    </main>
  );
}
