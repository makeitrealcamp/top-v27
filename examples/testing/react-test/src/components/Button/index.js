import React from 'react'

export function Button({ children, type }) {
  return (
    <button
      type={type}
      data-testid="button" 
    >
      {children}
    </button>
  )
}