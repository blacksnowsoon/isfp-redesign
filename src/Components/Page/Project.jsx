import React from 'react'

export const Project = () => {
  return (
    <div>Project</div>
  )
}
export default Project;

export const loader = async (request) => {
  const projects = await getProjects();
  return { projects }
}
