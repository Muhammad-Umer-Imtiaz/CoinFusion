import React from 'react'
import lastimage from "../assets/lastimage.png";
import arrow from "../assets/arrow.png";
import imageee from "../assets/imageee.png";
const FifthSection = () => {
  return (
    <div className='flex items-center justify-evenly my-40'>
        <div>
            <p className='pb-6 text-4xl font-normal'>Stacks mission to create a better, user-owned <br/>
decenterlized internet .To do it we`re unleashing <br/>
Bitcoin, the most battle - tested and valueable <br/>
blockchain in the world.</p>
              <button className='bg-[#5846FB] mr-4 text-white border rounded-full text-base px-6 py-3'>Learn about series</button>
    <span className='text-[#BBBBBB] underline text-base'>Why stack in built</span>
        </div>
        <div className='flex gap-5'>
            <img src={lastimage} alt=""  className='h-80 mt-20'/>
            <div className='bg-[#5846FB] flex items-center flex-col gap-10 p-8 rounded-[600px]'>
                <img src={imageee} alt="" className='w-40 h-44' />
                <img src={arrow} alt=""  className='w-20'/>
            </div>
        </div>
    </div>
  )
}

export default FifthSection