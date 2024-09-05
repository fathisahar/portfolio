import React from 'react';
import './Extracurricular.css';

function Extracurricular() {

      return (
        <div>
          <h2 className='header'>Extracurricular</h2>
          <section className="experience">
            <div className="experience-item">
            <p className='date'>September 2022 to April 2024</p>
              <h3 className='rocket-title'>Rocket Team Member</h3>
              <img className='rocket' src={require('./rocket.png')}/>
              <p className='description'>
              •	Engineered a responsive graphical user interface (GUI) for the rocket-building club using <span className='semibold'>Java</span>, <span className='semibold'>JavaFX</span> and <span className='semibold'>SceneBuilder</span>. <br/>
              •	Applied advanced <span className='semibold'>CSS</span>  techniques, including the implementation of a dark mode theme, to enhance the user interface. <br/>
              •	Collaborated on cross-disciplinary teams, integrating real-time sensor data into the GUI for data visualization.  
            </p>    
            </div>

          </section>
        </div>
      );
    }
    
    export default Extracurricular;
    