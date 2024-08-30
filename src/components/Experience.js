import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <section className="experience">
        <div className="experience-item">
        <p className='date'>May 2024 to August 2024</p>
          <h3 className='title'>Software Developer Intern</h3>
          <p className='company'>Nokia</p>
          <p className='description'>yada yada</p>
          
        </div>
        <div className="experience-item">
          <p className='date'>May 2023 to September 2023</p>
          <h3 className='title'>Product Owner Intern</h3>
          <p className='company'>Dell Technologies </p>
          <p className='description'>yada yada</p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
