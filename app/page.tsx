'use client';
import React from 'react';
import './globals.css';

import { Darkmode } from './components/darkmode.js';
import { Introduction } from './components/Introduction.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js'
import { Links } from './components/Links.js';
import { Cards } from './components/Cards.js';
import { Dropdown } from './components/Dropdown.js';


export default function Home() {

  return (
    <div className="header">
      <div className="topper" id="Topper">
        <Dropdown />
      </div>
      <div>
        <Darkmode />
      </div>
      <div className="bio" id="Video">
        <Introduction />
        <img id="coding-bg" src="/images/coding.png" alt="Coding BG" />
      </div>
      <div className="skye-picture">
        <img src="/images/skye.png" alt="Coding BG" />
      </div>
      <div className="skills-div">
        <Skills />
      </div>
      <div className="youtube-player">
        <iframe
          width="640"
          height="360"
          src='https://www.youtube.com/embed/FrGEq6Jy3FA'
          allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share"
          title='video'
        />
      </div>
      <div className="contact" id="Email">
        <a href="mailto:skyemclean87@gmail.com"><button className="contact-btn">Lets Chat</button></a>
      </div>
      <div className="main" id="Projects">
        <Projects />
      </div>
      <div className="highlights-container" id="Highlights">
        <div className='pb-3'>Highlights</div>
        <div className="highlights">
          <div className='highlights-list'>
            • Version Control familiarity <br />
            <hr></hr>
            • Visual Studio Code<br />
            <hr></hr>
            • Responsive Web Design Certification <br />
            <hr></hr>
            • Front-End Libraries Certification <br />
            <hr></hr>
            • Tailwind CSS Experience <br />
            <hr></hr>
            • Version control familiarity <br />
            <hr></hr>
            • Hands-On Project Building Experience <br />
            <hr></hr>
            • 17 years of Photoshop and InDesign  <br />
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="Links" id="Links">Links
        <div className="links-panel">
          <Links />
        </div>
      </div>
      <div className="cards-container">
        <Cards />
      </div>

      <div className="footer" id="Contact">
        <div className="contact-info">
          Skye McLean <br />
          Victoria, BC <br />
          Front-End Web Developer <br />
          This website was made with Next.JS <br />
        </div>
        <div className="top">
          <a href="#Topper"><button className="top-btn">Top</button></a>
        </div>
      </div>
    </div>
  )
}
