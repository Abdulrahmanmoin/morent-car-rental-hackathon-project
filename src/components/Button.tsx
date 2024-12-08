import React from 'react'

interface ButtonProps{
    btnText: string;
    bgColor: string;
}

const Button = ({btnText, bgColor}: ButtonProps) => {
  return (
    <div>
      <button className={`py-3 px-6 ${bgColor} text-white text-xs rounded-md`}>{btnText}</button>
    </div>
  )
}

export default Button
