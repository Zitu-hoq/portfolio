import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()}&copy;All Rights Reserved</span>
            <div className='flex items-center lg:py-2'>
                Build With <span className='text-primary text-2xl px-1 dark:text-primaryDark'> &#9825;</span>by&nbsp;
                <Link href="/" className='underline underline-offset-2' target={'_blank'}>Zitu Hoque</Link>
            </div>
            
            <Link href="/" className='underline underline-offset-2' target={'_blank'}>Say hello</Link>
        </Layout>
    </footer>
  )
}
