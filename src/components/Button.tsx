// import Link from 'next/link';
import React from 'react'

interface ButtonProps{
    btnText: string;
    bgColor: string;
    onClickFunc?: () => void;
}

const Button = ({btnText, bgColor, onClickFunc}: ButtonProps) => {
  return (
    <div>
      {/* <Link href={`/${link}`}> */}
      <button
       className={`py-3 px-6 ${bgColor} text-white text-xs rounded-md`} 
      onClick={onClickFunc}
      >{btnText}</button>
      {/* </Link> */}
    </div>
  )
}

export default Button
