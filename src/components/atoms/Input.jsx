import React from 'react'

function Input({inputType, inputLength, require, placeholder, inputId, cname}) {

  return (
    <input id={inputId} type={inputType} maxLength={inputLength} placeholder={placeholder} className={`text-red-600 ${cname}`}  />
  )
}

export default Input
