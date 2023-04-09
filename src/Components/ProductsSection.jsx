import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const ProductsSection = (products) => {
  // to get the name of the section with upperCase for first letter
  const secName =
    Object.getOwnPropertyNames(products)[0].charAt(0).toLocaleUpperCase() +
    Object.getOwnPropertyNames(products)[0].slice(1);

  const productsList = Object.values(products)[0]

  const generateProductsList = ()=>{
    // public\assests\Sections_imgs\products\ERP.png
    return (
      <>
      {
        <ul className="products-content">
          {
            productsList.map(product =>{
              const img = new URL(`../assets/imgs/products/${product.image}`, import.meta.url).href
              return (
                <li className="product-card" key={product.shortName + Math.random()}>
                  <img src={img} alt={product.shortName} />
                  <NavLink to={`./${product.shortName.toLocaleLowerCase()}`}>Discover</NavLink>
                </li>
              )
            })
          }
      </ul>
      }
      </>
    )
  }
  useEffect(()=>{generateProductsList()},[])
  return (
    <section className="container">
      <h2 className="sec-title">Main {secName}</h2>
      {
        generateProductsList()
      }
    </section>
  );
};
