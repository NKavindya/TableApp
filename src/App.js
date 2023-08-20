import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomTable from './components/Table';
import Form from './components/Form';

function App() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    paddingLeft: '450px',
  };

  const linkStyle = {
    color: 'orange',
    textDecoration: 'none',
    padding: '0 20px',
  };

  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData([formData, ...tableData]);
  };

  const handleDelete = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={navStyle}>
            <li>
              <Link to="/" style={linkStyle}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/form" style={linkStyle}>
                FORM
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CustomTable data={tableData} onDelete={handleDelete} />} />
          <Route path="/form" element={<Form onFormSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
