import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavigationLink = (props) => {
  return (
    <NavLink
    to={props?.to}
    className={props?.className}>
      {
        props?.caption
      }
    </NavLink>
  )
}
