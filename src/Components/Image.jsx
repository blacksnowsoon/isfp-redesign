import React from 'react'

export const Image = (props) => {
  const path = '/assets/imgs/' + props?.url
  const src = new URL(path, import.meta.url).href
  return (
    props.containerClassName ? 
    <div className={props.containerClassName}>
      <img 
        loading="lazy"
        className={props?.className}
        src={src} 
        alt={props?.alt} 
        title={props?.title} />
    </div>
    :
    <img 
      loading="lazy"
      className={props?.className}
      src={src} 
      alt={props?.alt} 
      title={props?.title} />
  )
}
