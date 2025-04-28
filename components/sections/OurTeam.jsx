import React from 'react'

const OurTeam = () => {
    return (
        <div className="flex justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28">
            <div className='w-[67%] flex justify-between items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 custom-col-rev'>
                <div className='h-fit w-fit relative flex justify-center items-end'>
                    <img className='h-full w-fit' src="bg-1.png" alt="background-1" />
                    <img className='h-full w-fit absolute bottom-0' src="boy-2.png" alt="boy-2" />
                </div>
                <div className='flex flex-col gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>OUR EXPERT TEAM</p>
                    </button>
                    <h2 className='lg:max-w-[530px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-14 mb-[4px] sm:mb-[8px] md:mb-[10px] lg:mb-3 text-[#17012C]'>
                        Let’s Make Something Awesome Together
                    </h2>
                    <p className='max-w-[520px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-base text-[#504E4E] mb-[4px] sm:mb-[8px] md:mb-[16px] lg:mb-5'>
                        Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-[4px] sm:mb-[8px] md:mb-[16px] lg:mb-5'>
                        <div className='flex flex-col gap-4 sm:gap-6 text-[#17012C]'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[14px] sm:w-[16px] md:w-[18px] lg:w-5 h-fit' src="tick.png" alt="tick" />
                                <h6 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-base font-semibold'>30-day money back guarantee</h6>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img className='w-[14px] sm:w-[16px] md:w-[18px] lg:w-5 h-fit' src="tick.png" alt="tick" />
                                <h6 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-base font-semibold'>Web site Marketing Solutions</h6>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 sm:gap-6 text-[#17012C]'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[14px] sm:w-[16px] md:w-[18px] lg:w-5 h-fit' src="tick.png" alt="tick" />
                                <h6 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-base font-semibold'>Unlimited Application</h6>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img className='w-[14px] sm:w-[16px] md:w-[18px] lg:w-5 h-fit' src="tick.png" alt="tick" />
                                <h6 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-base font-semibold'>24/7 system Monitoring</h6>
                            </div>
                        </div>
                    </div>
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
        </div>
    )
}

export default OurTeam