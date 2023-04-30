import React from 'react'


import { ClientsSection } from './Sections/ClientsSection'
import { ProductsSection } from './Sections/ProductsSection'
import { HeroSection } from './Sections/HeroSection'
import { ServicesSection } from './Sections/ServicesSection'
import { ProjectsSection } from './Sections/ProjectsSection'
import { NewsSection } from './Sections/NewsSection'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
	
	const {Corporate : {"Clients & Beneficiaries": cli_ben}, Services, Products, "News & Events":news, Projects } = useOutletContext()
	
	return (
		<>
			<HeroSection />
			
			<ServicesSection services={Services} />
			
			<ProductsSection products ={Products}/>
			
			<ProjectsSection projects ={Projects.slice(0,7)} />

			<NewsSection news={news} />

			<ClientsSection clients={cli_ben.Clients} />  
			
		</>
	)
}



export default Home;
