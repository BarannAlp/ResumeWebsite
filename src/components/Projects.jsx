import React from 'react'
import flaskapp from '../assets/flask-app.png'
import phpchat from '../assets/php-chat.png'
import reactapp from '../assets/react-app.png'
import Card from './card.jsx'

const projects = () => {
  return (
    <div name='projects'  className='w-full md:h-screen bg-[#0a192f] text-gray-200'>
      <div className='flex flex-col px-4 pt-20 mx-auto justify-center max-w-[1080px] w-full h-full'>

<div>
<p className=' text-4xl font-bold inline border-b-4 border-yellow-600 '>Projects</p>
<p className='py-4'> You can check some of my recent projects, click for more information.</p>

</div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
<Card image={reactapp} link='https://github.com/BarannAlp/ResumeWebsite' text='{/* This application made with React.js */}'/>
<Card image={phpchat} link='https://github.com/BarannAlp/php-chat' text='{/* Real-time chat application made with php. */}'/>
<Card image={flaskapp} link='https://github.com/BarannAlp/Flask-Powered-Facial-Recoginiton-System/tree/main/application' text=' {/*Facial recognization system powered with Flask. */}'/>

 </div>

    </div>
    
    
    </div>
  )
}

export default projects