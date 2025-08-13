import React from 'react'
import image from "../assets/ThirdSection1.png"
import image2 from "../assets/ThirdSection2.png"
import image3 from "../assets/ThirdSection3.png"

const data = [
    {
        id: 1,
        icon: image,
        title: "Proof of transfer",
        description: "The consensus mechanism that connects stacks and bitcoin.",
    },
    {
        id: 2,
        icon: image2,
        title: "Bitcoin to NFTs",
        description: "NFTs are secured by bitcoin by exploding on the network",
    },
    {
        id: 3,
        icon: image3,
        title: "Bitcoin to DeFi",
        description: "Stacks bring DeFi to bitcoin, unlocking over $2 trillion in capital.",
    }
]

const ThirdSection = () => {
    return (
        <div className="mt-16 px-20">
            <h1 className="text-4xl font-bold mb-12 text-center text-[80px]">Stacks unleashed <br/> Bitcoin</h1>
            <div className='flex gap-6'>
                {data.map((item) => (
                    <div key={item.id} className="flex items-baseline pl-9 pt-10 pr-12 pb-8 flex-col rounded-3xl gap-8 bg-[#F0F0F0] mb-12">
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="p-3 w-16 h-16 object-contain bg-[#5846FB] mb-36 rounded-full"
                        />
                        <div>
                            <h2 className="text-[60px] leading-[65px] font-normal mb-2">{item.title}</h2>
                            <p className="text-lg mb-2">{item.description}</p>
                            <p className="text-[#5846FB] font-medium text-sm cursor-pointer ">Learn more</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className='underline font-bold text-center my-4 mb-40 '>See all features</p>
        </div>
    )
}

export default ThirdSection