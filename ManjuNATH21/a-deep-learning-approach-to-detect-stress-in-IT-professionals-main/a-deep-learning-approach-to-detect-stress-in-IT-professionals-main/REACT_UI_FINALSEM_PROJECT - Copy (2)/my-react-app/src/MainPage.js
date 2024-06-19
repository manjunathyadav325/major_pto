
import React, { useState } from 'react';
import './MainPage_style.css';
import LogoutButton from './LogoutButton'; 
// import LogoutButton from './LogoutButton';
const MainPage = () => {
  const [result, setResult] = useState(null); // State to store the result

  const handleImageUpload = async () => {
    try {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data); // Store the result in state
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main-page">
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <LogoutButton />
      </div>
      <div className="section">
        <h3>Detect your stress through image</h3>
        <input type="file" id="fileInput" accept="image/*" />
        <button className='MainPage_button' onClick={handleImageUpload}>Upload Image</button>
      </div>

      {/* Display the result if available */}
      {result && (
        <div className="section">
         <h4>Predicted Emotion: {result.predicted_emotion}</h4>
<p>Stress Detection: {result.stress_detection}</p>
<img src={result.image_url} alt="Uploaded" />

        </div>
      )}
    </div>
  );
};

export default MainPage;
