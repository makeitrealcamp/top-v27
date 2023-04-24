import React, { SyntheticEvent } from "react"

type ButtonProps = {
  title?: string
  children: React.ReactNode,
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = (props: ButtonProps) => {
  const { type, children } = props

  const handleClick = (event: SyntheticEvent) => {
    console.log('Click');
  }

  return (
    <button 
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button