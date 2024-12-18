import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
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

export const NavBar = () => {
  
  const [mode, setMode] = useThemeSwitcher();
  
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            
        </nav>
        <nav className='flex item-center justify-center flex-wrap dark:text-light'>
            <motion.a href="https://github.com/Zitu-hoq" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3"><GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/zitu-hoq/" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6 mx-3"><LinkedInIcon/></motion.a>
            <button onClick={()=>setMode((mode=="light") ? "dark": "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode=="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              {
                mode=="dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
              }
            </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div> 
    </header>
  )
}
