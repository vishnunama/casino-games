import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint for handling form submissions
      const response = await axios.post('http://your-backend-api-endpoint.com/api/sendEmail', formData);

      // Optional: You can handle success and navigation here
      console.log('Server response:', response.data);
      alert('Form submitted successfully!');
      // Example navigation to the home page
      navigate('/');
    } 
    catch (error) {
      console.error('Error submitting form:', error);
      // Optional: You can handle errors and display an error message to the user
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <section className="pageheader-section" style={{backgroundImage: 'url(/images/backgroundimage.webp)'}}>
        {/* Your existing JSX code */}
      </section>

      <div className="main-form-popup">
        <div className='container-inner'>
          <div style={{display:"flex"}} className="form-div-popup-container">
            <div className="main-popup-form">
              <form onSubmit={handleSubmit}>
                <div className="main-popup-form-inputs">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="main-popup-form-inputs1">
                  <input
                    type="text"
                    placeholder="Enter your number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Enter your Gmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="main-popup-form-textera">
                  <textarea
                    name="subject"
                    cols="42"
                    rows="7"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-button-div">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className='image-inner-none'>
              <img
                style={{ width: '500px', marginLeft: '20%' }}
                src="/images/Inside a wrecked spaceship is a rave with children (1).webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="info-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2>We're Always Eager To Hear From You!</h2>
          </div>
          <div className="section-wrapper">
            {/* Your existing JSX code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
