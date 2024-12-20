import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'




const CustomLink = ({href, title, className=""})=>{

  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group dark:text-light`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router.asPath== href ? "w-full" : "w-0"}`}>&nbsp;</span>
    </Link>
  );
}

const CustomMobileLink = ({href, title, className="", toggle})=>{

  const router = useRouter();
  const handleClick = () =>{
    toggle();
    router.push(href);
  }
  return(
    <button href={href} className={`${className} relative group my-2 text-light dark:text-dark`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath== href ? "w-full" : "w-0"}`}>&nbsp;</span>
    </button>
  );
}

export const NavBar = () => {
  
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }
  
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8'>

    <button className='flex-col justify-center items-center hidden lg:flex md:fixed' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-1'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>

        {/* desktop navbar */}
        <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            
        </nav>
        <nav className='flex item-center justify-center flex-wrap dark:text-light'>
            <motion.a href="https://github.com/Zitu-hoq" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3"><GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/zitu-hoq/" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3"><LinkedInIcon/></motion.a>
            <button onClick={()=>setMode((mode=="light") ? "dark": "light")} className={`ml-3 -mt-1 flex items-center justify-center rounded-full p-1 ${mode=="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              {
                mode=="dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
              }
            </button>
        </nav>
        </div>


        {/* mobile navbar */}
        {
          isOpen?
          <motion.div
          initial={{scale: 0, opacity:0, x: "-50%", y:"-50%"}}
          animate={{scale:1, opacity:1}} 
          className='min-w-[70vw] flex flex-col justify-between items-center z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
            
        </nav>
        <nav className='flex item-center justify-center flex-wrap dark:text-light mt-2'>
            <motion.a href="https://github.com/Zitu-hoq" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3 text-light dark:text-dark"><GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/zitu-hoq/" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3"><LinkedInIcon/></motion.a>
            <button onClick={()=>setMode((mode=="light") ? "dark": "light")} className={`ml-3 -mt-1 flex items-center justify-center rounded-full p-1 ${mode=="light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
              {
                mode=="dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
              }
            </button>
        </nav>
        </motion.div>

          : null
        }
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div> 
    </header>
  )
}
