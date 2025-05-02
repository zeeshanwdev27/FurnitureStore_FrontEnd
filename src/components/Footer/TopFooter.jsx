import React from 'react'

function TopFooter() {
  return (
    <div className='px-42 pt-10'>

      <div className='bg-white flex justify-between items-center rounded-md'>

        {/* Icon 1 */}
        <div className='py-4 px-8'>
          <div className='flex gap-3 items-center'>
          <span class="material-symbols-outlined !font-thin !text-4xl">package_2</span>
            <div className=''>
              <p className='font-bold text-sm'>Free Shipping</p>
              <p className='text-xs text-gray-600'>Free Shipping</p>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 h-10'></div>

        {/* Icon 2 */}
        <div className='py-4 px-8'>
          <div className='flex gap-3 items-center'>
          <span class="material-symbols-outlined !font-thin !text-4xl">delivery_truck_speed</span>
            <div className=''>
              <p className='font-bold text-sm'>Free Returns</p>
              <p className='text-xs text-gray-600'>30 days free return policy</p>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 h-10'></div>

        {/* Icon3 */}
        <div className='py-4 px-8'>
          <div className='flex gap-3 items-center'>
          <span class="material-symbols-outlined !font-thin !text-4xl">credit_score</span>
            <div className=''>
              <p className='font-bold text-sm'>Secured Payments</p>
              <p className='text-xs text-gray-600'>We accept all major credit cards</p>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 h-10'></div>

        {/* Icon 4 */}
        <div className='py-4 px-8'>
          <div className='flex gap-3 items-center'>
          <span class="material-symbols-outlined !font-thin !text-4xl">support_agent</span>
            <div className=''>
              <p className='font-bold text-sm'>Customer Service</p>
              <p className='text-xs text-gray-600'>Top notch customer service</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default TopFooter
