import React from 'react';
import '../index.css';
import san from '../images/san.png';
import  nil from '../images/nil.png'
import sibi from '../images/sibi.png';
import ram from '../images/sriram.png';
import haj from '../images/hhh.png'

const About = () => {
  return (
    <div className="about-us">
      <header className="company-story">
        <h1>About Us</h1>
      </header>
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
        At BB'z crew, our story began with a shared passion for innovation and a desire to make a meaningful impact in the world. Founded in 2023, our journey started with a small team of visionary individuals who believed in the transformative power of technology.
        </p>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ram} alt="Team Member 1" />
            <h3>Sri Ram</h3>
            <p>Co-Founder</p>
          </div>
          <div className="team-member">
            <img src={haj} alt="Team Member 2" />
            <h3>Hajeeth Ahamed</h3>
            <p>Co-Founder </p>
          </div>
          <div className="team-member">
            <img src={sibi} alt="Team Member 2" />
            <h3>Sibi</h3>
            <p>Manager</p>
          </div>
          <div className="team-member">
            <img src={nil} alt="Team Member 2" />
            <h3>Nilesh Sai</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src={san} alt="Team Member 3" />
            <h3>Santhosh Kumar</h3>
            <p>Lead Developer</p>
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default About;
