import Image from 'next/image';
import React from 'react';



const Images = ({profilePicDark, profilePicLight})=>{
  
  return (

    <div>
        <Image src={profilePicDark} layout='responsive' width={100} height={100} alt="developer image" className='w-full h-auto hidden rounded-2xl dark:block'/>
        <Image src={profilePicLight} layout='responsive' width={100} height={100} alt="developer image" className='w-full h-auto rounded-2xl dark:hidden'/>
    </div>
    )
}
export default Images;
