import React from 'react'
import ACCHC from '../assets/imgs/logos/ACCHC.png'
import Al_Khums from '../assets/imgs/logos/Al_Khums_Port.jpg'
import APA from '../assets/imgs/logos/APA.jpg'
import DPA from '../assets/imgs/logos/DPA.jpg'
import EMDBLogoBig from '../assets/imgs/logos/EMDBLogoBig.png'
import LPC from '../assets/imgs/logos/LPC.jpg'
import MTS1 from '../assets/imgs/logos/MTS1.png'
import MinistryOfTransportlogo from '../assets/imgs/logos/MinistryOfTransportlogo.png'
import misurata from '../assets/imgs/logos/misurata.png'
import RailLogo from '../assets/imgs/logos/RailLogo.png'
import RSPA from '../assets/imgs/logos/RSPA.png'
import suda_HD from '../assets/imgs/logos/suda_HD.jpg'
import tripoli from '../assets/imgs/logos/tripoli.png'

export const ClientsSection = () => {
  return (
    <section className='clients'>
      <h1 className='sec-title'>Our Clients</h1>
			<div className='clients-content'>
					<img src={ACCHC} alt="ACCHC" />
					<img src={Al_Khums} alt="Al_Khums" />
					<img src={APA} alt="APA" />
					<img src={EMDBLogoBig} alt="EMDBLogoBig" />
					<img src={DPA} alt="DPA" />
					<img src={LPC} alt="LPC" />
					<img src={MTS1} alt="MTS1" />
					<img src={MinistryOfTransportlogo} alt="MinistryOfTransportlogo" />
					<img src={misurata} alt="misurata" />
					<img src={RailLogo} alt="RailLogo" />
					<img src={RSPA} alt="RSPA" />
					<img src={suda_HD} alt="suda_HD" />
			</div>
    </section>
  )
}
