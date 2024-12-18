import React from 'react'

export default function Layout({children, className=""}) {
  return (
    <div className={`w-full h-full z-0 bg-light p-32 dark:bg-dark ${className}`}>
        {children}
    </div>
  )
}
