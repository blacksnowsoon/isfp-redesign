import React, { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../API";



const Product = () => {
  const { product = {} } = useLoaderData();
  const containerRef = useRef(null);

  useEffect(()=>{
    const ref = getComputedStyle(containerRef.current)
    containerRef.current.style.setProperty('--children', product.images.length)
  })
  return (
    <div  className="one-item-container">
      <div className="col2">
        <h2>{product.fullName}</h2>
        <p>{product.description}</p>
        <ul className="modules">
          <h2>Main Modules</h2>
          {product.modules.map((module) => (
            <li key={product.fullName.replaceAll(" ", "") + Math.random()}>
              {module}
            </li>
          ))}
        </ul>
        <div className="item-links">
          <a href="https://www.isfpegypt.com/beta/index.php/resources-library/demos">
            Reqest a demo
          </a>
          <a href="https://www.isfpegypt.com/beta/index.php/contacts-us">
            Contact Us
          </a>
          <a href={product.brochure}>Download Brochure</a>
        </div>
      </div>

      <div className="col2 imgs-container">
        <div ref={containerRef} className="core">
        <img
          src={
            new URL(
              `../../assets/imgs/products/${product.thumbnail}`,
              import.meta.url
            ).href
          }
          alt={product.fullName}
          className="thumbnail"
        />
        {product?.images.map((img, index) => {
          return (
            <img
              src={
                new URL(`../../assets/imgs/products/${img}`, import.meta.url).href
              }
              alt={product.modules[index]}
              key={product.fullName + index}
            />
          );
        })}

        </div>
        
      </div>
    </div>
  );
};
// [A-z]{1}\.

export default Product

export const loader = async (request) => {
  const productName = request.params["*"].toLocaleUpperCase();
  const product = await getProduct(productName);
  return { product };
};