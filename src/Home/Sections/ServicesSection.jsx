import React, { useCallback } from "react";
import { Image } from "../../Components/Image";
// handle the section of an array data type
export const ServicesSection = (services) => {
  // to get the name of the section from the prop key and captilize the first letter
  const secName =
    Object.getOwnPropertyNames(services)[0].charAt(0).toLocaleUpperCase() +
    Object.getOwnPropertyNames(services)[0].slice(1);
  // to get the array of the services which is the value of prop
  const listOfServices = Object.values(services)[0];

  const generateServicesList = useCallback(()=>{
      return (
        <>
          <ul className="services">
            {
              listOfServices.map(service =>{
                return (
                  <Service service={service} key={service.name + Math.random}/>
                )
              })
            }
          </ul>
        </>
      )
  },[])
  return (
    <section id="services" className="container">
      <h2 className="sec-title">{secName}</h2>
      {
        generateServicesList()
      }
    </section>
  );
};


const Service = ({service})=>{

  return (
    <li className="service">
      <Image url={`services/${service.image}`} alt={service.name} />
      <div className="description">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    </li>
  )
}