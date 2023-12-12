'use client';
import Image from 'next/image';
import React from 'react';
import './globals.css';
import { useRouter } from 'next/navigation'

import { Darkmode } from './components/darkmode.js';
import { Introduction } from './components/Introduction.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js'
import YouTubePlayer from './components/YouTubePlayer';



export default function Home() {
  const router = useRouter()

  return (
    <div className="header">
      <div>
        <Darkmode />
      </div>
      <div className="bio">
        <Introduction />
        <img id="coding-bg" src="/images/coding.png" alt="Coding BG" />
      </div>
      <div className="skills-div">
        <Skills />
      </div>
      <div className="youtube-player">
        <YouTubePlayer videoId="vHq1ncfGqAk" />
      </div>
      <div className="contact">
        <button className="contact-btn" onClick={() => router.push('mailto:skyemclean87@gmail.com')}>Let's Chat</button>
      </div>
      <div className="main">
        <Projects />
      </div>
      <div className="highlights-container">
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
          • Hands-On Project Buidling Experience <br />
          <hr></hr>
          • 17 YRS Photoshop and InDesign  <br />
          <hr></hr>
          </div>
        </div>
      </div>
    </div>
  )
}
