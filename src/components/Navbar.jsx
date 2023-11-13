import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import Logo from "../assets/computer-me.png"
import {HiOutlineMail} from 'react-icons/hi'

import {BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
  const [IsNav,setIsNav]=useState(false);
  const handleClick = () => setIsNav(!IsNav)
  return (
<div class='text-gray-300 text-2xl fixed top-0 w-full h-20 flex justify-between items-center px-4 bg-[#060c16]'>
<div>
<img  alt="Logo Image" style={{width: '50px'}}/>
</div>
{/* Pages */}
  <ul className='hidden md:flex'>
    <li>Home</li>
    <li>About</li>
    <li>Experience</li>
    <li>Projects</li>
  </ul>

{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
{!IsNav ? <FaBars/ > : <FaTimes/> }
</div>

{/* Mobile */}

  <ul className={!IsNav ?'hidden' :'md:hidden absolute top-0 left-0 w-80 h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
    <li className='py-6 text-3xl'>Home</li>
    <li className='py-6 text-3xl'>About</li>
    <li className='py-6 text-3xl'>Experience</li>
    <li className='py-6 text-3xl'>Projects</li>
  </ul>


{/* Icons */}

<ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-blue-600'> <a className='flex justify-between items-center w-full text-gray-300' hrefLang='' >LinkedIn<FaLinkedin size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-black'> <a className='flex justify-between items-center w-full text-gray-300' hrefLang='' >GitHub<FaGithub size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-yellow-500'> <a className='flex justify-between items-center w-full text-gray-300' hrefLang='' >Resume<BsFillPersonLinesFill size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-red-600'> <a className='flex justify-between items-center w-full text-gray-300' hrefLang='' >Email<HiOutlineMail size={30}/></a></li>
</ul>

</div>

  )
}

export default Navbar