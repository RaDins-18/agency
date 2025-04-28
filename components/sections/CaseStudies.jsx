'use client'

import { useState } from 'react'

const cardData = [
    {
        id: 1,
        bgImage: "/study-1.jpeg",
        title: "Rising Stars Obscure",
        badgeLabels: ["Real-time Analytics", "Social", "Agile Advance", "Advance"],
        number: "01",
        label: "ECO Management",
    },
    {
        id: 2,
        bgImage: "/study-1.jpeg",
        title: "Rising Stars Obscure",
        badgeLabels: ["Real-time Analytics", "Social", "Agile Advance", "Advance"],
        number: "02",
        label: "Digital Marketing",
    },
    {
        id: 3,
        bgImage: "/study-1.jpeg",
        title: "Rising Stars Obscure",
        badgeLabels: ["Real-time Analytics", "Social", "Agile Advance", "Advance"],
        number: "03",
        label: "Instantly Analyze",
    },
    {
        id: 4,
        bgImage: "/study-1.jpeg",
        title: "Rising Stars Obscure",
        badgeLabels: ["Real-time Analytics", "Social", "Agile Advance", "Advance"],
        number: "04",
        label: "Web & App Development",
    },
    {
        id: 5,
        bgImage: "/study-1.jpeg",
        title: "Rising Stars Obscure",
        badgeLabels: ["Real-time Analytics", "Social", "Agile Advance", "Advance"],
        number: "05",
        label: "Email Marketing",
    },
];

const CaseStudies = () => {
    const [active, setActive] = useState(0)

    return (
        <div className='relative flex justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28'>
            <div className='w-[75%] flex flex-col gap-5'>
                <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                    <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>CASE STUDIES</p>
                </button>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <h2 className='lg:w-[600px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-14 text-[#17012C] mb-3'>
                        We Are A Creative Digital Marketing Agency
                    </h2>
                    <div className='lg:min-w-[230px] flex flex-wrap items-center lg:flex-col justify-between mt-3 lg:mt-1.5'>
                        <div className='flex cursor-pointer'>
                            <div className='main group flex justify-center items-center relative'>
                                <div className='h-0 group-hover:h-full transition-all duration-300 ease-in-out w-full bg-[#6A47ED] absolute rounded-full'></div>
                                <button className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-base font-medium md:font-semibold lg:font-bold bg-[#6A47ED] rounded-full h-9 md:h-10 lg:h-12 px-4 lg:px-6 cursor-pointer z-10'>EXPLORE MORE</button>
                                <div className='flex justify-center items-center bg-[#6A47ED] rounded-full w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:-ml-4 lg:group-hover:-ml-5 transition-all duration-300 ease-in-out z-10'>
                                    <img className='w-3 lg:w-4 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row overflow-x-hidden gap-6 lg:gap-8 mt-2'>
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`lg:h-[340px] rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-3xl relative flex flex-col lg:flex-row justify-between py-4 sm:py-5 md:py-6 lg:py-8 transition-all duration-500 ease-in-out overflow-hidden ${active === index
                                ? "lg:w-[calc(740px-16px)] px-4 sm:px-5 md:px-6 lg:px-8 h-[340px]"
                                : "bg-[#6A47ED] px-4 sm:px-5 md:px-6 lg:px-0 cursor-pointer  lg:w-[calc(115px-16px)] flex justify-center h-20"
                                }`}
                            style={
                                active === index
                                    ? {
                                        backgroundImage: `url('${card.bgImage}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                    : {}
                            }
                            onClick={() => setActive(index)}
                        >
                            <div className={`flex flex-col justify-between transition-all duration-500 ease-in-out ${active !== index ? "h-0 opacity-0 w-0 scale-90 pointer-events-none" : "h-full opacity-100 scale-100"} `}>
                                <div className='max-w-[280px] flex flex-wrap gap-2'>
                                    {card.badgeLabels.map((badgeLabel, i) => (
                                        <button key={i} className='flex items-center gap-2 border border-[#FFFFFF] bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF00] backdrop-blur-[25px] rounded-full px-2 py-2.5 sm:px-[9px] sm:py-[11px] md:px-2.5 md:py-3 lg:px-3 lg:py-3.5 leading-0 text-xs sm:text-[12.5px] md:text-[13px] lg:text-sm whitespace-nowrap'>
                                            {badgeLabel}
                                            <img className='h-2 md:h-[9px] lg:h-2.5 w-fit -mb-1' src="top-right-arrow.png" alt="top-right-arrow" />
                                        </button>
                                    ))}
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-3 h-3 sm:w-[14px] sm:h-[14px] md:w-4 md:h-4 lg:w-5 lg:h-5' src="square.png" alt="square" />
                                        <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold'>{card.title}</span>
                                    </div>
                                    <div className='lg:hidden'>
                                        <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-white leading-none text-xs sm:text-[12.5px] md:text-[13px] lg:text-sm text-[#17012C] rounded-full'>{card.number}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:h-full flex lg:flex-col justify-between gap-4'>
                                <div className='lg:h-full w-full relative flex lg:justify-center items-center'>
                                    <h3 className={`absolute text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold lg:-rotate-90 transition-transform duration-500 ease-in-out invisible ${active === index ? "scale-90" : "visible scale-100"}`}
                                    >{card.label}</h3>
                                </div>
                                <div className={`${active === index && 'hidden'} lg:flex`}>
                                    <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-white leading-none text-xs sm:text-[12.5px] md:text-[13px] lg:text-sm text-[#17012C] rounded-full'>{card.number}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img className='absolute bottom-0 left-2 w-12 sm:w-[74px] md:w-[88px] lg:w-28 h-fit' src="boy-1.png" alt="boy-1" />
            <img className='absolute bottom-0 right-4 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px]  h-fit' src="leaves.png" alt="leaves" />
        </div>
    )
}

export default CaseStudies