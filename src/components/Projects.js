import React from 'react';
import './Projects.css';
import MapIcon from '@mui/icons-material/Map';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import HotelIcon from '@mui/icons-material/Hotel';
import projectsData from '../resources/information/projects.json'; 

function Projects() {

  const icons = {
    MapIcon,
    KitchenIcon,
    FitnessCenterIcon,
    PetsIcon,
    ShuffleIcon,
    HotelIcon
  };

  return (
    <div>
      <h2 className='header'>Projects</h2>
      <section className="projects">
        {projectsData.map((project) => (
          <div className="project-item" key={project.id} onClick={() => window.open(project.url)}>
            {React.createElement(icons[project.icon])}
            <h3 className='title'>{project.name}</h3>
            <p className='description'>{project.description}</p>
            <p>
              {project.tags.map((tag, index) => (
                <span key={index} className="tag tag-nokia">{tag}</span>
              ))}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
