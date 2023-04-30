import React from 'react'
import { SectionTitle } from '../../Components/SectionTitle'
import { Image } from '../../Components/Image'
export const NewsSection = ({news}) => {
  return (
    <section id='news&events' className='container'>
      <SectionTitle className='sec-title' caption={"News & Events"} />
      <ul className='news-wrapper'>
        {
          news.map(event => {
            return <EventSlide event={event} key={Math.random() + event.title.slice(0,6)}/>
          })
        }
      </ul>
    </section>
  )
}


const EventSlide = ({event}) => {
  return (
    <li >
      <div className='news-slide'>
        
        <Image 
          containerClassName={"img"} 
          url={`news/${event.thumbnail}`} 
          alt={event.title}/>
          
        <div className='content'>
          <h2>{event.title}</h2>
          <i>In {event.date} </i>
          <p>{event.overview}</p>
        </div>
      </div>
    </li>
  )
}