import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import { useData } from "../context/DataContext";
import LiIcon from "./LiIcon";
import Loading from "./Loading";


const Details = ({cert_name, provider, year, location, details, link}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:"spring"}} >
                <h3 className='capitalize font-bold text-2xl'>{cert_name}<br/><a href={link} target="_blank" className='text-primary cursor-pointer capitalize dark:text-primaryDark'>{provider}</a></h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75'>{year} | {location}</span>
                <p className='font-medium w-full'>{details}</p>
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
    <div className="mb-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Certifications</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                
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