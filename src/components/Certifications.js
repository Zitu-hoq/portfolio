import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import { useData } from "../context/DataContext";
import LiIcon from "./LiIcon";
import Loading from "./Loading";


const Details = ({cert_name, provider, year, location, details, link}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:my-4 md:w-[65%] xs:ml-auto xs:mr-4'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:"spring"}} >
                <h3 className='capitalize font-bold text-2xl md:text-xl xs:text-base'>{cert_name}<br/><a href={link} target="_blank" className='text-primary cursor-pointer capitalize dark:text-primaryDark'>{provider}</a></h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75'>{year} | {location}</span>
                <p className='font-medium w-full xs:font-light'>{details}</p>
            </motion.div>
        </li>
    )
};

function Certifications() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    })

    const { data, loading } = useData();
    if (loading) return <Loading/>;

    const certificates = data.certificationData

  return (
    <div className="mb-64 lg:mb-32 md:mb-16 sm:mb-8">
        <h2 className='font-bold text-8xl mb-32 w-full text-center lg:mt-4 lg:mb-8 lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl xs:mb-4'>Certifications</h2>
        <div ref={ref} className='w-[75%] mx-auto relative md:w-[85%] xs:[95%]'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light xs:w-[3px]'/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-2 sm:ml-1'>
                
                {certificates.slice().reverse().map((certificate, index)=>(
                    <Details
                    key={index}
                    cert_name={`${certificate.full_name}(${certificate.name})`}
                    provider={certificate.provider}
                    year={certificate.year}
                    location={certificate.location}
                    details={certificate.details}
                    link={certificate.link}
                    />
                ))}

                
            </ul>
        </div>
    </div>
  )
}

export default Certifications