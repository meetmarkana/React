import React from 'react';
import './BookingForm.css';

const BookingForm = ({ movie, bookTicket }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    bookTicket(movie.id);
  };

  return (
    <div className="booking-form">
      <h2>Book Ticket for {movie.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
