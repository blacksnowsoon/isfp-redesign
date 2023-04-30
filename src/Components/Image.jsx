import React from 'react'

export const Image = (props) => {
  const path = '../assets/imgs/' + props?.url
  const src = new URL(path, import.meta.url).href
  return (
    <div className={props.containerClassName}>
      <img 
        className={props?.className}
        src={src} 
        alt={props?.alt} 
        title={props?.title} />
    </div>
    
  )
}
