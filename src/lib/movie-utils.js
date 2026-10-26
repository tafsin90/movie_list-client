export function getPosterUrl(image) {
  if (image?.startsWith("http")) return image;
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;
}

export function filterTitles(titles, { section, group, genre, query }) {
  const normalizedQuery = query.trim().toLowerCase();

  return titles.filter((item) => {
    const matchesSection = item.state === section;
    const matchesGroup = group === "All titles" || item.group === group;
    const matchesGenre = genre === "All titles" || item.genres.includes(genre);
    const matchesQuery = item.title.toLowerCase().includes(normalizedQuery);

    return matchesSection && matchesGroup && matchesGenre && matchesQuery;
  });
}

export function getGroups(customGroups, titles) {
  return [...new Set([...customGroups, ...titles.map((item) => item.group)])];
}

export function saveTitleFromForm(formData, currentTitle) {
  return {
    ...currentTitle,
    title: String(formData.get("title")).trim(),
    year: Number(formData.get("year")) || new Date().getFullYear(),
    kind: formData.get("kind"),
    rating: Number(formData.get("rating")) || 0,
    length: String(formData.get("length") || "Feature film"),
    group: formData.get("group"),
    genres: formData.getAll("genres"),
    image: String(formData.get("image") || "photo-1518709268805-4e9042af9f23"),
    tint: "#9a8d7b",
    label: "ADDED TO YOUR COLLECTION",
    progress: currentTitle.progress || "Just added",
  };
}
