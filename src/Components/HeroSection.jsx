import React, { useEffect, useRef, useState } from 'react';
import map from '../assets/imgs/full-map.png'
import integration from '../assets/imgs/hero/integration.png'
import pie1 from '../assets/imgs/pie1.png'
import trainer1 from '../assets/imgs/trainer1.png'


export const HeroSection = () => {

	const heroRef = useRef(null);
	const carousalContainer = useRef(null);
	
	const slideShow = ()=> {
		const slidesContainer = carousalContainer.current
		const containerRect = slidesContainer.getBoundingClientRect();
		slidesContainer.scrollLeft += 100 +"px"
		const slides = slidesContainer.querySelectorAll('div');
		// console.log(slidesContainer.scrollLeft = 500 +"px")

	}
	useEffect(()=>{
		slideShow()
		
	},[])
	
  return (
    <div ref={heroRef} className='hero'>
			<div ref={carousalContainer} className='media-container'>
				
				
			</div>
		</div>
  )
}
