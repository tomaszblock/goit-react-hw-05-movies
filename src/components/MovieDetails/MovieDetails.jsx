import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from '../Api/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => setMovie(response.data))
      .catch(error => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p><strong>User Rating:</strong> {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      <nav>
        <Link to={`cast`}>Cast</Link>
        <br></br>
        <Link to={`reviews`}>Reviews</Link>
      </nav>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
