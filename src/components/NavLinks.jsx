import { Link } from 'react-router-dom'
import React from 'react'

const NavLinks = ({href, name}) => {
  return (
    <>
      <Link to={href}>{name}</Link>
    </>
  )
}

export default NavLinks
