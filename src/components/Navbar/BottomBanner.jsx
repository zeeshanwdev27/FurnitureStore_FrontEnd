import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomBanner() {
  const navigate = useNavigate()

  const handleHomeRoute =()=>{
    navigate('/')
  }
  return (
    <div className='lg:flex justify-between items-center py-3 lg:px-35'>

        <div className='flex justify-center items-center text-xs lg:mb-0 mb-4'>
          <ul className='flex items-center gap-6'>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]' onClick={handleHomeRoute}>HOME</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>SHOP</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>BLOG</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>PAGES</li>
            {/* <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>CATEGORY</li> */}
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>CONTACT</li>
          </ul>
        </div>

        <div className='flex justify-center items-center'>
          <ul className='flex items-center justify-center gap-3 font-bold'>
            <li className='text-black flex items-center justify-center gap-2 text-xs hover:cursor-pointer'>Get 30% Discount Now<div className='text-white text-xs bg-[#885B3A] rounded-2xl lg:px-3 px-2 py-0.5'>SALE</div></li>
          </ul>
        </div>
    </div>
  )
}

export default BottomBanner
