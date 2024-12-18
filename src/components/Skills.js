import { motion } from 'framer-motion';
import React from 'react';
import { useData } from '../context/DataContext';
import CircularProgressBar from './CircularProgressBar';
import Loading from './Loading';
import { Pro_Skill } from './ProjectData';

const ProgressBar=({title, progress})=>{
  return(
    <>
      <div className="flex w-full justify-between mb-1">
        <span className="text-base uppercase font-medium text-dark dark:text-light">{title}</span>
        <span className="text-base font-medium text-dark dark:text-light">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700">
        <motion.div
          className="bg-primary h-2.5 rounded-full dark:bg-primaryDark"
          initial={{width: 0}}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 3 }} 
        />
      </div>
    </>
  );
}



export default function Skills() {

  const { data, loading } = useData();
  if (loading) return <Loading/>;

  const App_Skill=data.app_skill;
  const Cy_Skill=data.cyber_skill;
  
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 mb-16 w-full text-center'>Skills</h2>
        <div className='flex w-full h-screen relative items-center justify-center'>
        
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-6'>
              <div className='w-full flex flex-col items-center justify-center p-6 relative'>
                <h3 className='mb-4 text-lg text-center font-bold uppercase text-dark/75 dark:text-light/75'>Web Developement</h3>

                {App_Skill.map((framwork, index) =>(
                  <ProgressBar key={index} title={framwork.frameworkName}
                  progress={framwork.progress}/>
                ))}

              </div>
            </div>

            <div className='col-span-6'>
              <div className='w-full flex flex-col items-center justify-center p-6 relative'>
                <h3 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Cyber Security</h3>
                
                {Cy_Skill.slice().reverse().map((framwork, index) =>(
                  <ProgressBar key={index} title={framwork.frameworkName}
                  progress={framwork.progress}/>
                ))}

              </div>
            </div>

            <div className='col-span-12'>
              <div className='w-full flex flex-col items-center justify-center p-6 relative'>
                <h3 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Professional Skills</h3>
                <div className='w-full flex flex-row justify-center items-center'>
                
                {Pro_Skill.map((framwork, index) =>(
                  <CircularProgressBar key={index} title={framwork.framework_name}
                  progress={framwork.progress}/>
                ))}

                </div>
                
                
              </div>
            </div>

          </div>
        </div>
    </>
  )
}
