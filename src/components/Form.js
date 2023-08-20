import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    body: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    
    navigate('/');
  };

  return (
    <div className="form-container">
      <h3>FILL THIS FORM</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id" className="form-label">
            ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="form-input"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body" className="form-label">
            Body:
          </label>
          <textarea
            id="body"
            name="body"
            className="form-input"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Form;
