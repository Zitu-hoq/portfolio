import { easeInOut, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import PopUpProject from '../components/PopUpProject';

import Loading from '../components/Loading';
import TransitionEffect from '../components/TransitionEffect';
import { useData } from '../context/DataContext';
import { ArrowIcon } from './../components/Icons';


const Projects = () => {
    

    const[show_details, setShow_details]=useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterKey, setFilterKey] = useState("All");
    const [activeButton, setActiveButton] = useState("All"); 
    
    const { data, loading } = useData();
    if (loading) return <Loading/>;
    const ProjectData = data.projects;

    const catagory = ["All", "Web", "App", "Cyber"];

    const handleClick=(project)=>{
        setSelectedProject(project);
        setShow_details(true);
        
    }
    
    const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setFilterKey(buttonName); 
    };

    const filteredProjects = (filterKey === "All")? ProjectData : ProjectData.filter((project) => project.type === filterKey.toLowerCase());


  return (
    <div>
        <div className='flex text-black text-lg justify-center items-center gap-x-3 mb-8 dark:text-light xs:text-base' >
        {catagory.map((buttonName) => (
            <button
            key={buttonName}
            className={`cursor-pointer px-2 py-2 font-semibold rounded-lg border-2 border-primary dark:border-primaryDark md:px-1 md:py-1 
            ${ activeButton === buttonName ? "bg-primary text-light dark:bg-primaryDark dark:text-dark" : "bg-transparent  text-primary dark:text-primaryDark"}`}
            onClick={() => handleButtonClick(buttonName)}>
                {buttonName}
            </button>
      ))}
        </div>
        <motion.div key={filterKey} 
        initial={{opacity: 0, y:-30}}
        animate={{opacity:1, y:0}}
        tranition={{duration:3, ease: easeInOut}}
        className='grid grid-cols-3 gap-[1.8rem] text-dark justify-center pt-4 dark:text-light md:grid-cols-2 xs:grid-cols-1'>
        
            {filteredProjects.map(project=>(
                <div key={project.id} className='bg-[#e2d6d6] p-6 rounded-lg dark:bg-[#322f2f] lg:p-4'>
                <Image src={project.img} alt="demo" height={500} width={500} className='rounded-lg mb-4 h-[75%] w-[100%] lg:mb-2' />
                <h3 className='mb-2 text-lg font-semibold lg:mb-1 md:text-base sm:text-sm'>{project.name}</h3>
                <button onClick={()=>handleClick(project)} className='flex w-25 text-primary text-sm font-semibold items-center gap-x-1 cursor-pointer hover:translate-x-1 dark:text-primaryDark sm:text-xs'> Project Details <ArrowIcon className="h-4 w-4 text-primary dark:text-primaryDark md:h-3 md:w-3"/> </button>
                
            </div>
            
            ))}

            {show_details && selectedProject &&  
            <PopUpProject onClose={() => setShow_details(false)} 
             project={selectedProject}
             />}
            

        </motion.div>
    </div>
  )
}



export default function projects() {
    
  return (
    <>
        <Head>
            <title>Project Page</title>
            <meta name="description" content='all about me' />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text={"Creativity Outshines Facts!"} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

                <Projects/>
            </Layout>
        </main>
    </>
  )
}
