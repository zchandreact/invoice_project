import React from 'react'
import { Link } from 'react-router-dom'

function BrandIcon() {

  let logoStyle = "h-[80px] block rounded-full"

  return (
    <div className='site-logo w-[80px] object-contain'>
      <Link className='flex items-center gap-3' to="/">
        <img className={logoStyle} src='/Images/logo.jpeg' alt='Brand-icon' />
        <span>Invoice</span>
      </Link>
    </div>
  )
}

export default BrandIcon
