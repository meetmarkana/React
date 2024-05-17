import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './App.css';

function EditEmployee({ employees, updateEmployee }) {
  const { id } = useParams();
  let employee = employees.find(emp => emp.id === parseInt(id));
  const [name, setName] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);
  const [salary, setSalary] = useState(employee.salary);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updateEmployee(employee.id, name, position, salary);
    navigate('/');
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Edit Employee</h1>
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
          <button type="submit">UPDATE EMPLOYEE</button>
        </form>
        <Link to="/" className="back-link">Back To Home Page</Link>
      </div>
    </div>
  );
}

export default EditEmployee;
