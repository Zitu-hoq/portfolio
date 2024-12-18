import Link from 'next/link'
import React from 'react'
import { HireMeIcon } from './Icons'

export default function HireMe() {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <HireMeIcon className={"fill-dark animate-spin-slow dark:fill-light"} />
            <Link href="mailto:zhzitu121@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}