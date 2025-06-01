import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-white' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        
        {/* Left Column */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="logo" className='mb-4' />
          <p className='text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum
            suscipit laborum accusantium quia placeat, impedit adipisci quos eaque
            odit delectus temporibus quas quisquam rem optio! Vitae quaerat facilis
            nulla!
          </p>
        </div>

        {/* Company Links */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li><a href="#Header" className='hover:text-white'>Home</a></li>
            <li><a href="#About" className='hover:text-white'>About us</a></li>
            <li><a href="#Contact" className='hover:text-white'>Contact us</a></li>
            <li><a href="#Testimonials" className='hover:text-white'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
            <input
              type="email"
              placeholder='Enter your email'
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full sm:w-auto'
            />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700 py-4 mt-12 text-center text-gray-500'>
       Copyright © 2024 Harshit. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;
