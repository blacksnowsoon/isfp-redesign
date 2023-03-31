import React from 'react'

import point_small from '../assets/imgs/point_small.png'
import { ClientsSection } from './ClientsSection'
import { ProductsSection } from './ProductsSection'
import { HeroSection } from './HeroSection'
import { ServicesSection } from './ServicesSection'

const Home = () => {
	
	
	
	return (
		<div className='home-container'>
			
		<HeroSection />

		<ServicesSection />

		<ProductsSection />
		
		<ClientsSection />
	
		</div>
	
	)
}



export default Home;
