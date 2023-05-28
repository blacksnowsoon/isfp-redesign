import { useEffect, useRef } from 'react'

export const UseOutSideClick = (callback) => {
  const ref = useRef();

  useEffect(()=>{
    const handelClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
      console.log("log from useOutSideClick", ref.current)
      console.log("log from useOutSideClick", e.target)
    }
    document.addEventListener('click', handelClick, true);

    return () => {
      document.removeEventListener('click', handelClick, true)
    }
  },[ref])
  return ref;
}
