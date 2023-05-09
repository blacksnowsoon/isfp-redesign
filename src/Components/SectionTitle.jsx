import React from 'react'

export const SectionTitle = (props) => {
  return (
    <h2 
      className={props?.className} 
      aria-label={props?.ariaLable}
    >
      {
        props?.caption
      }
    </h2>
  )
}
