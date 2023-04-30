import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationLink } from "../../Components/NavigationLink";
import { SectionTitle } from "../../Components/SectionTitle";
import { Button } from "../../Components/Button";
import { Image } from "../../Components/Image";
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
        currentIndex === projects.length ? projects.length : currentIndex + 1
      );
    } else if (target.classList.contains("right")) {
      setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
    }
    e.preventDefault();
  };

  const generateProjectsSection =
    useCallback(()=>{
      return (
      <ProjectsList
        reference={projectsContainer} 
        projects={projects} />
      )
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
    <section id="projects" className="container" aria-label="projects section">
      <SectionTitle 
        className="sec-title" 
        aria-label="title" 
        caption={'Projects'}/>
      
      <div className="wrapper">
        <div className="btns-wrapper">
          <Button
            ariaLabel="slide left"
            reference={leftRef}
            event={handleSwappingButton}
            className={`left ${currentIndex === projects.length && "hide"}`}
            caption={'<'}
          />
          <Button
            ariaLabel="slide back"
            reference={rightRef}
            event={handleSwappingButton}
            className={`right ${currentIndex === 0 && "hide"}`}
            caption={'>'}
          />
        </div>
        {
          generateProjectsSection()
        }
      </div>
      <NavigationLink 
      to={"projects"} 
      className={"projects-link"} 
      caption={`See All Projects`}/>
    </section>
  );
};


const ProjectsList = ({projects = {}, reference = ""})=>{
  return (
    <ul
      className="projects-list"
      ref={reference}
      aria-label="projects list" >
      {
        projects.map((project) => {
          return (
            <ProjectSlide project={project} key={project.id + project.date} />
          );
        })
      }
      <li className="project" key={"projectsPath"}>
        <NavigationLink
          to={"projects"}
          className={"projects-page"}
          ariaLabel="read more link" 
          caption={"Show All Projects"}>
        </NavigationLink>
      </li>
    </ul>
  );
}
// return each project slide
const ProjectSlide = ({ project }) => {
  
  return (
    <li className="project">
      <Image 
        containerClassName={"project-thumbnail"}
        url={`projects/${project.thumbnail}`}
        className={""}
        alt={project.author} 
        title={project.author} />
      <div className="project-details">
        <h2>{project.author}</h2>
        <h3>located in {project.country}</h3>
        <p>{project.overview}</p>
        <NavLink to={`/projects/${project.id}`}>Read More</NavLink>
      </div>
    </li>
  );
};
