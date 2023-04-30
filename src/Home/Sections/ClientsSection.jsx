import React, { useCallback } from "react";
import { Image } from "../../Components/Image";

export const ClientsSection = ({clients}) => {
  const secName = "CLients";

  const generateClientsList = useCallback(() => {
    return (
      <>
        <ul className="clients-content">
          {
						clients.map((client) => {
							return <ClientLogo client={client} key={client.logo.slice(0,-4) + Math.random()} />
						})
					}
        </ul>
      </>
    );
  },[clients]);

  return (
    <section className="clients container">
      {
				generateClientsList()
			}
    </section>
  );
};


const ClientLogo = ({client}) => {
  
  return (
    <li >
      <Image url={`clients/${client.logo}`} alt={client.logo.slice(0,-4)} title={client.title} />
    </li>
  );
}