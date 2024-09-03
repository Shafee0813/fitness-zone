import React from 'react'
import { Logo } from '../assets'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='off-black flex flex-col justify-center items-center relative'>
      <div className='m-6 mt-10'>
        <a href="#home" className="flex flex-row gap-4 items-center text-2xl max-sm:text-xl font-semibold ">
        <img  src = {Logo} className="w-8 h-8 max-sm:w-6 max-sm:h-6 "/>Fitness Zone</a>
      </div>
      <p className='text-sm p-2 pt-4'>Copyright 2024 | Media</p>
      <a href="" className='absolute bottom-4 right-4 text-3xl'><FaGithub/></a>
    </footer>
  )
}

export default Footer