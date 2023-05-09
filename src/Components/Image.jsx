import React from 'react'
import { imgEncoded } from '../API'

export const Image = (props) => {
  const path = '/assets/imgs/' + props?.url
  const src = imgEncoded(path)
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
