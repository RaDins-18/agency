import React from 'react'

const About = () => {
    return (
        <div className='w-full flex flex-col items-center bg-[#f6f3fe] lg:gap-28'>
            <div className='w-full flex'>
                <div className='w-[11%] sm:w-[13%] md:w-[15%] lg:w-[17%] rounded-se-3xl sm:rounded-se-4xl' />
                <div className='w-[78%] sm:w-[74%] md:w-[70%] lg:w-[66%] flex flex-col items-center bg-[#ffffff] rounded-b-3xl sm:rounded-b-4xl gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4'>
                    <div className='w-[82%] flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                        <div className='w-full border-b-3 sm:border-b-4 border-b-[#f6f3fe]' />
                        <h2 className='text-sm sm:text-[16px] md:text-lg lg:text-xl text-black font-bold whitespace-nowrap'>1k + Brands Trust Us</h2>
                        <div className='w-full border-b-3 sm:border-b-4 border-b-[#f6f3fe]' />
                    </div>
                    <div className='w-[90%] flex flex-wrap gap-2 sm:gap-4 md:gap-6 flex-row justify-between pb-3 sm:pb-4 md:pb-5 lg:pb-6'>
                        <img className='h-7 sm:h-8 md:h-10 lg:h-12 w-fit' src="brand-1.png" alt="brand-1" />
                        <img className='h-7 sm:h-8 md:h-10 lg:h-12 w-fit' src="brand-2.png" alt="brand-2" />
                        <img className='h-7 sm:h-8 md:h-10 lg:h-12 w-fit' src="brand-3.png" alt="brand-3" />
                        <img className='h-7 sm:h-8 md:h-10 lg:h-12 w-fit' src="brand-4.png" alt="brand-4" />
                    </div>
                </div>
                <div className='w-[11%] sm:w-[13%] md:w-[15%] lg:w-[17%] rounded-tl-3xl sm:rounded-tl-4xl' />
            </div>
            <div className='w-[75%] flex custom-col custom-pad items-center lg:flex-row justify-between pb-16 sm:pb-20 md:pb-24 lg:pb-28 gap-10 sm:gap-12 md:gap-14 lg:gap-16 lg:pl-12'>
                <div className='w-[85%] md:min-w-[380px] max-w-[420px] mt-[50%] sm:mt-[46%] md:mt-[42%] lg:mt-0 h-fit lg:h-[488px] relative flex justify-center items-end'>
                    <img className='w-fit h-fit' src="bg.png" alt="background" />
                    <img className='w-[78%] h-fit absolute bottom-0' src="girl.png" alt="girl" />
                    <img className='w-[15%] h-fit absolute bottom-0 mb-[74%] mr-[55%]' src="emoji.png" alt="emoji" />
                    <img className='w-[58%] h-fit absolute bottom-0 mb-[46%] ml-[84%]' src="review.png" alt="review" />
                    <img className='w-[50%] h-fit absolute bottom-0 mb-[8%] mr-[86%]' src="stats.png" alt="stats" />
                </div>
                <div className='max-w-[520px] flex flex-col gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>ABOUT COMPANY</p>
                    </button>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-14 text-[#17012C] mb-1 sm:mb-1.5 md:mb-2 lg:mb-3'>
                        Skills To Improve Your Company Brand
                    </h2>
                    <p className='text-[12px] sm:text-[13] md:text-sm lg:text-base lg:max-w-[520px] text-[#504E4E] mb-2 sm:mb-3 md:mb-4 lg:mb-5'>
                        It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that
                    </p>
                    <div className='flex flex-wrap items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-5 text-[#17012C] mb-1 sm:mb-2 md:mb-3 lg:mb-4'>
                        <div className='flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                            <div className='w-12 sm:w-16 md:w-18 lg:w-20 h-12 sm:h-16 md:h-18 lg:h-20 bg-[#6A47ED] rounded-full flex justify-end items-end'>
                                <div className='w-[46px] sm:w-[62px] md:w-[70px] lg:w-[78px] h-[46px] sm:h-[62px] md:h-[70px] lg:h-[78px] flex justify-center items-center bg-white rounded-full'>
                                    <h4 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold -mt-[2px] -ml-[2px]'>65%</h4>
                                </div>
                            </div>
                            <h4 className='w-[72px] sm:w-[82px] md:w-[92px] lg:w-[105px] text-xs sm:text-sm md:text-base lg:text-lg font-bold'>Paid search marketing</h4>
                        </div>
                        <div className='flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                            <div className='w-12 sm:w-16 md:w-18 lg:w-20 h-12 sm:h-16 md:h-18 lg:h-20 bg-[#6A47ED] rounded-full flex justify-end items-end'>
                                <div className='w-[46px] sm:w-[62px] md:w-[70px] lg:w-[78px] h-[46px] sm:h-[62px] md:h-[70px] lg:h-[78px] flex justify-center items-center bg-white rounded-full'>
                                    <h4 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold -mt-[2px] -ml-[2px]'>95%</h4>
                                </div>
                            </div>
                            <h4 className='w-[90px] sm:w-[100px] md:w-[113px] lg:w-[126px] text-xs sm:text-sm md:text-base lg:text-lg font-bold'>Search engine optimization</h4>
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

export default About