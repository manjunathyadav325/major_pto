// // // import React from 'react';
// // // import './MethodSelection.css';

// // // const MethodSelection = () => {
// // //   return (
// // //     <div className="method-selection">
// // //       <h2>Select Stress Detection Method</h2>
// // //       <div className="button-container">
// // //         <button className="method-button">Stress Detection through Image</button>
// // //         <button className="method-button">Stress Detection through Live Video Capture</button>
// // //         <button className="method-button">Stress Detection through Audio Analysis</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MethodSelection;
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useHistory hook
// // import './MethodSelection.css';

// // const MethodSelection = () => {
// //   const history = useNavigate(); // Use useHistory hook to get history object

// //   const handleImageDetectionClick = () => {
// //     // Redirect to the MainPage when "Stress Detection through Image" button is clicked
// //     history('/mainpage');
// //   };

// //   return (
// //     <div className="method-selection">
// //       <h2>Select Stress Detection Method</h2>
// //       <div className="button-container">
// //         {/* Add onClick event handler to call handleImageDetectionClick */}
// //         <button className="method-button" onClick={handleImageDetectionClick}>Stress Detection through Image</button>
// //         <button className="method-button">Stress Detection through Live Video Capture</button>
// //         <button className="method-button">Stress Detection through Audio Analysis</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MethodSelection;
// // ======================================================================
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './MethodSelection.css';

// const MethodSelection = () => {
//   const navigate = useNavigate(); // Use useNavigate hook to get navigate function

//   const handleImageDetectionClick = () => {
//     // Redirect to the MainPage when "Stress Detection through Image" button is clicked
//     navigate('/mainpage');
//   };

//   const handleVideoDetectionClick = () => {
//     // Redirect to the MainPage_video when "Stress Detection through Live Video Capture" button is clicked
//     navigate('/mainpage_video');
//   };

//   return (
//     <div className="method-selection">
//       <h2>Select Stress Detection Method</h2>
//       <div className="button-container">
//         {/* Add onClick event handlers to call corresponding functions */}
//         <button className="method-button" onClick={handleImageDetectionClick}>Stress Detection through Image</button>
//         <button className="method-button" onClick={handleVideoDetectionClick}>Stress Detection through Live Video Capture</button>
//         <button className="method-button">Stress Detection through Audio Analysis</button>
//       </div>
//     </div>
//   );
// };

// export default MethodSelection;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MethodSelection.css';
import LogoutButton from './LogoutButton'; 
// import LogoutButton from './LogoutButton';

const MethodSelection = () => {
  const navigate = useNavigate(); // Use useNavigate hook to get navigate function

  const handleImageDetectionClick = () => {
    // Redirect to the MainPage when "Stress Detection through Image" button is clicked
    navigate('/mainpage');
  };

  const handleVideoDetectionClick = () => {
    // Redirect to the MainPage_video when "Stress Detection through Live Video Capture" button is clicked
    navigate('/mainpage_video');
  };

  const handleAudioDetectionClick = () => {
    // Redirect to the MainPage_audio when "Stress Detection through Audio Analysis" button is clicked
    navigate('/mainpage_audio');
  };

  return (
    <div className="method-selection">
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <LogoutButton />
      </div>
      <h2>Select Stress Detection Method</h2>
      <div className="button-container">
        {/* Add onClick event handlers to call corresponding functions */}
        <button className="method-button" onClick={handleImageDetectionClick}>Stress Detection through Image</button>
        <button className="method-button" onClick={handleVideoDetectionClick}>Stress Detection through Live Video Capture</button>
        <button className="method-button" onClick={handleAudioDetectionClick}>Stress Detection through Audio Analysis</button>
      </div>
    </div>
  );
};

export default MethodSelection;

