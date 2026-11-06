"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  async function handleSearch(value) {
    setQuery(value);
    setSelectedMovie(null);

    if (value.trim() === "") {
      setMovies([]);
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/movies/search?query=${encodeURIComponent(value)}`,
    );

    const data = await response.json();
    // console.log(data);

    setMovies(data.results || []);
  }

  async function handleSelectMovie(movie) {
    const response = await fetch(
      `http://localhost:5000/api/movies/${movie.id}`,
    );

    const data = await response.json();
    console.log(data)
    console.log(data.genres);
    setSelectedMovie(data);
    setQuery(data.title);
    setMovies([]);
    // console.log(movie);
  }

  return (
    <main>
      <h1>FRAME Movie Search</h1>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Search suggestions */}
      {movies.length > 0 && (
        <div>
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => handleSelectMovie(movie)}>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}

      {/* Selected movie */}
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>

          <p>Release Date: {selectedMovie.release_date}</p>

          <div className="flex gap-2">
            {selectedMovie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p>Rating: {selectedMovie.vote_average}</p>

          <p>{selectedMovie.overview}</p>

          {selectedMovie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              width="200"
            />
          )}
        </div>
      )}
    </main>
  );
}
