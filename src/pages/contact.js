import Head from 'next/head';
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import TransitionEffect from '../components/TransitionEffect';
import Layout from './../components/Layout';

const contact = () => {
  return (
    <>
        <Head>
            <title>Contact Page</title>
            <meta name="description" content='all about me' />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text={"Connection is everything!"} className='mb-16'/>
                
                
            </Layout>
        </main>
    </>
  )
}

export default contact