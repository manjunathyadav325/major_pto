
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useHistory hook
// import './SignIn_style.css';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const history = useNavigate(); // Use useHistory hook to get history object

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your signin logic, like sending the form data to a server
//     console.log(formData);
//     // Reset form after submission
//     setFormData({
//       email: '',
//       password: ''
//     });

//     // Redirect to the "MethodSelection" page after sign-in
//     history('/methodselection'); // Use push method to navigate to MethodSelection page
//   };

//   return (
//     <div className="signin-container">
//       <h2 className="signin-heading">Sign In</h2>
//       <form className="signin-form" onSubmit={handleSubmit}>
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
//         <button className="signin-button" type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;






// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios for HTTP requests
// import { useNavigate } from 'react-router-dom';
// import './SignIn_style.css';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
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
//       const response = await axios.post('http://your-backend-url/signin', formData);
//       // Store JWT token in local storage upon successful signin
//       localStorage.setItem('token', response.data.token);
//       // Redirect to methodselection page after successful signin
//       navigate('/methodselection');
//     } catch (error) {
//       console.error('Signin failed:', error);
//       // Handle signin failure here
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2 className="signin-heading">Sign In</h2>
//       <form className="signin-form" onSubmit={handleSubmit}>
//         {/* Form inputs */}
//         <button className="signin-button" type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { useNavigate } from 'react-router-dom';
import './SignIn_style.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      const response = await axios.post('http://127.0.0.1:5000/signin', formData);
      // Store JWT token in local storage upon successful signin
      localStorage.setItem('token', response.data.token);
      // Redirect to methodselection page after successful signin
      navigate('/methodselection');
    } catch (error) {
      console.error('Signin failed:', error);
      // Handle signin failure here
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="signin-button" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
