
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CrossIcon, GithubIcon } from './Icons';


const PopUpProject = ({onClose, project}) => {
    const {type, name, summary, technologies, githubLink, link, img} =project;
  
    return (
    <>
        <div className="top-0 bottom-0 left-0 right-0 fixed flex bg-gray-900 bg-opacity-50 justify-center items-center py-4 z-10 duration-300 opacity-1 lg:py-3 md:py-2">
        <motion.div 
        initial={{ opacity: 0, scale: 0.3 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{
            duration: 0.5, 
            ease: "easeInOut", 
        }}
        className='bg-[#ffe0e0] w-[65%] h-[60%] rounded-lg p-10 relative flex flex-col justify-center items-center dark:bg-[#282424] lg:w-[80%] lg:h-[65%] xs:p-4 xs:h-[55%] xs:w-[90%]'>
            <div className="grid grid-cols-2 items-center justify-center gap-x-12 lg:gap-x-6 md:grid-cols-1">
                <button onClick={onClose} className='absolute top-6 right-6 text-2xl text-primary dark:text-primaryDark cursor-pointer md:top-3 md:right-3'><CrossIcon className="h-5 w-5 md:h-4 md:w-4"/></button>
                <div className='flex items-center justify-center md:mb-1'>
                    <Image src={img} layout='responsive' width={50} height={70} alt='project image' className='rounded-lg'/>
                </div>
                <div className='justify-center'>
                    <div className='text-sm'>{type}</div>
                    <div className='justify-center'>
                        <h3 className='text-lg font-semibold mb-2 sm:text-base'>{name}</h3>
                        <p className='text-sm mb-3 lg:mb-2 sm:text-xs'>{summary}</p>
                        
                        <p className='mb-4 text-xs font-medium text-primary dark:text-primaryDark xs:flex xs:flex-wrap'>
                            {technologies.map(technology => (
                            <span key={technology} className='font-sm uppercase rounded-sm tracking-wide bg-dark/20 dark:bg-light/20 p-1 mr-1 lg:p-0 md:p-1 sm:p-0 xs:mb-1'>{technology}</span>
                            ))}  
                        </p>

                        <div className='mt-2 flex items-center md:justify-between'>
                            <Link href={githubLink} target='_blank' className='w-10 md:order-2 md:w-8'><GithubIcon/></Link>
                            <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light hover:text-primary hover:bg-light hover:dark:bg-dark hover:dark:text-primaryDark md:order-1 md:m-0 md:px-4 md:text-base sm:px-3 sm:p-1 sm:text-sm'>Visit Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default PopUpProject;