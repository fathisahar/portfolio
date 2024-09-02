import React from 'react';
import './Projects.css';
import MapIcon from '@mui/icons-material/Map';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import HotelIcon from '@mui/icons-material/Hotel';
import { useNavigate } from 'react-router-dom';

function Projects() {

  const navigate = useNavigate();
  
  return (
    <div>
      <h2 className='header'>Projects</h2>
      <section className="projects">
        <div className="project-item" onClick={() => window.open('https://github.com/TJusab/QuestBit-v2')}>
          <MapIcon />
          <h3 className='title'>QuestBit</h3>
          <p className='description'>Gamified task management application where users compete for a spot on the leaderboard with friends to complete Quests and their QuestBits.</p>
          <p>
            <span className="tag tag-nokia">TypeScript</span>
            <span className="tag tag-dell">React-Native</span>
            <span className="tag tag-dell">Appwrite</span>
          </p>
        </div>

        <div className="project-item" onClick={() => window.open('https://github.com/fathisahar/KitchenHelper')}>
          <KitchenIcon />
          <h3 className='title'>KitchenHelper</h3>
          <p className='description'>Web application to keep track of user's ingredients and recipes, offering recipe based on inventory.</p>
          <p>
            <span class="tag tag-nokia">React</span>
            <span class="tag tag-nokia">JavaScript</span> 
            <span class="tag tag-dell">Flask</span> 
            <span class="tag tag-dell">Python</span> 
            <span class="tag tag-nokia">MySQL</span>
          </p>
        </div>

        <div className="project-item" onClick={() => window.open('https://github.com/McGill-ECSE321-Winter2024/FitHub')}>
          <FitnessCenterIcon/>
          <h3 className='title'>FitHub</h3>
          <p className='description'>Sport center management web application to allow owners, instructors and users to organize courses.</p>
          <p>
            <span class="tag tag-dell">Vue.js</span> 
            <span class="tag tag-dell">JavaScript</span>
            <span class="tag tag-nokia">PostgreSQL</span> 
            <span class="tag tag-dell">Spring</span>
          </p>
        </div>

        <div className="project-item" onClick={() => window.open('https://github.com/fathisahar/AssetPlus')}>
          <HotelIcon/>
          <h3 className='title'>AssetPlus</h3>
          <p className='description'>Hotel asset management desktop application to allow hotel owners, employees and guests to track assets.</p>
          <p>
            <span class="tag tag-dell">Java</span> 
            <span class="tag tag-nokia">JavaFX</span> 
            <span class="tag tag-dell">JSON</span>
          </p>
        </div>

        <div className="project-item" onClick={() => window.open('https://github.com/fathisahar/archerio')}>
          <ShuffleIcon/>
          <h3 className='title'>Archer.io</h3>
          <p className='description'>Educational desktop bow and arrow game in which users aim for a target on different planets and learn about the mechanics behind the arrow's trajectory.</p>
          <p>
            <span class="tag tag-dell">Java</span> 
            <span class="tag tag-nokia">JavaFX</span>
            <span class="tag tag-nokia">JSON</span>
          </p>
        </div>

        <div className="project-item" onClick={() => window.open('https://github.com/fathisahar/mchacks-24')}>
          <PetsIcon/>
          <h3 className='title'>Spawk</h3>
          <p className='description'>Hackathon project to match pets to potential owners.</p>
          <p>
            <span class="tag tag-dell">React-Native</span> 
            <span class="tag tag-dell">FireBase</span>
            <span class="tag tag-nokia">JavaScript</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
