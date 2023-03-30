import React from 'react'
import SPS from '../assets/imgs/SPS.png'
import ERP from '../assets/imgs/ERP.png'
import SIB from '../assets/imgs/SIB.png'

export const ProductsSection = () => {
  return (
    <div>
      <h1 className='sec-title'>Our Products</h1>
      <div className='products-content'>
        <div className='product-card'>
          <img src={ERP} alt="ERP" />

        </div>
        <div className='product-card'>
          <img src={SPS} alt="SPS" />
        </div>
        <div className='product-card'>
        <img src={SIB} alt="SIB" />
        </div>

      </div>
    </div>
  )
}
