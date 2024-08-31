import React from 'react';
import './Projects.css';
import MapIcon from '@mui/icons-material/Map';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import HotelIcon from '@mui/icons-material/Hotel';

function Projects() {
  return (
    <div>
      <h2 className='header'>Projects</h2>
      <section className="projects">
        <div className="project-item">
          <MapIcon />
          <h3 className='title'>QuestBit</h3>
          <p className='description'>Gamified task management application where users compete for a spot on the leaderboard with friends to complete Quests and their QuestBits.</p>
          <p>
            <span class="tag tag-fn">TypeScript</span>
            <span class="tag tag-fn">React-Native</span>
            <span class="tag tag-fn">Appwrite</span>
          </p>
        </div>

        <div className="project-item">
          <KitchenIcon />
          <h3 className='title'>KitchenHelper</h3>
          <p className='description'>Web application to keep track of user's ingredients and recipes, offering recipe based on inventory.</p>
          <p>
            <span class="tag tag-fn">React</span>
            <span class="tag tag-fn">JavaScript</span> 
            <span class="tag tag-fn">Flask</span> 
            <span class="tag tag-fn">Python</span> 
            <span class="tag tag-fn">MySQL</span>
          </p>
        </div>

        <div className="project-item">
          <FitnessCenterIcon/>
          <h3 className='title'>FitHub</h3>
          <p className='description'>Sport center management web application to allow owners, instructors and users to organize courses.</p>
          <p>
            <span class="tag tag-fn">Vue.js</span> 
            <span class="tag tag-fn">JavaScript</span>
            <span class="tag tag-fn">PostgreSQL</span> 
            <span class="tag tag-fn">Spring</span>
          </p>
        </div>

        <div className="project-item">
          <HotelIcon/>
          <h3 className='title'>AssetPlus</h3>
          <p className='description'>Hotel asset management desktop application to allow hotel owners, employees and guests to track assets.</p>
          <p>
            <span class="tag tag-fn">Java</span> 
            <span class="tag tag-fn">JavaFX</span> 
            <span class="tag tag-fn">JSON</span>
          </p>
        </div>

        <div className="project-item">
          <ShuffleIcon/>
          <h3 className='title'>Archer.io</h3>
          <p className='description'>Educational desktop bow and arrow game in which users aim for a target on different planets and learn about the mechanics behind the arrow's trajectory.</p>
          <p>
            <span class="tag tag-fn">Java</span> 
            <span class="tag tag-fn">JavaFX</span>
            <span class="tag tag-fn">JSON</span>
          </p>
        </div>

        <div className="project-item">
          <PetsIcon/>
          <h3 className='title'>Spawk</h3>
          <p className='description'>Hackathon project to match pets to potential owners.</p>
          <p>
            <span class="tag tag-fn">React-Native</span> 
            <span class="tag tag-fn">FireBase</span>
            <span class="tag tag-fn">JavaScript</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
