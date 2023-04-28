import React from 'react'
import { getProjects } from '../../API';
import { useLoaderData } from 'react-router-dom';

const Projects = () => {
  const projects = useLoaderData();
  // console.log(projects)
  return (
    <div>Projects</div>
  )
}


export default Projects

export const loader = async ()=>{
  return await getProjects();
}