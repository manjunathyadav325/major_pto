
import React, { useState } from 'react';
import './MainPage_audio.css';
import LogoutButton from './LogoutButton'; 
const MainPage_audio = () => {
  const [recording, setRecording] = useState(false);
  const [emotion, setEmotion] = useState('');
  const [stress, setStress] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const startRecording = async () => {
    try {
      const response = await fetch('http://localhost:5000/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      setRecording(true);
      setStatusMessage('Recording started');
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      const response = await fetch('http://localhost:5000/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      setRecording(false);
      setEmotion(data.emotion); // Update state with detected emotion
      setStress(data.stress); // Update state with detected stress
      setStatusMessage('Recording stopped');
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  return (
    <div className="main-page-audio">
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <LogoutButton />
      </div>
      <h1>Detect your stress through audio</h1>
      <div className="button-container">
        <button className="record-button" onClick={startRecording} disabled={recording}>
          Record
        </button>
        <button className="stop-button" onClick={stopRecording} disabled={!recording}>
          Stop
        </button>
      </div>
      <p>{statusMessage}</p>
      {/* {emotion && <p>Detected emotion: {emotion}</p>} */}
      {stress && <p>Detected stress: {stress}</p>}
    </div>
  );
};

export default MainPage_audio;
