import React from 'react';
import './Projects.css';

function Projects() {


  return (
    <div>
      <h2>Projects</h2>
      <section className="projects">
      <div className="project-item">
        <h3>QuestBit</h3>
        <p>Gamified task management application where users compete for a spot on the leaderboard with friends to complete Quests and their QuestBits.</p>
        <p>Made with TypeScript, React-Native, Appwrite.</p>
      </div>

      <div className="project-item">
        <h3>KitchenHelper</h3>
        <p>Web application to keep track of user's ingredients and recipes, offering recipe based on inventory. </p>
        <p> Made with React, JavaScript, Flask, Python, MySQL</p>
      </div>

      <div className="project-item">
        <h3>FitHub</h3>
        <p>Sport center management web application to allow owners, instructors and users to organize courses.</p>
        <p>Made with<span className="tag">Vue.js</span> , JavaScript, PostgreSQL, Spring</p>
      </div>
    </section>
    </div>
  );
}

export default Projects;
