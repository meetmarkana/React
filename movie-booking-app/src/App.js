import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import BookingForm from './components/BookingForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Mock API endpoint
        const moviesData = response.data.slice(0, 5).map((movie, index) => ({
          id: movie.id,
          title: movie.title,
          description: movie.body,
          availableTickets: Math.floor(Math.random() * 10) + 1, // Random number of tickets
        }));
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const bookTicket = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId && movie.availableTickets > 0
          ? { ...movie, availableTickets: movie.availableTickets - 1 }
          : movie
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Booking App</h1>
      </header>
      <main>
        <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
        {selectedMovie && <BookingForm movie={selectedMovie} bookTicket={bookTicket} />}
      </main>
    </div>
  );
};

export default App;
