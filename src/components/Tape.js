import { motion } from 'framer-motion';
import React, { Fragment } from 'react';




export default function Tape() {


    const words=[
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "Scalable",
        "User Friendly",
        "Responsive",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable",
    ];
    
  return (
    <div className='py-16 overflow-x-clip -mx-32 lg:-mx-24 md:-mx-16 sm:-mx-8 lg:py-12 md:py-8 sm:py-4'>
    <div className='bg-gradient-to-r from-[#e15858] to-[#c13d9e] dark:from-emerald-300 dark:to-sky-400 -rotate-3 -mx-1'>
    <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <motion.div className='flex flex-none py-3 gap-4 pr-4 lg:py-2 md:gap-2 md:py-1 sm:py-0'
        animate={{
            x: ["0%", "-50%"],
        }}
        transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
        }}>
            {[...new Array(2)].fill(0).map((_, idx)=>(
                <Fragment key={idx}>
                {words.map(word => (
                <div key={word} className='inline-flex gap-4 py-3 items-center md:py-2 sm:py-1 md:gap-2'>
                    <span className='text-gray-900 text-sm uppercase font-extrabold md:text-xs'>{word}</span>
                    <span>&#9733;</span>
                </div>
            ))}
                </Fragment>
            ))}
        </motion.div>
        </div>
        </div>
    </div>
  )
}
