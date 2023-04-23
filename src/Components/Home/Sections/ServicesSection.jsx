import React, { useCallback } from "react";
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
                const img = new URL(`../../../assets/imgs/services/${service.image}`, import.meta.url).href
                return (
                  <li className="service" key={service.name + Math.random}>
                    <img loading="lazy" src={img} alt={service.name} />
                    <div className="description">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </div>
                  </li>
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
