import React from 'react'
import bitcoin from '../assets/bitcoin.png';
import picture5 from '../assets/picture5.png'

const SecondSection = () => {
  return (
    <div className='flex items-center justify-evenly my-52'>
        <div>
            <h2 className='text-black font-medium text-[80px] leading-[93px] mb-8'>
                Stacking, a <br/> new way to <br/> earn bitcoin
            </h2>
            <p className='text-xl text-black mb-8'>
                Hold and Temporarily lock STX, stacks native currency, and <br/> support the network security and consensus. As a rewards, <br/> you'll earn BTC.
            </p>
              <button className='bg-[#5846FB] text-white border rounded-full text-sm px-6 py-3'>Start Stacking</button>
        </div>
        <div>
          <div className='flex items-center justify-items-start gap-5 mb-5'>
            <span className='text-[58px] py-5 px-13 font-normal bg-[#F0F0F0]  rounded-full'>9.5%</span>
            <img src={bitcoin} alt="bitcoin Image" className='w-[120px] h-[120px]'/>
          </div>
          <div className='bg-[#5546FF] rounded-full text-white flex items-center px-4 py-3 mb-5'>
            <span className='text-[60px] px-4 py-3 rounded-full font-normal'>$864,896,126</span>
            <span>Total Value locked</span>
          </div>
          <div className='flex items-center justify-end mb-5 gap-5'>
            <img className=' border-[#5546FF]' src={picture5} alt="" />
            <span className='bg-[#F0F0F0]  rounded-full font-semibold px-12 py-7 text-2xl'>Data courtesy of <br/> stacking club</span>
          </div>
        </div>
    </div>
  )
}

export default SecondSection