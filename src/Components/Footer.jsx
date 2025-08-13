import React from 'react'

const data = [
    "Wallets",
    "Docs",
    "Get GXT",
    "Apps",
    "Learning resources",
    "Eco System",
    "Event",
    "Blog",
    "Resources",
    "Videos Learning",
    "Etherium Learning",
    "Smart contract",
    "NFTs"
]

const Footer = () => {
  return (
    <div className='flex flex-col items-start px-20 pt-36 rounded-t-[55px]  bg-[#0A0A0A] text-white p-5 gap-4 overflow-x-hidden'>
        <h2 className="text-[120px] font-medium mb-8">Explore Stacks</h2>
        <div className="flex flex-wrap ml-[-32px] justify-center items-start gap-6 mb-30">
            {data.map((item, index) => (
                <div key={index} className="text-2xl  text-[#ffffff] border-[#8A8A8A] border rounded-[100px] px-7 py-3 ">
                    {item}
                </div>
            ))}
        </div>
       <div className="flex justify-between items-center mt-6 mb-12 w-full">
  <h3 className="text-3xl font-medium text-[#5846FB]">CoinFusion</h3>
  <p className="text-base text-[#ffffff] font-normal  opacity-70 text-right">
    Terms &amp; conditions | Sitemap | Privacy Policy | Cookies Policy
  </p>
</div>

    </div>
  )
}

export default Footer