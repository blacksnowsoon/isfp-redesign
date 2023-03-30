import React from 'react'
import consult44 from '../assets/imgs/consult44.png'
import services from '../assets/imgs/managed-services.jpg'
import trainer from '../assets/imgs/trainer.png'
import sec444 from '../assets/imgs/sec444.png'
import point_small from '../assets/imgs/point_small.png'
import map from '../assets/imgs/full-map.png'
import integration from '../assets/imgs/integration.png'
import pie1 from '../assets/imgs/pie1.png'
import trainer1 from '../assets/imgs/trainer1.png'
import { ClientsSection } from './ClientsSection'
import { ProductsSection } from './ProductsSection'
import { NavLink } from 'react-router-dom'
const Home = () => {
	
	
	
	return (
		<div className='home-container'>
		<section  className='hero'>
			<div className='hero-center'>
				<div className='map_top'>
					<img className='_background' src={map} alt={"map"} />
					<span title={'alex'} data-point={'egy-alex'}>⚪</span>
					<span title={'damietta'} data-point={'egy-damietta'}>⚪</span>
					<span title={'savaga'} data-point={'egy-savaga'}>⚪</span>
					<span title={'taba'} data-point={'egy-taba'}>⚪</span>
					<span title={'suez'} data-point={'egy-suez'}>⚪</span>
					<span title={'adabeya'} data-point={'egy-adabeya'}>⚪</span>
					<span title='nuweiba' data-point={'egy-nuweiba'}>⚪</span>
					<span title='alkhums' data-point={'lybia-alkhums'}>⚪</span>
					<span title='misurata' data-point={'lybia-misurata'}>⚪</span>
					<span title='sudanese' data-point={'sudan-sudanese'}>⚪</span>
					<span title='tripoli' data-point={'lebanon-tripoli'}>⚪</span>
				</div>

				<div className='pie_right'>
					<img className='_background' src={pie1} alt="pie" />
					<p>
						<h2>Credibillity in Our Strength</h2>
						<h3>Sponsored & Owned by</h3>
						<h4>the Gonverment & AASTMT</h4>
					</p>
					<p>
							<small>The Egyption Ministry of Transport</small>
							<small>Arab Academy for Science, Technology & Martitime Transport</small>
							<small>The Egyption Ministry of Communications & Information Technology</small>
						</p>
				</div>
			
				<div className='trainer_left'>
					<img className='_background' src={trainer1} alt="" />
					<h1>
						<span>W</span>
						<span>e </span>
						<span>I</span>
						<span>v</span>
						<span>e</span>
						<span>s</span>
						<span>t </span>
						<span>i</span>
						<span>n </span>
						<span>H</span>
						<span>u</span>
						<span>m</span>
						<span>a</span>
						<span>n </span>
						<span>A</span>
						<span>s</span>
						<span>s</span>
						<span>e</span>
						<span>e</span>
						<span>t</span>
						<span>e</span>
						<span>s</span>
					</h1>
					<p>and welcome to professionals who wish to join a team of experts</p>
				</div>

				<div className='integration_bottom'>
					<img className='_background' src={integration} alt="" />
					<h2>Confidence in our team of experts to provide Innovative and Efficient solutions </h2>
				</div>
			</div>
		</section>

		<section className='services-container'>
			<h1 className='sec-title'>Services</h1>
			<div className='services'>
				<div className='service'>
					<div className='service-content'>
						<img src={consult44} alt="consult44" />
						<h3>Consultation Services</h3>
						<p>Faster, Smarter,Smoother, Better, Cheaper. This is how companies required to run IT.</p>
					</div>
					<div className='service_overlay'>
						<NavLink className={"nav-link"}>Discover ➡️</NavLink>
					</div>
				</div>
				<div className='service'>
					<div className='service-content'>
						<img src={services} alt="services" />
						<h3>ICT Infra-Structure Services</h3>
						<p>We offer our customers the complete spectrum of ICT Infra-Structure Services to help them to build & to  manage reliable infrastructure.</p>
					</div>
					<div className='service_overlay'>
						<NavLink className={"nav-link"}>Discover ➡️</NavLink>
					</div>
				</div>
				<div className='service'>
					<div className='service-content'>
						<img src={trainer} alt="trainer" />
						<h3>Training Services </h3>
						<p>Our training service delivers open enrollment classes that are based on cyclic topics.</p>
					</div>
					<div className='service_overlay'>
						<NavLink className={"nav-link"}>Discover ➡️</NavLink>
					</div>
				</div>
				<div className='service'>
					<div className='service-content'>
						<img src={sec444} alt="trainer" />
						<h3>IT Management & Operation Services</h3>
						<p>Basically Your company’s data is more important than its physical assets. We can help securing your information from threats.</p>
						
					</div>
					<div className='service_overlay'>
						<NavLink className={"nav-link"}>Discover ➡️</NavLink>
					</div>
				</div>

			</div>
			
		</section>

		<section className='products'>
			<ProductsSection />
		</section>

		<section className='clients'>
			<ClientsSection />
		</section>
		
		</div>
	
	)
}



export default Home;
