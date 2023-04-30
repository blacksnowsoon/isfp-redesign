import React, { useEffect } from "react";

export const ClientsSection = ({clients}) => {
  const secName = "CLients"
  const generateClientsList = () => {
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
  };
  useEffect(() => {
    generateClientsList();
  }, []);
  return (
    <section className="clients container">
      {/* <h1 className="sec-title">Our {secName}</h1> */}
      {
				generateClientsList()
			}
    </section>
  );
};


const ClientLogo = ({client}) => {
  const img = new URL(
    `../../assets/imgs/clients/${client.logo}`,
    import.meta.url
  ).href;
  return (
    <li >
      <img loading="lazy" src={img} alt={client.logo.slice(0,-4)} title={client.title} />
    </li>
  );
}