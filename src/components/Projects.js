import React from 'react';
import './Projects.css';
import MapIcon from '@mui/icons-material/Map';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function Projects() {
  return (
    <div>
      <h2 className='header'>Projects</h2>
      <section className="projects">
      <div className="project-item">
        <MapIcon />
        <h3 className='title'>QuestBit</h3>
        <p className='description'>Gamified task management application where users compete for a spot on the leaderboard with friends to complete Quests and their QuestBits.</p>
        <p>Made with TypeScript, React-Native, Appwrite.</p>
      </div>

      <div className="project-item">
        <KitchenIcon />
        <h3 className='title'>KitchenHelper</h3>
        <p className='description'>Web application to keep track of user's ingredients and recipes, offering recipe based on inventory. </p>
        <p> Made with React, JavaScript, Flask, Python, MySQL</p>
      </div>

      <div className="project-item">
        <FitnessCenterIcon/>
        <h3 className='title'>FitHub</h3>
        <p className='description'>Sport center management web application to allow owners, instructors and users to organize courses.</p>
        <p>Made with Vue.js, JavaScript, PostgreSQL, Spring</p>
      </div>
    </section>
    </div>
  );
}

export default Projects;
