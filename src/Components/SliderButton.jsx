import React from 'react'

export const SliderButton = (props) => {
  return (
    <div  className='range-btn'>
      <input 
      type='range'
      step={1}
      min={0}
      defaultValue={props?.value}
      max={1}
      onClick={props?.onClickEvent}
      onChange={props?.onChangeValue}
    />
    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
      <path d="m20.042 38.792-5.625-5.459h-7.75v-7.75L1.125 20l5.542-5.583v-7.75h7.75l5.625-5.542 5.541 5.542h7.75v7.75L38.875 20l-5.542 5.583v7.75h-7.75Zm0-8.25q4.375 0 7.437-3.084 3.063-3.083 3.063-7.5 0-4.375-3.063-7.437-3.062-3.063-7.437-3.063-4.417 0-7.5 3.063-3.084 3.062-3.084 7.437 0 4.417 3.084 7.5 3.083 3.084 7.5 3.084ZM20 27.792q-3.208 0-5.5-2.292T12.208 20q0-3.25 2.292-5.521t5.5-2.271q3.25 0 5.521 2.271T27.792 20q0 3.208-2.271 5.5T20 27.792Z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
      <path d="m20.042 38.792-5.625-5.459h-7.75v-7.75L1.125 20l5.542-5.583v-7.75h7.75l5.625-5.542 5.541 5.542h7.75v7.75L38.875 20l-5.542 5.583v7.75h-7.75Zm-.084-8.25q4.5 0 7.542-3.063 3.042-3.062 3.042-7.521 0-4.416-3.063-7.5-3.062-3.083-7.521-3.083-1.083 0-2.146.229-1.062.229-2.187.729 2.792 1.334 4.5 3.938 1.708 2.604 1.708 5.687 0 3.125-1.708 5.73-1.708 2.604-4.5 3.937 1 .458 2.083.687 1.084.23 2.25.23Z"/>
    </svg>
    
    
    </div>
    
  )
}
