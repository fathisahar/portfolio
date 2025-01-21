import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./Experience2.css";

function Experience() {
  const experiences = [
    {
      date: "January 2025 to April 2025",
      title: "Software Developer Intern",
      company: "RBC Capital Markets",
      css: "rbc",
      logo: require("./rbc.png"),
    },
    {
      date: "May 2024 to August 2024",
      title: "Software Developer Intern",
      company: "Nokia",
      css: "nokia",
      logo: require("./nokia.png"),
    },
    {
      date: "May 2023 to September 2023",
      title: "Product Owner Intern",
      company: "Dell Technologies",
      css: "dell",
      logo: require("./dell.png"),
    },
  ];

  /*
<img
    className={`${experience.css}`}
    src={experience.logo}
    alt={`${experience.company} logo`}
/>
  */

  return (
    <Timeline position="alternate">
      <h2 className='header'>Experience</h2>
      {experiences.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className="experience-item">
              <p className="date">{experience.date}</p>
              <h3 className="title">{experience.title}</h3>
              <p className="company">{experience.company}</p>
              
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Experience;
