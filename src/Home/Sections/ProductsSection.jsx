import React, { useCallback } from "react";
import { NavigationLink } from "../../Components/NavigationLink";
import { Image } from "../../Components/Image";
import { SectionTitle } from "../../Components/SectionTitle";


// handle the section for an Object as data type
export const ProductsSection = ({products = {}}) => {
  
  const generateProductsList = useCallback(() => {
    return (
      <ul className="products-content">
        {
          Object.entries(products).map((product) => {
            return (
            <Product 
            name={product?.[0]} 
            product={product?.[1]} 
            key={product?.[0] + Math.random()}/>
            )
          })
        }
      </ul>
    );
  }, [products]);

  return (
    <section id="products" className="container" aria-label="products section">
      <SectionTitle className="sec-title" caption={'Main Products'}/>
      {
        generateProductsList()
      }
      {/* to clear the float style */}
      <div className="clear"></div>
    </section>
  );
};


const Product = ({product = {}, name = ""})=>{
  // using the reg to get the first index of a dot (.)
  const pargraphReg = /[A-z]{1}\./
  const index = product?.description.match(pargraphReg).index
  return (
    <li className="product-card" >
      <Image 
      containerClassName='product-img'
      url={`products/${product.thumbnail}`}
      alt={product?.fullName} />
                    
      <div className="product-description">
        <div className="shape"></div>
        <p>
          {
            product?.description.slice(0, index + 1)
          }
        </p>
      </div>

      <NavigationLink
        to={`products/${name.toLocaleLowerCase()}`} 
        caption="Discover"/>
    </li>
  )
}