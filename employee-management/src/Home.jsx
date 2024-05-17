import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home({ employees, deleteEmployee }) {
  function handleDelete(id) {
    deleteEmployee(id);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome To the Employee Management Page</h1>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((el) => (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.position}</td>
                <td>{el.salary}</td>
                <td>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                  <Link to={`/edit/${el.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add" className="add-post-link">ADD EMPLOYEE</Link>
      </div>
    </div>
  );
}

export default Home;
