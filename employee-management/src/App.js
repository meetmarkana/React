import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  function addNewEmployee(name, position, salary) {
    let newEmployee = {
      id: new Date().getTime(),
      name: name,
      position: position,
      salary: salary,
    };
    setEmployees([...employees, newEmployee]);
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter((el) => el.id !== id));
  }

  function updateEmployee(id, name, position, salary) {
    setEmployees(employees.map(employee => employee.id === id ? { ...employee, name: name, position: position, salary: salary } : employee));
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home employees={employees} deleteEmployee={deleteEmployee} />} />
          <Route path="/add" element={<AddEmployee addNewEmployee={addNewEmployee} />} />
          <Route path="/edit/:id" element={<EditEmployee updateEmployee={updateEmployee} employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
