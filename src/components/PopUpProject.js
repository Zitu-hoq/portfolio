
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CrossIcon, GithubIcon } from './Icons';


const PopUpProject = ({onClose, project}) => {
    const {type, name, summary, technologies, githubLink, link, img} =project;
  
    return (
    <>
        <div className="top-0 bottom-0 left-0 right-0 fixed flex bg-gray-900 bg-opacity-50 justify-center items-center py-4 z-10 duration-300 opacity-1">
        <motion.div 
        initial={{ opacity: 0, scale: 0.3 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{
            duration: 0.5, 
            ease: "easeInOut", 
        }}
        className='bg-[#ffe0e0] w-[65%] h-[60%] rounded-lg p-10 relative flex flex-col justify-center items-center dark:bg-[#282424]'>
            <div className="grid grid-cols-2 items-center justify-center gap-x-12">
                <button onClick={onClose} className='absolute top-6 right-6 text-2xl text-primary dark:text-primaryDark cursor-pointer'><CrossIcon className="h-5 w-5"/></button>
                <div className='flex items-center justify-center'>
                    <Image src={img} layout='responsive' width={50} height={70} alt='project image' className='rounded-lg'/>
                </div>
                <div className='justify-center'>
                    <div className='text-sm'>{type}</div>
                    <div className='justify-center'>
                        <h3 className='text-lg font-semibold mb-2'>{name}</h3>
                        <p className='text-sm mb-3'>{summary}</p>
                        
                        <p className='mb-4 text-sm font-medium text-primary dark:text-primaryDark'>
                            {technologies.map(technology => (
                            <span key={technology} className='font-sm uppercase rounded-sm tracking-wide bg-dark/20 dark:bg-light/20 p-1 mr-1'>{technology}</span>
                            ))}  
                        </p>

                        <div className='mt-2 flex items-center'>
                            <Link href={githubLink} target='_blank' className='w-10'><GithubIcon/></Link>
                            <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light hover:text-primary hover:bg-light hover:dark:bg-dark hover:dark:text-primaryDark'>Visit Project</Link>
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