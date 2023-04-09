import React, { useEffect } from "react";

export const ClientsSection = (clients) => {
  const secName =
    Object.keys(clients)[0].charAt(0).toLocaleUpperCase() +
    Object.keys(clients)[0].slice(1);
  const clientsList = Object.values(clients)[0];
  const generateClientsList = () => {
    return (
      <>
        <ul className="clients-content">
          {
						clientsList.map((client) => {
							const img = new URL(
								`../assets/imgs/clients/${client.logo}`,
								import.meta.url
							).href;
							return (
								<li key={client.logo.slice(0,-4) + Math.random()}>
									<img loading="lazy" src={img} alt={client.logo.slice(0,-4)} title={client.logo.slice(0,-4)} />
								</li>
							);
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
      <h1 className="sec-title">Our {secName}</h1>
      {
				generateClientsList()
			}
    </section>
  );
};

