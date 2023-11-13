import React,{useState} from 'react'
import amadeus from '../assets/amadeus.png'
import tiklagelsin from '../assets/tikla-gelsin.png'
import metalmaker from '../assets/metalmaker.png'
import Card from './CardExperience.jsx'

const Projects = () => {
    const [Text,setText]=useState(null);
    const handleClick = (textIdentifer) => {
        setText(textIdentifer)
      };
    const amadeusText='During my time as a Software Developer at Amadeus, I undertook a Spring Boot Project focused on enhancing web service management. My task was to develop a system using Java Spring Boot and REST APIs that could efficiently log both incoming requests and outgoing responses. These interactions were then securely stored in an Oracle database for future reference. The integration of Oracle ensured data integrity and scalability, while Tomcat facilitated smooth deployment. This experience highlights my ability to architect comprehensive solutions by effectively leveraging diverse technologies. Initially I am working as a part-time Software Developer at Amadeus'
    const metalmakerText='Developed two impactful React web applications: a dynamic internal company app for streamlined processes and communication, and a real-time machine control app for remote operations. Collaborated with hardware engineers and UI/UX designers for seamless integration. Also contributed to Python-based Raspberry Pi GUI, enabling user interaction  with our product machines through the web app. Used Tech: React.js,TailWind, SupaBase, GTK, Python, RaspBerry Pi, Arduino' 
    const tiklagelsinText =''
    
  return (
    <div name='experiences'  className='w-full md:h-screen bg-[#0a192f] text-gray-200'>
      <div className='flex flex-col pt-40 px-4 mx-auto justify-center max-w-[1080px] w-full h-full'>

<div>
<p className=' text-4xl font-bold inline border-b-4 border-yellow-700'>Experiences</p>
<p className='py-4'>My most recent work experiences, click for more information.</p>

</div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
<Card handleClick={() => handleClick(amadeusText)} image={amadeus} link='https://amadeus.com/en' text='Amadeus'/>
<Card handleClick={() => handleClick(metalmakerText)} image={metalmaker} link='https://metalmaker3d.com/' text='MetalMaker3D'/>
<Card handleClick={() => handleClick(tiklagelsinText)} image={tiklagelsin} link='https://www.tiklagelsin.com/' text='Tıkla Gelsin'/>

 </div>
 <a className='text-xl  py-4'>{Text}</a>   
    </div>
 
    </div>
  )
}

export default Projects