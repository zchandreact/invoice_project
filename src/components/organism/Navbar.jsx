import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/"></Link>
        <Link to="/invoice"></Link>
        <Link to="/category-list"></Link>
        <Link to="/product-list"></Link>
        <Link to="/service-list"></Link>
        <Link to="/settings"></Link>
    </nav>
  )
}

export default Navbar
