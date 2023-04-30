import React, { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../API";
import { Image } from "../Components/Image";


const Product = () => {
  const { product = {} } = useLoaderData();
  const containerRef = useRef();

  useEffect(()=> {
    const ref = getComputedStyle(containerRef.current)
    containerRef.current.style.setProperty('--children', product.images.length)
  })
  return (
    <section  className="one-item-container container">
      <div className="col2 imgs-container">
        <div ref={containerRef} className="core">
        <Image
          url={`products/${product.thumbnail}`}
          alt={product.fullName}
          className="thumbnail"
        />
        {
          product?.images.map((img, index) => {
            return (
              <Image
              url={`products/${img}`}
                alt={product.modules[index]}
                key={product.fullName + index}
              />
            );
          })}
        </div>
        
      </div>
      <div className="col2">
        <div>
          <h2>{product.fullName}</h2>
          <p>{product.description}</p>
        </div>
        <ul className="modules">
          <h2>Main Modules</h2>
          {product.modules.map((module) => (
            <li key={product.fullName.replaceAll(" ", "") + Math.random()}>
              {module}
            </li>
          ))}
        </ul>
        <div className="item-links">
          <a href="https://www.isfpegypt.com/beta/index.php/resources-library/demos" role="button">
            Reqest a demo
          </a>
          <a href="https://www.isfpegypt.com/beta/index.php/contacts-us">
            Contact Us
          </a>
          <a href={product.brochure}>Download Brochure</a>
        </div>
      </div>
    </section>
  );
};
// [A-z]{1}\.

export default Product

export const loader = async (request) => {
  const productName = request.params["*"].toLocaleUpperCase();
  const product = await getProduct(productName);
  return { product };
};