import React, { useEffect, useState, createRef, useCallback } from "react";
import { Image } from "../../Components/Image";

export const ClientsSection = ({clients}) => {
  const [icons, setIcons] = useState(clients);
  const clientsContainer = createRef()

  const swapping = (node) => {
    // node.style.transform = `translate(${10}px)`
    const cloneFirstImage = icons.at(0)
      const restOfImages = icons.slice(1)
      setIcons([...restOfImages,cloneFirstImage])
  };
  useEffect(()=>{
    const parentNode = clientsContainer.current
    console.log(parentNode.style)
  
  
  },[])
  return (
    <section className="clients container">
      <ul className="clients-content" ref={clientsContainer}>
          {
						icons.map((client) => {
							return <ClientLogo client={client} key={client.logo.slice(0,-4) + Math.random()} />
						})
					}
        </ul>
      <ul className="clients-content" ref={clientsContainer}>
          {
						icons.map((client) => {
							return <ClientLogo client={client} key={client.logo.slice(0,-4) + Math.random()} />
						})
					}
        </ul>
    </section>
  );
};


const ClientLogo = ({client}) => {
  
  return (
    <li>
      <Image url={`clients/${client.logo}`} alt={client.logo.slice(0,-4)} title={client.title} />
    </li>
  );
}