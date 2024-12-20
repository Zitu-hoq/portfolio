import Head from 'next/head'
import React from 'react'

import AnimatedText, { AnimatedNumbers } from '../components/AnimatedText'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Images from '../components/Images'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Skills from '../components/Skills'
import Tape from '../components/Tape'
import TransitionEffect from '../components/TransitionEffect'
import { useData } from '../context/DataContext'




export default function About() {
    
    const { data, loading } = useData();
    if (loading) return <Loading/>;

    const pageData = data.aboutPage[0]
    const {title, biography, proPic, proPicDark, total_project, experience} = pageData;

    return (
    <>
        <Head>
            <title>About Page</title>
            <meta name="description" content='all about me' />
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text={title} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg md:text-center md:w-full font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium'>
                        Hi, I&apos;m
                        <span className='font-bold text-primary dark:text-primaryDark text-base'>&nbsp;Md Ziaul Hoque Zitu,&nbsp;</span>
                        {biography[0]}
                        </p>
                        <p className='my-4 font-medium'>
                        {biography[1]}
                        </p>
                        <p className='font-medium'>
                        {biography[2]}
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:cols-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                  
                    <Images profilePicDark={proPicDark} profilePicLight={proPic} />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block items-end text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={total_client}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        </div> */}
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block items-end text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={total_project}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block items-end text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={experience}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>
                    </div>
                    
                </div>
                <Skills/>
                <Tape/>
                {/* <Experiences/> */}
                <Certifications/>
                <Education/>
            </Layout>
        </main>
    </>
  )
}
