import React from "react";
import { useLoaderData } from "react-router-dom";
import { getProject } from "../../API";

const Project = () => {
  const  { project = {} }  = useLoaderData();
  return (
    <>
    <h1>{project.id}</h1>
    </>
  
  )
};

export default Project

export const loader = async (request) => {
  try {
    const project = await getProject(request.params.id);
    return { project };
  } catch (err) {
    
  }
  
};
