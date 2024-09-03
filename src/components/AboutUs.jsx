import React from 'react'
import { GymMan } from '../assets'

const AboutUs = () => {
  return (
    <div className='flex flex-row items-center justify-evenly max-md:flex-col max-md:pb-12'>
      <div className='pr-8 max-md:px-8'>
        <h1><img src = {GymMan} className='w-full max-w-[550px] rounded-r-xl max-md:rounded-xl max-md:mb-10'/></h1>
      </div>
      <div className='flex flex-col gap-10 pr-10'>
        <h1 className='smaller-text font-semibold text-center'>Claim your membership here : </h1>
        <form action="#" method="POST" className='flex flex-col gap-10 items-center'>
          <input type="text" id="name" name="name" className='input rounded-md block w-full max-w-[500px] h-12' placeholder='Full name'/>
          <input type="email" id="email" name="email" className='input rounded-md block w-full max-w-[500px] h-12' placeholder='Email address'/>
          <input type="password" id="password" name="password" className='input rounded-md block w-full max-w-[400px] h-12' placeholder='Mobile number'/>
          <select id="options" name="options" className='input rounded-md block w-full max-w-[400px] h-12'>
            <option value="" disabled selected>Select your plan</option>
            <option value="option1">1 month</option>
            <option value="option2">6 months</option>
            <option value="option3">12 months</option>
          </select>
          <button type="submit" className='bg-white text-black w-fit px-6 h-10 rounded-xl font-semibold'>Claim</button>
        </form>
      </div>
      
    </div>
  )
}

export default AboutUs