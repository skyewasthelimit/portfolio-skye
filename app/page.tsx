'use client';
import Image from 'next/image';
import React from 'react';
import './globals.css';
import { useRouter } from 'next/navigation'

import { Darkmode } from './components/darkmode.js';
import { Introduction } from './components/Introduction.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js'



export default function Home() {
  const router = useRouter()

  return (
    <div className="header">
      <div>
        <Darkmode />
      </div>
      <div className="bio">
        <Introduction />
      </div>
      <div className="skills-div">
        <Skills />
      </div>
      <div className="contact">
      <button className="contact-btn" onClick={() => router.push('mailto:skyemclean87@gmail.com')}>Let's Chat</button>
      </div>
  
      <div className="main">
        <Projects />
      </div>
    </div>
  )
}
