import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { getProduct } from "../../../API";
// handle the section for an Object as data type
export const ProductsSection = () => {
  const { Products: products = {} } = useOutletContext();
  const pargraphReg = /[A-z]{1}\./

  const generateProductsList = useCallback((ProductsObject) => {
    return (
      <>
        {
          <ul className="products-content">
            {
              Object.keys(ProductsObject).map((productKey) => {
                const index = ProductsObject[productKey].description.match(pargraphReg).index
                
                const img = new URL(
                  `../../../assets/imgs/products/${ProductsObject[productKey].thumbnail}`,
                  import.meta.url
                ).href;
                return (
                  <li className="product-card" key={productKey + Math.random()}>
                    <div className="product-img">
                      <img src={img} alt={productKey} />
                    </div>
                    <div className="product-description">
                      <div className="shape"></div>
                      <p>
                      {
                        ProductsObject[productKey].description.slice(0, index + 1)
                      }
                      </p>
                    </div>
                    <NavLink
                      to={`products/${productKey.toLocaleLowerCase()}`}>
                      Discover
                    </NavLink>
                  </li>
                );
              })
            }
          </ul>
        }
      </>
    );
  }, []);

  return (
    <section id="products" className="container">
      <h2 className="sec-title">Main Products</h2>
      {generateProductsList(products)}
    </section>
  );
};


