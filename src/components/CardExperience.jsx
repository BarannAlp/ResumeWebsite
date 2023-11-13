import React,{useState} from 'react';

function Card({ image, link, text,handleClick }) {
 
  return (
    
      <div style={{backgroundImage: `url(${image})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 text-center group-hover:opacity-100 text'>
          <span className='fixed-col font-bold text-white tracking-wider flex flex-col items-center'>

            <a className='pt-10 text-xl'>{text}</a>
            <a>Click Detail for more information.</a>
          </span>
          <div className='pt-10 px-4 text-center'>
            <a href={link}>
              <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"'>Visit</button>
            </a>
              <button  onClick={handleClick} className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"'>Detail</button>
          </div>
        </div>
      </div>
    
  );
}

export default Card;