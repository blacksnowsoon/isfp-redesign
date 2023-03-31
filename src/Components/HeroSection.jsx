import React from 'react'

import map from '../assets/imgs/full-map.png'
import integration from '../assets/imgs/integration.png'
import pie1 from '../assets/imgs/pie1.png'
import trainer1 from '../assets/imgs/trainer1.png'
export const HeroSection = () => {
  return (
    <section  className='hero'>
			<div className='hero-center'>
        <h1 >
          <span>I</span>
          <span>S</span>
          <span>F</span>
          <span>P</span>
        </h1>
        <div className='hero-item map_top'>
					<img className='_background' src={map} alt={"map"} />
				{/*	<span title={'alex'} data-point={'egy-alex'}>⚪</span>
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
				*/}
        </div> 
        

				<div className='hero-item pie_right'>
          <img className='_background' src={pie1} alt="pie" />
					{/*<p>
						<h2>Credibillity in Our Strength</h2>
						<h3>Sponsored & Owned by</h3>
						<h4>the Gonverment & AASTMT</h4>
					</p>
					<p>
							<small>The Egyption Ministry of Transport</small>
							<small>Arab Academy for Science, Technology & Martitime Transport</small>
							<small>The Egyption Ministry of Communications & Information Technology</small>
						</p> */}
				</div>
			
				<div className='hero-item trainer_left'>
          <img className='_background' src={trainer1} alt="" />
					{/*<h1>
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
					<p>
            and welcome to professionals who wish to join a team of experts
            </p> */}
				</div>

				<div className='hero-item integration_bottom'>
          <img className='_background' src={integration} alt="" />
				{/*	<h2>
            Confidence in our team of experts to provide Innovative and Efficient solutions 
          </h2> */}
				</div>

			</div>
		</section>
  )
}
