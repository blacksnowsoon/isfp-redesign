import React from 'react'

import point_small from '../assets/imgs/point_small.png'
import { ClientsSection } from './ClientsSection'
import { ProductsSection } from './ProductsSection'
import { HeroSection } from './HeroSection'
import { ServicesSection } from './ServicesSection'
import { ProjectsSection } from './ProjectsSection'
import { NewsSection } from './NewsSection'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
	// const data = useOutletContext()
	const {Corporate : {"Clients & Beneficiaries": cli_ben}, Services, Products, "News & Events":news, Projects } = useOutletContext()
	
	
	return (
		<>
				
				<ServicesSection services ={Services} />
				
				<ProductsSection products ={Products}/>
				
				<ProjectsSection projects ={Projects} />

				<NewsSection news={news} />

				<ClientsSection clients={cli_ben.Clients} />  
			
		</>
	)
}



export default Home;
