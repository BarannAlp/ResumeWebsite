import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#0a192f]'> 
    {/*Container */}
<div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-white'> Welcome to my Website! I am,</p>
<h1 className='text-4xl sm:text-7xl font-bold text-yellow-600'>Baran Alp Oduncu</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-yellow-800'>I am a Full Stack Developer,</h2>
<p className='text-white py-4 max-w-[700px]'>I hold a Bachelor's degree in Electrical and Electronic Engineering and am completing an additional major in Software Engineering at Bahcesehir University. 
  My academic journey equips me with strong engineering fundamentals,
   while my passion for technology drives my focus on software development to apply creative and problem-solving skills.</p>
<div>
  
<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'> View Work
<span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3 hover'/>  </span></button>

</div>
</div>

    </div >
  )
}

export default Home