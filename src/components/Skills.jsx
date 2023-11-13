import React from 'react'
import github from '../assets/github.png'
import node from '../assets/node.png'
import react from '../assets/React.png'
import python from '../assets/python.png'
import oracle from '../assets/oracle.png'
import spring from '../assets/spring.png'
import mysql from '../assets/mysql.png'
import php from '../assets/php.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-200'>
    <div className='flex flex-col pt-40 items-center w-full h-full'>

        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
        <div>
        <p className=' text-4xl font-bold inline border-b-4 border-yellow-700'>Skills</p>
        <p className='py-4'>These are the some skills that I am most experienced</p>
       
        </div>
        
        </div>
        <div className='max-w-[1000px] w-full px-4 pt-4 text-center grid grid-cols-2 sm:grid-cols-4 gap-8'>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={github}></img>
<a  >Github</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={python}></img>
<a  >Python</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={oracle}></img>
<a  >Oracle</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={spring}></img>
<a  >Spring</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={react}></img>
<a  >React</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={node}></img>
<a  >Node.js</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={mysql}></img>
<a  >MySql</a>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
<img className='w-20 mx-auto' src={php}></img>
<a  >PHP</a>
</div>

        </div>
    </div>
</div>
  )
}

export default Skills