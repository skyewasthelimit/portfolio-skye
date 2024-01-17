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
        <img id="coding-bg" src="/images/nebula.jpg" alt="Coding BG" />
        <Dropdown />
      </div>
      <div>
        <Darkmode />
      </div>
      <div className="bio">
        <Introduction />
      </div>
      <div className="skye-picture">
        <img src="/images/skye.png" alt="Coding BG" />
      </div>
      <div className="skills-div">
        <Skills />
      </div>
      <div className="youtube-player">
        <iframe
          id="Video"
          className="skye-video"
          width="640"
          height="360"
          src='https://www.youtube.com/embed/EFiXACuFhxo'
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
            • Modern Framework understandings <br />
            <hr></hr>
            • Fast Learner and Adaptible <br />
            <hr></hr>
            • Hands-On Project Building Experience <br />
            <hr></hr>
            • 17 years of Photoshop and InDesign  <br />
            <hr></hr>
            • Enthusiastic and Dedicated Work Ethic  <br />
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="wips">
        <h1 className='wips-h1'>Works in Progress</h1>
      <a href="https://github.com/skyewasthelimit/word-scrmbl">Word Scrmbl</a>
        <p className='wips-text'>An API based word scramble game</p>
        <a href="https://github.com/skyewasthelimit/twitch-notes">Twitch Notes</a>
        <p className='wips-text'>Fully integrated to-do list app for streamers</p>
        <a href="https://github.com/skyewasthelimit/skye-bot">IRC Twitch Bot</a>
        <p className='wips-text'>A responsive back-end chatbot with IRC and websockets</p>
        <a href="https://github.com/CodeSpent/game-watch">Game Watch</a>
        <p className='wips-text'>User-content generated list website for games using IMGB API and OAuth built with Next.js</p>
       ____________________________________________________
      </div>

      <div className="youtube-player" ID="RPG-GAME">
        <p>Full game I scripted and built to be released on Steam this year</p>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/oeHL3t4hob4?si=Wau9UvEi4HMvOteC" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; 
      web-share" 
      allowfullscreen></iframe>
      <p className='wips-text'>Developed using RPG Maker VX Ace</p>
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
        <a href="#Topper"><button className="top-btn">Top</button></a>
      </div>
    </div>
  )
}
