import React from 'react'
import { useState } from 'react'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneNumberRegex = /^\d{10}$/;

    if (formData.name.trim() === '') {
      validationErrors.name = 'Name is required';
    }

    
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }


    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must have 10 digits';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      
      console.log('Form submitted:', formData);
      setErrors({});
    }
      }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'input-error' : ''}/>
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="ecdmail" value={formData.email}onChange={handleChange} className={errors.email ? 'input-error' : ''}/>
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber}onChange={handleChange}className={errors.phoneNumber ? 'input-error' : ''}/>
        {errors.phoneNumber && (
          <span className="error-message">{errors.phoneNumber}</span>
        )}

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default Form