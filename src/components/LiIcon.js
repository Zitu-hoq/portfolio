import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function LiIcon({reference}) {
    const {scrollYProgress} = useScroll({
        target: reference,
        offset:["center end", "center center"]
    });
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className="-rotate-90" width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none dark:stroke-primaryDark'/>
            <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark xs:stroke-[3px]'
                style={{pathLength,}}
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
        </svg>
    </figure>
  )
}
