// import React from 'react';
// import axios from 'axios'; // Import Axios for making HTTP requests

// function LogoutButton() {
//   const handleLogout = () => {
//     // Send a POST request to the logout endpoint
//     axios.post('http://localhost:5000/logout', {})
//       .then(response => {
//         // Handle successful logout
//         console.log('Logged out successfully');
//         // Redirect to the home page or perform any other action
//         window.location.href = '/'; // Redirect to the home page
//       })
//       .catch(error => {
//         // Handle error
//         console.error('Error logging out:', error);
//       });
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// }

// export default LogoutButton;
import React from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function LogoutButton() {
  const handleLogout = () => {
    // Send a POST request to the logout endpoint
    axios.post('http://localhost:5000/logout', {})
      .then(response => {
        // Handle successful logout
        console.log('Logged out successfully');
        // Redirect to the home page or perform any other action
        window.location.href = '/'; // Redirect to the home page
      })
      .catch(error => {
        // Handle error
        console.error('Error logging out:', error);
      });
  };

  const buttonStyle = {
    backgroundColor: '#ff6347', /* Red color */
    color: '#fff', /* White text color */
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff3b00', /* Darker red color on hover */
  };

  return (
    <button 
      style={buttonStyle} 
      onMouseEnter={() => {}} 
      onMouseLeave={() => {}} 
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
