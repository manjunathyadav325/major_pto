// import React from 'react';
// import './RegisterSuccess_style.css'
// const RegisterSuccess = () => {
//   return (
//     <div className="registersuccess-container">
//       <h2 className="registersuccess-heading">"Registration Successful"</h2>
//       <p className="registersuccess-message">Thank you for registering!</p>
//     </div>
//   );
// };

// export default RegisterSuccess;
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './RegisterSuccess_style.css';

const RegisterSuccess = () => {
  return (
    <div className="registersuccess-container">
      <h2 className="registersuccess-heading">Registration Successful</h2>
      <p className="registersuccess-message">Thank you for registering!</p>
      <p>
        Click here to <Link to="/signin">SIGN IN</Link>
      </p>
    </div>
  );
};

export default RegisterSuccess;
