import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/prabin.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Prabin Dangol" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/prabindangol618" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prabin-dangol-961a53430/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prabin Dangol</h1>
          <p>Digital Creative & Frontend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/prabindangol618" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prabin-dangol-961a53430/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;