import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Card = ({ title , price , qualities }) => {
  const toPay = () => {
    window.location.href = "https://fitness-zone-website.netlify.app/#contact-us"
  }
  return (  
    <div className="bg-slate-50 flex flex-col m-4 rounded-3xl max-w-[350px] px-10 py-5 my-5 relative max-sm:mx-10">
      <h1 className='text-3xl block p-6 text-center pb-0 text-black font-semibold'>{title}</h1>
      <span className='text-4xl p-6 text-center text-green-600 font-semibold'>{price}<span className='text-black text-xl'>/month</span></span>
      
      <ul className='list-none '>
        {qualities.map((quality) => {
          return <li className='flex items-center mb-3'>
            <FaCheck className=' rounded-full m-2 border-2 border-black text-black p-1 w-6 h-6 '/>
            <span className='smaller-text my-4 ml-4 text-black font-poppins'>{quality}</span>
          </li>      
        })}
      </ul>
        <p className='mb-20 text-slate-500 text-center poppins '>Cancellation is possible <br/>only before half-term.</p>
      <button 
        className='bg-black absolute bottom-5 left-[37.5px] card-button w-full max-w-[275px]  h-10 font-poppins rounded-3xl'
        onClick={toPay}
        >
          Subscribe
        </button>
    </div>
  );
};

export default Card;
