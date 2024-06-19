



import React, { useState, useRef, useEffect } from 'react';
import './MainPage_video.css';
import LogoutButton from './LogoutButton'; 
const MainPageVideo = () => {
  const videoRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleVideoUpload = async () => {
    try {
      const response = await fetch('http://localhost:5000/result', {
        method: 'POST'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json(); // Parse JSON response
      setResult(data.result); // Update result state with fetched data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchVideoFeed = async () => {
    try {
      const response = await fetch('http://localhost:5000/video_feed',{method:'GET'});
      if (!response.ok) {
        throw new Error('Failed to fetch video feed');
      }
      // Process the response if needed
    } catch (error) {
      console.error('Error fetching video feed:', error);
    }
  };

  useEffect(() => {
    // Fetch video feed when component mounts
    fetchVideoFeed();
  }, []);

  return (
    <div className="main-page">
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <LogoutButton />
      </div>
      <div className="section">
        <h3>Detect your stress through video</h3>
        {/* <video ref={videoRef} autoPlay playsInline /> */}
        <p>Triggered live video on your device . To terminate it please save and click on the below button "Detect Stress"</p>
        <button className="MainPage_button" onClick={handleVideoUpload}>
          Detect Stress
        </button>
      </div>

      {result && ( // Render result if it's not null
        <div className="section">
          <h4>Result: {result}</h4>
        </div>
      )}
    </div>
  );
};

export default MainPageVideo;
