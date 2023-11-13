import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4  '>
<div className='flex flex-col pt-20 max-w-[1000px] items-center w-full'>
<div className='w-full flex flex-col text-center'>
<a className='text-4xl text-white font-bold inline border-b-4 border-yellow-700'> GET IN TOUCH</a>
<a className='text-xl my-5 text-white'>Fill the form below or send me mail via: baranalpod@gmail.com</a>

</div>
<form method='POST' action='https://getform.io/f/17fcacfa-6eb3-47ad-aac4-80514229a9c8'className='w-full grid grid-cols-2 gap-4 pb-8'> 
<div className='w-full flex justify-between  flex-col my-10'>
    <input className='p-5 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
    <input className='p-5 bg-[#ccd6f6]' type='text' placeholder='Email' name='email'/>
    <input className='p-5 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
</div>
<div className='w-full flex flex-col my-10'>
<textarea className='bg-[#ccd6f6]' name='message' rows="10" placeholder='Message'></textarea>
</div>
<button className='w-40 text-white group border-2  px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'> Lets Contact!
</button>
</form>

</div>
    </div>
  )
}

export default Contact