import React from "react";
import { useLoaderData } from "react-router-dom";
import { getProject } from "../API";
import { Image } from "../Components/Image";
const Project = () => {
  const { project = {} } = useLoaderData();
  return (
    <section className="container project-page">
      <Image
        containerClassName={"project-page-thumb"}
        url={`projects/${project.thumbnail}`}
        alt={project.thumbnail.slice(-3)}
        className={"pro-img"}
      />
      <div className="project-page-content">
        <div>
          <h3>{project.author}</h3>
          <h2>{project.country}</h2>
        </div>

        <p>{project.overview}</p>
        <p>{project.description}</p>
      </div>
    </section>
  );
};

export default Project;

export const loader = async (request) => {
  try {
    const project = await getProject(request.params.id);
    return { project };
  } catch (err) {}
};
