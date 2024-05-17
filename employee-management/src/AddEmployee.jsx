import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function AddEmployee({ addNewEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addNewEmployee(name, position, salary);
    navigate('/');
  }

  return (
    <div className="container">
      <div className="card">
        <h2>ADD EMPLOYEE</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button type="submit">ADD EMPLOYEE</button>
        </form>
        <Link to="/" className="back-link">Back TO Home Page</Link>
      </div>
    </div>
  );
}

export default AddEmployee;
