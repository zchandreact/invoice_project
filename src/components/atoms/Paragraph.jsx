import React from 'react'

function Paragraph({ children, cname }) {

  return (
    <p className={`text-red-300 ${cname}`}>{children}</p>
  )
}

export default Paragraph
