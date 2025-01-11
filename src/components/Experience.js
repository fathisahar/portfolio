import React from 'react';
import './Experience.css';

/*
<div className="experience-item">
          <p className='date'>May 2025 to July 2025</p>
          <h3 className='amazon-title'>Software Development Engineer Intern</h3>
          <img className='amazon' src={require('./amazon.png')} alt="Amazon logo" />
          <p className='description'>
          </p>
        </div>
*/

function Experience() {
  return (
    <div>
      <h2 className='header'>Experience</h2>
      <section className="experience">
        
        <div className="experience-item">
          <p className='date'>January 2025 to April 2025</p>
          <h3 className='rbc-title'>Software Developer Intern</h3>
          <img className='rbc' src={require('./rbc.png')} alt="RBC capital markets logo" />
          <p className='description'>
          </p>
        </div>
        
        <div className="experience-item">
        <p className='date'>May 2024 to August 2024</p>
          <h3 className='nokia-title'>Software Developer Intern</h3>
          <img className='nokia' src={require('./nokia.png')} alt="Nokia logo" />
          <p className='description'>
          • Automated the installation of Rocky Linux 9 on 10+ HP-iLO servers using <span className='semibold'>Ansible</span>, streamlining deployment processes. <br/>
          • Migrated SysPass database from an unsupported VM OS to a new host, utilizing <span className='semibold'>MariaDB</span>, <span className='semibold'>PHP</span>, and <span className='semibold'>Apache</span> with HTTP configurations, ensuring compatibility and improved performance. <br/>
          • Developed a <span className='semibold'>Python</span>-based booking system for Nokia's customer support team, managing over 100 nodes with automated <span className='semibold'>SSH connections</span> for information retrieval and <span className='semibold'>HTML webpage</span> generation. <br/>
          • Developed scripts for comprehensive testing and validation of Nokia 7210 SAS-Mxp network switch.
        </p>

        </div>
        <div className="experience-item">
          <p className='date'>May 2023 to September 2023</p>
          <h3 className='dell-title'>Product Owner Intern</h3>
          <img className='dell' src={require('./dell.png')} alt="Dell logo"/>
          <p className='description'>
          • Co-managed three development teams, applying <span className='semibold'>Agile</span> methodologies in scrum meetings and sprint planning sessions for two cloud orchestration platforms which leveraged technologies such as <span className='semibold'>Apache Kafka</span>, <span className='semibold'>Kubernetes</span>, <span className='semibold'>RedHat Ansible</span>, and <span className='semibold'>Docker</span>. <br/>
          • Collaborated with four product owners to analyze technical data, emphasizing variances in predicted and actual sizing through precise measurement of 11 features' story points in <span className='semibold'>Jira</span> for two cloud platform orchestration products. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
