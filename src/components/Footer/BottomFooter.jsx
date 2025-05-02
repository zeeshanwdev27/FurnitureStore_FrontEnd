import React from 'react'
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import maestro from "../../assets/maestro.svg";
import americanexpress from "../../assets/americanexpress.svg";
import elo from "../../assets/elo.svg";
import paypal from "../../assets/paypal.svg";

function BottomFooter() {
  return (
    <div className='px-42'>
      <div className='bg-[#EBE7E4] px-15 py-4 rounded-t-lg flex justify-between items-center'>
        <p className='text-sm font-medium'>Copyright & Design By Zeeshan Khan. All Right Reserved</p>
        <div className='flex gap-2 items-center justify-center'>
          <div><img src={visa} alt="visaimage" className="w-7 h-7" /></div>
          <div><img src={mastercard} alt="mastercard" className="w-7 h-7" /></div>
          <div><img src={maestro} alt="maestro" className="w-7 h-7" /></div>
          <div><img src={americanexpress} alt="americanexpress" className="w-7 h-7" /></div>
          <div><img src={elo} alt="elo" className="w-7 h-7" /></div>
          <div><img src={paypal} alt="paypal" className="w-7 h-7" /></div>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter
