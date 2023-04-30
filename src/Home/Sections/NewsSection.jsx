import React from 'react'

export const NewsSection = ({news}) => {
  return (
    <section id='news&events' className='container'>
      <h1 className='sec-title'>News & Events</h1>
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
  const img = new URL(`../../../assets/imgs/news/${event.thumbnail}`, import.meta.url).href
  return (
    <li >
      <div className='news-slide'>
        <div className='img'>
          <img src={img} alt={event.title} />
          <i>In {event.date} </i>
        </div>
        <div className='content'>
          <h2>{event.title}</h2>
          <p>{event.overview}</p>
        </div>
      </div>
    </li>
  )
}