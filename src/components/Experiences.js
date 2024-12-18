import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import LiIcon from "./LiIcon";
import { ExperienceData } from "./ProjectData";


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:"spring"}} >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75'>{time} | {address}</span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    )
};

function Experiences() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    })

  return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experiences</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                
                {ExperienceData.slice().reverse().map((job, index)=>(
                    <Details
                    key={index}
                    position={job.position}
                    company={job.company_name}
                    time={`${job.starting_time}-${job.ending_time}`}
                    address={job.job_location}
                    work={job.work_summary}/>
                ))}

                
            </ul>
        </div>
    </div>
  )
}

export default Experiences