
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './SignUp_style.css'; // Import CSS file

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const navigate = useNavigate(); // Get navigate function from useNavigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your signup logic, like sending the form data to a server
//     console.log(formData);
//     // Reset form after submission
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
//     // Redirect to registersuccess page after successful registration
//     navigate('/registersuccess');
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-heading">Sign Up</h2>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="signup-button" type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// =================================================================

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios for HTTP requests
// import { useNavigate } from 'react-router-dom';
// import './SignUp_style.css';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://your-backend-url/signup', formData);
//       // Store JWT token in local storage upon successful signup
//       localStorage.setItem('token', response.data.token);
//       // Redirect to registersuccess page after successful registration
//       navigate('/registersuccess');
//     } catch (error) {
//       console.error('Signup failed:', error);
//       // Handle signup failure here
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-heading">Sign Up</h2>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         {/* Form inputs */}
//         <button className="signup-button" type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { useNavigate } from 'react-router-dom';
import './SignUp_style.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/signup', formData);
      // Store JWT token in local storage upon successful signup
      localStorage.setItem('token', response.data.token);
      // Redirect to registersuccess page after successful registration
      navigate('/registersuccess');
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure here
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
