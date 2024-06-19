// StressDetectionWebsite.js
import React from 'react';
import './style.css'; // Import CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import homepage_stressgirl from './Images/homepage_stressgirl.jpg'
import aboutpage_picture from './Images/aboutpage_picture.jpg'
import image_services from './Images/image-services.png'
import video_services from './Images/video-services.png'
import audio_services from './Images/audio-services.png'
function StressDetectionWebsite() {
  return (
    <div className="App">
      <header>
        <a href="#" className="logo">STRESS DETECTOR</a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          
          {/* Dark Mode */}
          <div className="darkmode" id="darkmode"></div>
        </ul>
      </header>
      
      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-text">
          <h1>Inner Calm Check</h1>
          <h2>Sometimes the most productive thing <br /> you can do is relax</h2>
          {/* <a  className="btn">Check-In</a> */}
        </div>
        <div className="home-img">
          <img src={homepage_stressgirl}alt="" />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutpage_picture} alt="" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>We help you build a better workplace</h2>
          <p>Does your IT team seem stressed, overwhelmed, or burnt out? You're not alone.
            The fast-paced, demanding world of IT can take a toll on employee well-being.
            Our website is here to help. We offer innovative solutions to detect stress in IT employees before it impacts their health, productivity, and morale...
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </section>

      {/* Menu */}
      <section className="services" id="services">
        <div className="heading">
          <span>Services</span>
          <h2>"Empowering Wellness: Our Comprehensive Suite of Services Tailored Just for You!"</h2>
        </div>
        <div className="services-container">
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src={image_services} alt="" />
            </div>
            <h2>Stress Detection via image analysis</h2>
            <h3>Stress detection via image analysis involves evaluating various visual elements, such as facial expressions, 
              to determine whether they exhibit indications of stress.</h3>
          </div>
          {/* Box 2 */}
          <div className="box">
            <div className="box-img">
              <img src={video_services} alt="" />
            </div>
            <h2>Stress Detection via live video analysis</h2>
            <h3>Stress detection via live video analysis involves assessing facial expressions and visual cues in 
              real-time to determine whether they exhibit signs of stress.</h3>
          </div>
          {/* Box 3 */}
          <div className="box">
            <div className="box-img">
              <img src={audio_services} alt="" />
            </div>
            <h2>Stress Detection via audio analysis</h2>
            <h3>Audio analysis for stress detection involves assessing different elements of a person's voice, such as tone and pitch,
              to ascertain whether they display indications of stress.</h3>
          </div>
        </div>
      </section>

      <script src="https://unpkg.com/scrollreveal"></script>
      {/* Link To JavaScript */}
      <script src="script.js"></script>
    </div>
  );
}

export default StressDetectionWebsite;
