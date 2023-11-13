import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import Logo from "../assets/computer-me.png"
import resume from "../assets/resume.pdf"
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'

import {BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
  const [IsNav,setIsNav]=useState(false);
  const handleClick = () => setIsNav(!IsNav) 

  return (
<div class='text-gray-300 text-2xl fixed top-0 w-full  flex justify-between items-center pr-4 bg-[#060c16]'>
<img className='mt-[-25px]' src={Logo} alt="Logo Image" style={{width: '120px'}}/>
{/*Mobile Icons */}

<ul className=' flex md:hidden  flex-row top-[0] '>
  <li className=' h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-blue-700'> <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/barannalp/' ><FaLinkedin size={30}/></a></li>
  <li className=' h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-black'> <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/barannalp' ><FaGithub size={30}/></a></li>
  <li className=' h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-yellow-600'> <a className='flex justify-between items-center w-full text-gray-300' href={resume} download><BsFillPersonLinesFill size={30}/></a></li>
  <li className=' h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-red-700'> <a className='flex justify-between items-center w-full text-gray-300' href='mailto:baranalpod@gmail.com' ><HiOutlineMail size={30}/></a></li>
</ul>

{/* Pages */}
  <ul className='hidden md:flex'>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link to="home" smooth={true} duration={500} >Home</Link></li>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link  to="about"  smooth={true}  duration={500}>  About </Link> </li>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link to="experiences" smooth={true} duration={500} >Experiences</Link></li>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link to="projects" smooth={true} duration={500} >Projects</Link></li>
    <li className=' hover:bg-gray-600 rounded-md hover:text-white transition duration-300 ease-in-out'><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
  </ul>

{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
{!IsNav ? <FaBars/ > : <FaTimes/> }
</div>

{/* Mobile */}

<ul className={!IsNav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-80 h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <li className='py-6 text-3xl ' ><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
      <li className='py-6 text-3xl' ><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
      <li className='py-6 text-3xl' ><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills </Link></li>
      <li className='py-6 text-3xl' ><Link onClick={handleClick} to="experiences" smooth={true} duration={500}>Experiences</Link></li>
      <li className='py-6 text-3xl' ><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li className='py-6 text-3xl' ><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
    </ul>


{/* Icons */}

<ul className=' hidden md:flex fixed flex-col top-[35%] left-0'>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-blue-700'> <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/barannalp/' >LinkedIn<FaLinkedin size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-black'> <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/barannalp' >GitHub<FaGithub size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-yellow-600'> <a className='flex justify-between items-center w-full text-gray-300' href={resume} download >Resume<BsFillPersonLinesFill size={30}/></a></li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-red-700'> <a className='flex justify-between items-center w-full text-gray-300' href='mailto:baranalpod@gmail.com' >Email<HiOutlineMail size={30}/></a></li>
</ul>


</div>

  )
}

export default Navbar