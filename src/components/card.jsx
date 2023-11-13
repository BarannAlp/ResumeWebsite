import React from 'react';

function Card({ image, link, text }) {
  return (
      <div style={{backgroundImage: `url(${image})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 text-center group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {text}
          </span>
          <div className='pt-8 text-center'>
            <a href={link}>
              <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold'>Code</button>
            </a>
          </div>
        </div>
      </div>
    
  );
}

export default Card;