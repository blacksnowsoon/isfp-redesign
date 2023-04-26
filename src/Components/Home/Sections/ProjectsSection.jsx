import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// this section has an array of entities each item in the array
// hold an Object with one key which is the country
// and each country has a list of some objects each object
// hold a project by the city
// handle the setion of an array data object
export const ProjectsSection = ({ projects = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = useRef(0);
  const projectsContainer = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const handleSwappingButton = (e) => {
    const target = e.target;
    prevIndex.current = currentIndex;
    if (target.classList.contains("left")) {
      setCurrentIndex(
        currentIndex === projects.length  ? projects.length : currentIndex + 1
      );
    } else if (target.classList.contains("right")) {
      setCurrentIndex(
        currentIndex === 0 ? currentIndex : currentIndex - 1
        );
    }
    e.preventDefault();
  };
  const generateHomeProjectsSection = useCallback(() => {
    return (
      <ul className="projects-list" ref={projectsContainer}>
        {projects.map((project) => {
          return <Project project={project} key={project.id + project.date} />;
        })}
        <li className="project" key={"projectsPath"}>
          <NavLink to={"projects"} className={"projects-page"}><h3>Show All Projects</h3></NavLink>
        </li>
      </ul>
    );
  }, [projects]);

  useEffect(() => {
      if (currentIndex < prevIndex.current) {
        projectsContainer.current.childNodes[
          currentIndex + 1
        ].style.transform = `translateX(100%)`;
      } else {
        projectsContainer.current.childNodes[
          currentIndex
        ].style.transform = `translateX(0%)`;
      }
    
  }, [currentIndex]);
  return (
    <section id="projects" className="container">
      <h2 className="sec-title">Projects</h2>
      <div className="wrapper">
        <button
          ref={leftRef}
          onClick={handleSwappingButton}
          className={`btn left ${
            currentIndex === projects.length && "hide" 
          }`}
        >
          {/* &lt; */}
        </button>
        <button
          ref={rightRef}
          onClick={handleSwappingButton}
          className={`btn right ${currentIndex === 0 && "hide" }`}
        >
          {/* &gt; */}
        </button>
        {generateHomeProjectsSection()}
      </div>
    </section>
  );
};

// return each project slide
const Project = ({ project }) => {
  const img = new URL(
    `../../../assets/imgs/projects/${project.thumbnail}`,
    import.meta.url
  ).href;
  return (
    <li className="project">
      <div className="project-thumbnail">
        <img src={img} alt={project.author} title={project.author} />
      </div>
      <div className="project-details">
        <h2>{project.author}</h2>
        <h3>located in {project.country}</h3>
        {/* <h4> {project.product}</h4> */}
        <p>{project.overview}</p>
        <NavLink to={`projects/${project.id}`}>Read More</NavLink>
      </div>
    </li>
  );
};