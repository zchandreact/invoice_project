import React from 'react'
//import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/'],
        ['Invoices', '/invoice'],
        ['Category List', '/category-list'],
        ['Product List', '/product-list'],
        ['Service List', '/service-list'],
        ['Settings', '/Settings'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
  )
}

export default Navbar
