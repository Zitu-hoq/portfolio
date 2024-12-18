import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const sentenceAnimate= {
    initial:{
        opacity: 1,
    },
    animate:{
        opacity:1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
};

const wordAnimate= {
    initial:{
        opacity: 0,
        y: 50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration: 1
        }
    }
};

export function AnimatedNumbers ({value}){
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])
    useEffect(()=>{
        springValue.on('change', (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return(
        <span ref={ref}></span>
    )
};

export default function AnimatedText({text, className=""}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`} variants={sentenceAnimate} initial="initial" animate="animate">
        {
            text.split(" ").map((word, index) =>
            <motion.span key={word+'-'+index} className='inline-block' variants={wordAnimate}>
                {word}&nbsp;
            </motion.span>)
        }
        </motion.h1>
    </div>
  )
}
