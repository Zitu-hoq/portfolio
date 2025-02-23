import { GoogleTagManager } from '@next/third-parties/google'
import React from 'react'

export default function Layout({children, className=""}) {
  return (
    <>
      <div className={`w-full h-full z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
    <GoogleTagManager gtmId="G-XVQ6SQX3VQ" />
    </>
    
  )
}
