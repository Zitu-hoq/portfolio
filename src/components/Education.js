import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import LiIcon from "./LiIcon";


const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:my-4 md:w-[65%] xs:ml-auto xs:mr-4'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:"spring"}} >
                <h3 className='capitalize font-bold text-2xl md:text-xl'>{type}</h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75'>{time} | {place}</span>
                <p className='font-medium w-full xs:font-light'>{info}</p>
            </motion.div>
        </li>
    )
};

function Education() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "start start"]
    })

  return (
    <div className="my-32">
        <h2 className='font-bold text-8xl mb-32 w-full text-center lg:mb-8 lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>Educations</h2>
        <div ref={ref} className='w-[75%] mx-auto relative md:w-[85%]'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light xs:w-[3px]'/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-2 sm:ml-1'>
                
                <Details 
                    type="Bachelor Of Science In Computer Science"
                    time="2019-2024"
                    place="Faridpur Engineering College, Faridpur"
                    info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />
                <Details 
                    type="Higher Secondary School Certificate"
                    time="2016-2018"
                    place="Cantonment College, Cumilla"
                    info="Relevant courses included Physics, Chemistry, Biology, Higher Mathematics, and Computer Science basics."
                />
                <Details 
                    type="Secondary School Certificate"
                    time="2016"
                    place="Thakurgaon Govt. Boys High School, Thakurgaon"
                    info="Relevant courses included General Science, Mathematics, Physics, Chemistry, and Biology fundamentals."
                />
            </ul>
        </div>
    </div>
  )
}

export default Education;