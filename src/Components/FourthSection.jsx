import React from "react";
import lock from "../assets/lock.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import btc from "../assets/btc.png";
import yellowImage from "../assets/yellowImage.png";

const data =[
    {
        id:1,
        image : image7,
        text:"Stacks web wallet"
    },{
        id:2,
        image : image8,
        text:"Stacks web wallet"
    },{
        id:3,
        image : image9,
        text:"Xverse app Jolocam"
    },{
        id:4,
        image : image10,
        text:"Xverse meta wallet"
    }

]

const FourthSection = () => {
  return (
    <div className="bg-black text-white rounded-t-[55px] rounded-b-[55px] py-16">
        <div className=" flex items-center justify-around text-white my-6">
      <div>
        <h4 className="text-[#5846FB] text-2xl mb-8">Stacks for devoloper</h4>
        <h1 className="text-[80px] leading-[80px] mb-8">
          Build powerful <br />
          apps, secured <br /> by bitcoin
        </h1>
        <p className="text-base font-light mb-8">
          Stacks connects to Bitcoin, enabiling you to build apps, smart <br />
          contracts, and digital assets that are integerated with Bitcoin`s{" "}
          <br />
          security, capital , and networks.
        </p>

        <button className="bg-[#5846FB] text-white  rounded-full text-base px-6 py-3">
          Start Stacking
        </button>
      </div>
      <div className="flex gap-4">
        <img src={lock} alt="" className="w-52 h-96 mt-[139px]" />
        <div className="bg-[#1E1F21] rounded-[500px] px-14 py-8 ">
          <p className="text-center text-lg">Stages</p>
          <div className="flex items-center gap-0">
  {/* Black card + Secured text */}
  <div className="flex flex-col items-center">
    <div className="bg-gradient-to-br from-[#262729] via-[#262729] via-22% via-[#1E1F21] via-39% to-[#101010] py-10 px-5 mt-32 z-30 rounded-3xl grid grid-cols-2 gap-y-4 gap-x-2">
      <img src={image1} alt="First showcase image" className="w-12 object-cover" />
      <img src={image2} alt="Second showcase image" className="w-12 object-cover" />
      <img src={image3} alt="Third showcase image" className="w-12 object-cover" />
      <img src={image4} alt="Fourth showcase image" className="w-12 object-cover" />
      <img src={image5} alt="Fifth showcase image" className="w-12 object-cover" />
      <img src={image6} alt="Sixth showcase image" className="w-12 object-cover" />
    </div>
    <p className="text-white mt-4 text-base font-semibold">Secured</p>
  </div>

  <div className="rounded-3xl bg-gradient-to-b from-[#5846FB] via-[#5442F4] to-[#2C18E5] py-32 mt-8 px-18 -ml-20 z-20"></div>
  <div className="flex flex-col items-center -ml-20 z-10 relative">
    <img className="w-32 mb-3" src={yellowImage} alt="" />
    <img className='absolute w-24 right-0'src={btc} alt="" />
    
    <p className="text-white mt-4 text-base font-semibold ml-22   ">Bitcoin</p>
  </div>
</div>

        </div>
      </div>
    </div>
    <div className="px-20 mt-25">
  <h1 className="text-[80px] leading-[80px] font-medium">
    See what <br /> being built
  </h1>

  <div className="grid grid-cols-4 gap-6 mt-10">
    {data.map((items) => (
      <div
        key={items.id}
        className="flex flex-row h-[140px] bg-[#1F2123] items-center gap-5 rounded-full py-8 px-5"
      >
        <img
          src={items.image}
          alt={items.text}
          className="w-[50px] h-[55px] rounded-lg"
        />
        <p className="text-white text-3xl font-light">{items.text}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default FourthSection;
