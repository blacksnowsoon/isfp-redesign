import React from "react";

export const Button = (props) => {
  return (
    <button 
    ref={props?.reference}
    title={props?.title}
    className={props.className} 
    onClick={props.event}
    aria-label={props?.ariaLabel}>
      {
      props.caption
      
      }
    </button>
  )
};
