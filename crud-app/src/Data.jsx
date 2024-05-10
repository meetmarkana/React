import React, { useState } from 'react';

function Data() {
  const [moviename, setMoviename] = useState('');
  const [rating, setRatings] = useState('');
  const [moviedescription, setMovieDescription] = useState('');
  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addMovie() {
    const newMovie = {
      Movie: moviename,
      Description: moviedescription,
      Ratings: rating
    };

    if (editIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = newMovie;
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      setMovies([...movies, newMovie]);
    }

    setMoviename('');
    setMovieDescription('');
    setRatings('');
  }

  function deleteMovie(index) {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  }

  function editMovie(index) {
    const movie = movies[index];
    setMoviename(movie.Movie);
    setMovieDescription(movie.Description);
    setRatings(movie.Ratings);
    setEditIndex(index);
  }

  return (
    <div>
      <center>
        <h1>Movies</h1>
        <br /> <br />
        <input type="text" placeholder='Enter Movie Name' value={moviename} onChange={(e) => setMoviename(e.target.value)} /><br /><br /><br />
        <input type="text" placeholder='Enter Description' value={moviedescription} onChange={(e) => setMovieDescription(e.target.value)} /><br /><br /><br />
        <input type="text" placeholder='Enter Ratings' value={rating} onChange={(e) => setRatings(e.target.value)} /><br /><br /><br />
        <button onClick={addMovie}>{editIndex !== null ? 'Update' : 'Add'}</button>

        <div className='main'>
        <br/><br/>
          <table border={3}>
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Movie Description</th>
                <th>Rating</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((el, i) => (
                <tr key={i}>
                  <td>{el.Movie}</td>
                  <td>{el.Description}</td>
                  <td>{el.Ratings}</td>
                  <td><button onClick={() => editMovie(i)}>Edit</button></td>
                  <td><button onClick={() => deleteMovie(i)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Data;
