import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="column ">
        <h2>ISFP in Shorts</h2>
        <p className='about'>
        Established in 2005, under the memorandum of understanding concluded between the Egyptian Ministry of Transport, the Ministry of Communications & Information Technology and The Arab Academy for Science, Technology & Maritime Transport.
        </p>
      </div>
      <div className="column">
        <h2>Staff Area</h2>
        <a href=''>👨‍💼ERP</a>
        <a href=''>📧 e_mail</a>
      </div>
      <div className="column">
        <h2>Keep in Touch</h2>
        <ul>
          <li>📧 <a href='emailto:info@isfpegypt.com' >Email Us</a></li>
          <li>☎️ <a href="call:+2034293846">+203 429-3846</a></li>
          <li>📠 <a href="fax:+2034294357">+203 429-4357</a></li>
          <li>🏛️ <a href="">23 H Dr Yehia El Mashad,Smouha, Alexandria, Egypt</a></li>
        </ul>
      </div>
      <p className='copy'>Copyright © 2023 Integrated Solutions for Ports, All rights reserved</p>
    </footer>
  )
}
