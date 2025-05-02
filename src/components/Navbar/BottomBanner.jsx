import React from 'react'

function BottomBanner() {
  return (
    <div className='flex justify-between items-center py-3 px-35'>

        <div className='flex justify-center items-center text-xs'>
          <ul className='flex items-center gap-6'>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>HOME</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>SHOP</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>BLOG</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>PAGES</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>CATEGORY</li>
            <li className='text-black font-bold hover:cursor-pointer hover:text-[#885B3A]'>CONTACT</li>
          </ul>
        </div>

        <div className='flex justify-center items-center'>
          <ul className='flex items-center justify-center gap-3 font-bold'>
            <li className='text-black flex items-center justify-center gap-2 text-xs hover:cursor-pointer'>Get 30% Discount Now<div className='text-white text-xs bg-[#885B3A] rounded-2xl px-3 py-0.5'>SALE</div></li>
          </ul>
        </div>
    </div>
  )
}

export default BottomBanner
