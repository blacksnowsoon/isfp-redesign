import React, { useCallback, useEffect, useRef } from 'react'
import { SectionTitle } from '../../Components/SectionTitle'
import { Image } from '../../Components/Image'
import { Button } from '../../Components/Button'




export const NewsSection = ({news}) => {
  const listRef = useRef()

  const handleExtendText = (e)=>{
    const target = e.target
    const listFullHeight = listRef.current.scrollHeight
    let listCurrentHeight = listRef.current.offsetHeight
    if (listCurrentHeight < listFullHeight) {
      listCurrentHeight += 500
      listRef.current.style.height = listCurrentHeight+ "px"
      if (listCurrentHeight >= listFullHeight) {
        listRef.current.classList.toggle("shadow")
        target.innerText = "-"
      }
    } else {
      listRef.current.style.height = "var(--news-height)"
      listRef.current.classList.toggle("shadow")
      target.innerText = "+"
    }
    e.preventDefault()
  }
  useEffect(()=>{
  }, [])
  return (
    <section id='news&events' className='container news'>
      <SectionTitle className='sec-title' caption={"News & Events"} />
      <ul ref={listRef} className='news-wrapper shadow'>
        {
          news.map((event, index) => {
          
            return <EventSlide index={news.length-index} event={event} key={Math.random() + event.title.slice(0,6)}/>
          })
        }
        
      </ul>
      <div className='btn-wrapper'><Button caption={"+"} className={"btn-exetend"} event={handleExtendText} /></div>
    </section>
  )
}


const EventSlide = ({event, index}) => {
  const style = {
    zIndex : index
  }
  return (
    <li className='news-card' style={style}>
      <div className='thumbnail'>
      <Image 
        className={"img-container"} 
        url={`news/${event.thumbnail}`} 
        alt={event.title}/>
      <small><i>In {event.date} </i>{event.title}</small>
      </div>
      
      <div className='content'>
        <h3>{event.title}</h3>
        
        <p className='text-justify'>{event.overview}</p>
        <p className='text-justify'>{event.subject}</p>
      </div>
    </li>
  )
}