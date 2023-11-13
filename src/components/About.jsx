import React from 'react'
import {FaSchool} from 'react-icons/fa'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className=' pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-yellow-700'>About</p>
                </div>
                
             
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
                 
                 <div className='px-4 text-4xl font-bold'>
                    <p className=''>Some informaitons about me.</p>
                  
                 </div>
            
                 <div className='text-center'>
                <div><p className=' text-4xl  font-bold'>Education</p> </div>

                 </div>
                
                 <div>
                    <p className='px-4 '>I've interned at prominent companies including Ata Holding/Tıkla Gelsin, Amadeus, and MetalMaker3D, where I engaged with cutting-edge technologies to develop practical software solutions. At Ata Holding/Tıkla Gelsin, I utilized Node.js and MySQL for efficient website data management. Amadeus saw me contributing to a Spring Boot project logging Web Services interactions into an Oracle database.
                     My recent role at MetalMaker3D involved hands-on work with Python GTK GUI and React.js, contributing to the development of 3D printing software. Initially I am working with Amadeus as a part-time Software Developer.</p>
                
                 </div>
                 <div>
                 <div className='text-center'>
                  
                    <p  className='justify-center items-center flex px-4 text-2xl font-bold'><FaSchool className='mr-2 text-yellow-600'/>Bahcesehir University</p>
                    <p className='px-10 font-bold'>2019-2024(ongoing)</p>
                    <p className='px-10 font-bold'>Bachelor Student in Software Engineering  3.32 GPA </p>
                    </div>
                    <div className='py-5 text-center'>
                    <p  className='justify-center items-center flex px-4 text-2xl font-bold'><FaSchool className='mr-2 text-yellow-600'/>Bahcesehir University</p>
                    <p className='px-10 font-bold'>2019-2023</p>
                    <p className='px-10 font-bold'>Bachelor Student in Electrical and Electronics Engineering 3.01 GPA </p>
                    </div>
                    </div>
                 </div>
           
        </div>

    </div>
  )
}

export default About