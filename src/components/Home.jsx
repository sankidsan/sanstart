



import React from 'react';
import '../index.css';
 import backgroundImage from '../images/logo.png';
// style={{ backgroundImage: `url(${backgroundImage} )` }}

const Home = () => {
  return (
    <div className="home" >
      <div className="content">
        <div className="logo">
        <img src={backgroundImage} alt="Company Logo"></img>
        </div>
        <h1>Welcome to BBZ Crew: Where Creativity Meets Innovation!</h1>
        <p>Explore Our Visionary Community and Join the Movement</p>
        <button class="button-35" role="button">Get Started</button>
      </div>
      
    </div>
  );
};

export default Home;

