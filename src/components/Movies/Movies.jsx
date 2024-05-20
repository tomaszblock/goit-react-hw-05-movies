import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../Api/Api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    if (query.trim() !== '') {
      searchMovies(query)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error("Error searching movies:", error));
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
