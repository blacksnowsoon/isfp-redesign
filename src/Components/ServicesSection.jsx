import React from 'react'
import { NavLink } from 'react-router-dom'
import consult44 from '../assets/imgs/consult44.png'
import services from '../assets/imgs/managed-services.jpg'
import trainer from '../assets/imgs/trainer.png'
import sec444 from '../assets/imgs/sec444.png'
export const ServicesSection = () => {
  return (
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
  )
}
