import React from 'react'
import consult44 from '../assets/imgs/consult44.png'
import services from '../assets/imgs/managed-services.jpg'
import trainer from '../assets/imgs/trainer.png'
import sec444 from '../assets/imgs/sec444.png'
import point_small from '../assets/imgs/point_small.png'

const Home = () => {
	return (
		<div>
		<section className='hero' style={{border: "5px solid blue"}}>
			<img title='alex' data-point={'egy-alex'} src={point_small} alt="alex" />
			<img title='damietta' data-point={'egy-damietta'}  src={point_small} alt="damietta" />
			<img title='savaga' data-point={'egy-savaga'} src={point_small} alt="savaga" />
			<img title='taba' data-point={'egy-taba'} src={point_small} alt="taba" />
			<img title='suez' data-point={'egy-suez'} src={point_small} alt="suez" />
			<img title='adabeya' data-point={'egy-adabeya'} src={point_small} alt="adabeya" />
			<img title='nuweiba' data-point={'egy-nuweiba'} src={point_small} alt="nuweiba" />
			<img title='alkhums' data-point={'lybia-alkhums'} src={point_small} alt="alkhums" />
			<img title='misurata' data-point={'lybia-misurata'} src={point_small} alt="misurata" />
			<img title='sudanese' data-point={'sudan-sudanese'} src={point_small} alt="sudanese" />
			<img title='tripoli' data-point={'lebanon-tripoli'} src={point_small} alt="tripoli" />
		</section>
		<section className='services'>
			<div className='item'>
				<img src={consult44} alt="consult44" />
			</div>
			<div className='item'>
				<img src={services} alt="services" />
			</div>
			<div className='item'>
				<img src={trainer} alt="trainer" />
			</div>
			<div className='item'>
			<img src={sec444} alt="trainer" />
			</div>
		</section>
		</div>
	
	)
}



export default Home;
