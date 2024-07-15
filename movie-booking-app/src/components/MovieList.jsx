import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <div className="movie-list">
      <h2>Available Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Available Tickets: {movie.availableTickets}</p>
          <button onClick={() => setSelectedMovie(movie)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
