import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
// handle the section for an Object as data type
export const ProductsSection = (products) => {
  // to get the name of the section with upperCase for first letter
  const secName =
    Object.getOwnPropertyNames(products)[0].charAt(0).toLocaleUpperCase() +
    Object.getOwnPropertyNames(products)[0].slice(1);

  const ProductsObject = Object.values(products)[0];

  const generateProductsList = () => {
    return (
      <>
        {
          <ul className="products-content">
            {Object.keys(ProductsObject).map((productKey) => {
              const img = new URL(
                `../assets/imgs/products/${ProductsObject[productKey].image}`,
                import.meta.url
              ).href;
              return (
                <li className="product-card" key={productKey + Math.random()}>
                  <div className="product-img">
                    <img src={img} alt={productKey} />
                  </div>
                  <div className="product-description">
                    <div className="shape"></div>
                    <p>{ProductsObject[productKey].description}</p>
                  </div>
                  <NavLink to={`products/${productKey.toLocaleLowerCase()}`} state={{product: ProductsObject[productKey]}}>
                    Discover
                  </NavLink>
                </li>
              );
            })}
          </ul>
        }
      </>
    );
  };
  useEffect(() => {
    generateProductsList();
  }, []);
  return (
    <section id="products" className="container">
      <h2 className="sec-title">Main {secName}</h2>
      {generateProductsList()}
    </section>
  );
};

export const Product = ()=>{
  const product = useLocation().state?.product

  return (
    <h1>
      {product.description}
    </h1>
  )
}