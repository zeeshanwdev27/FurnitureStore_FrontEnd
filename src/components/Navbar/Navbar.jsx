import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-3 px-35'>

        <div className='flex justify-center items-center text-sm'>
          <ul className='flex items-center gap-4'>
            <li className='text-gray-600 hover:cursor-pointer'>Track Order</li>
            <li className='text-gray-600 hover:cursor-pointer'>English</li>
            <li className='text-gray-600 hover:cursor-pointer'>About Us</li>
            <li className='text-gray-600 hover:cursor-pointer'>Contact</li>
            <li className='text-gray-600 hover:cursor-pointer'>FAQ</li>
          </ul>
        </div>

        <div className='flex justify-center items-center text-sm'>
          <ul className='flex items-center justify-center gap-6'>
            <li className='text-gray-600 flex items-center justify-center gap-1'>CALL US 24/7:<div className='font-medium text-[#885B3A]'>(1800)-88-66-991</div></li>
            <li className='text-gray-600 hover:cursor-pointer'>English</li>
            <li className='text-gray-600 hover:cursor-pointer'>Usd</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
