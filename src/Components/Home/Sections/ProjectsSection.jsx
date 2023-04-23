import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";

// this section has an array of entities each item in the array
// hold and Object with one key which is the country
// and each country has a list of some objects each object
// hold a project by location or the city
// to handle the setion of an array data object
export const ProjectsSection = (projects) => {
  const secName =
    Object.keys(projects)[0].charAt(0).toLocaleUpperCase() +
    Object.keys(projects)[0].slice(1);

  const listOfCountries = Object.values(projects)[0];
  
  const generateHomeProjectsSection = ()=>{
    const elements = {}
    const array = []
    listOfCountries.map(country =>{
      const countryName = Object.keys(country)[0].charAt(0).toLocaleUpperCase() +
            Object.keys(country)[0].slice(1)
        elements[countryName] = []
      const projects = Object.values(country)[0]
      
      // console.log(listOfCountries.length)
      
      for (let i=0; i < projects.length; i++) {
        const random = Math.ceil(Math.random() * 10 % projects.length);
          if(random < projects.length) {
            // console.log(projects[random])
          } else {
            // console.log(countryName)
            // console.log("out")
          }
      }
      

    })
  

  }
  const generateProjects = useCallback(() => {
    generateHomeProjectsSection()
    return (
      <>
        <ul className="projects">
          {
            listOfCountries.map((country) => {
            const countryName = Object.keys(country)[0].charAt(0).toLocaleUpperCase() +
            Object.keys(country)[0].slice(1)
            const listOfCountries = Object.values(country)[0]
            
            return (
              <li className="country" key={Math.random() }>
                <h3>
                  {countryName}
                </h3>
                {
                  // each country has an array of projects
                  <ul className="locations">
                    {
                      listOfCountries.map(project =>{
                        // console.log(project.location.replaceAll(/[^a-zA-Z0-9]/g,""))
                        return (
                        <li key={Math.random()} className="location card">
                          <h6 className="location-title">{project.city}</h6>
                          <img src={new URL(`../../../assets/imgs/projects/${project.image}`, import.meta.url).href}/>
                          {/* <div className="location-img">
                          
                          </div> */}
                          <p className="location-overview">
                            {
                              project.overView.slice(0, project.overView.split("").indexOf("."))
                            }.<br></br>
                            <NavLink to={`projects/${project.city.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")}`}> ➡️Read More</NavLink>
                          </p>
                          
                        </li>)
                      })
                      

                    }
                  </ul>
                }
              </li>
            );
          })}
        </ul>
      </>
    );
  }, []);

  const img = new URL("../assets/imgs/projects/ADABIA.jpg", import.meta.url)
    .href;

  return (
    <section id="projects" className="container">
      <h1 className="sec-title">{secName} Board</h1>
      {
      generateProjects() 
      
      }
    </section>
  );
};
