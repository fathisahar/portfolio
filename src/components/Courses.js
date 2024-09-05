import React from 'react';
import './Courses.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DataArrayIcon from '@mui/icons-material/DataArray';
import LoopIcon from '@mui/icons-material/Loop';
import ComputerIcon from '@mui/icons-material/Computer';
import PasswordIcon from '@mui/icons-material/Password';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import coursesData from '../resources/information/courses.json'; 

function Courses() {

    const icons = {
        EditNoteIcon,
        DataArrayIcon,
        LoopIcon,
        ComputerIcon,
        PasswordIcon,
        AutoGraphIcon
    };

    return (
        <div>
          <h2 className='header'>Academic Courses</h2>
          <section className="projects">
            {coursesData.map((project) => (
              <div className="project-item-courses" key={project.id}>
                {React.createElement(icons[project.icon])}
                <h3 className='title'>{project.name}</h3>
                <h2>{project.code}</h2>
                <p className='description'>{project.description}</p>
                <p>
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag tag-dell">{tag}</span>
                  ))}
                </p>
              </div>
            ))}
          </section>
        </div>
      );
    }
    
    export default Courses;