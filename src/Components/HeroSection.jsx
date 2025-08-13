import React from 'react'
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";  
import picture4 from "../assets/picture4.png";

const data = [
    {
        id: 1,
        img: picture1,
            text: "Alex raises $8.6M to bring DeFi to the..."
    },
    {
        id: 2,
        img: picture2,
        text: "NYC gets own cryptocurrency after"
    },
    {
        id: 3,
        img: picture3,
        text: "Alex raises $8.6M to bring DeFi to the..."
    },  
    {
        id: 4,
        img: picture4,
        text: "Alex raises $8.6M to bring DeFi to the..."
    },
]

const HeroSection = () => {
    return (
        <section className='text-center mt-40'>
            <div>
                <h1 className="font-medium text-white text-[40px] md:text-[105px] leading-[120px]  pb-5">
                    Unleash Bitcoin <br/>  full potential
                </h1>
                <p className=' text-lg font-light text-[#fff] pb-8'>
                    Stacks enables DeFi, NFTs, apps and<br /> smart contracts for Bitcoin
                </p>
                <button className="bg-[#5846FB] inline-block text-base px-9 py-4 rounded-full text-white">
                    See what's built on Stacks
                </button>
            </div>
            <div className="text-left ml-20">
  <h2 className="text-white text-2xl font-light mt-18">
    Latest Ecosystem news
  </h2>

  <div className="grid grid-cols-4 gap-5 mt-10 overflow-x-hidden">
    {data.map((items) => (
      <div
        key={items.id}
        className="flex w-[350px] h-[140px] bg-[#1F2123] border  items-center gap-5 rounded-full py-8 px-5 mb-20"
      >
        <img
          src={items.img}
          alt={items.text}
          className="w-[80px] h-[55px] rounded-lg"
        />
        <p className="text-white text-lg  font-light">{items.text}</p>
      </div>
    ))}
  </div>
</div>

        </section>
    )
}

export default HeroSection