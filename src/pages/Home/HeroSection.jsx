import React from 'react'
import Button from '@mui/material/Button';

function HeroSection() {
  return (
    <div 
      className='w-full px-35 h-[60vh] flex items-center gap-20'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("https://images.unsplash.com/photo-1613906800797-d5d4fb2f7bbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='flex flex-col justify-center text-white gap-6 p-8 pl-0 rounded-lg'>

        <div className='flex flex-col justify-center gap-2'>
          <p className='text-2xl'>READY ITEM</p>
          <p className='text-5xl font-bold'>HOME DECOR</p>
          <p className='text-lg'>From $299.00</p>
        </div>

        <div>
          <Button variant="outlined" className="!text-white !border-white hover:!text-black hover:!border-white hover:!bg-gray-50">
            EXPLORE ITEMS
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection