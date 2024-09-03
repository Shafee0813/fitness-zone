import React from 'react'
import { GymActivities } from '../assets'
import { FaCheck } from 'react-icons/fa'
import { featuresList } from '../constants'

const Features = () => {

  return (
    <div className='flex flex-row items-center max-md:flex-col max-md:py-12 max-sm:pt-20'>
      <div className='pl-4'>
        <h1 className='heading-text font-semibold'>Here at Fitness Zone, we provide :</h1>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }} className='m-4'>
          {featuresList.map((feature)=>{
            return <li className='flex flex-row items-center pl-4'>
              <FaCheck className=' rounded-full m-2 bg-green-600 p-1 w-8 h-8'/>
              <span className='regular-text my-4'>{feature}</span>
              </li>
            })}
        <span className='regular-text'>...all while fostering a healthy community!</span>
        </ul>
      </div>
      <div className='pl-8 max-md:px-8'>
        <h1><img src = {GymActivities} className='w-full max-h-[550px] rounded-l-xl max-md:rounded-xl'/></h1>
      </div>
    </div>
  )
}

export default Features