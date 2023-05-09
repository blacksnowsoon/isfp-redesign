import React, { useCallback, useEffect, useState } from "react";
import { getProjects } from "../API";
import { useLoaderData } from "react-router-dom";
import { Image } from "../Components/Image";
import { NavLink } from "react-router-dom";
import { Button } from "../Components/Button";
import { NavigationLink } from "../Components/NavigationLink";

const Projects = () => {
  // get the prjects
  const { projects = [] } = useLoaderData();
  // declear the projects state
  const [projectsState, setProjectsState] = useState([]);
  // set the default value of the filter
  const [filter, setFilter] = useState("All");
  // declear the container of the filter values
  const countriesSet = new Set(projects.map((pro) => pro.country));

  const handleFilter = (e) => {
    const target = e.target.innerText;
    setFilter(target);
    target === "All"
      ? setProjectsState(projects)
      : setProjectsState(projects.filter((pro) => pro.country === target));
  };

  useEffect(() => {
    setProjectsState(projects.map((pro) => pro));
  }, [projects]);

  return (
    <section className="container projects">
      <ul className="projects-filter">
        <li key={`filter-btn${0}`}>
          <Button
            caption={"All"}
            className={`projects-filter-btn ${
              filter === "All" ? "active" : ""
            }`}
            event={handleFilter}
          />
        </li>
        {Array.from(countriesSet).map((ele, index) => {
          return (
            <li key={`filter-btn${index + 1}`}>
              <Button
                caption={ele}
                className={`projects-filter-btn ${
                  filter === ele ? "active" : ""
                }`}
                event={handleFilter}
              />
            </li>
          );
        })}
      </ul>
      <ul className="projects-grid">
        {projectsState.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.id + project.author.replaceAll(" ", "")}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;

export const loader = async () => {
  const projects = await getProjects();
  return { projects };
};

const ProjectCard = ({ project }) => {
  
  return (
    <li className="project-card">
      <Image
        url={`projects/${project.thumbnail}`}
        alt={project.author}
        className="card-thumbnail"
      />
      <div className="project-content">
        <h4>{project.author}</h4>
        <p>{project.country}</p>
        <div className="overlay">
          <p>{project.overview}</p>
          <NavigationLink
            to={""+project.id}
            className={"project-link before"}
            caption={"Show"}
          />
        </div>
      </div>
    </li>
  );
};
