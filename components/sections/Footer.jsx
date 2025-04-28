'use client'

import React from 'react'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='flex flex-col items-center text-[#FFFFFFCC]'>
            <div className='flex justify-center w-full bg-[#18185E] py-16 sm:py-20 md:py-24 lg:py-28 -mb-[18px] sm:-mb-[20px] md:-mb-[22px] lg:-mb-6'>
                <div className='w-[72%] flex flex-wrap gap-12 justify-center sm:justify-between'>
                    <div className='w-full sm:w-[260px] flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10'>
                        <p className='sm:max-w-[250px] text-xs sm:text-[12.5] md:text-[13px] lg:text-sm'>
                            Phasellus ultricies aliquam volutpat
                            ullamcorper laoreet neque, a lacinia
                            curabitur lacinia mollis
                        </p>
                        <div className='flex gap-2'>
                            <span className='w-8 h-8 flex justify-center items-center border border-[#FFFFFF99] cursor-pointer'>
                                <img className='w-4 h-fit' src="facebook.png" alt="facebook" />
                            </span>
                            <span className='w-8 h-8 flex justify-center items-center border border-[#FFFFFF99] cursor-pointer'>
                                <img className='w-4 h-fit' src="twitter.png" alt="twitter" />
                            </span>
                            <span className='w-8 h-8 flex justify-center items-center border border-[#FFFFFF99] cursor-pointer'>
                                <img className='w-4 h-fit' src="youtube.png" alt="youtube" />
                            </span>
                            <span className='w-8 h-8 flex justify-center items-center border border-[#FFFFFF99] cursor-pointer'>
                                <img className='w-4 h-fit' src="linkedin.png" alt="linkedin" />
                            </span>
                        </div>
                    </div>
                    <div className='w-full sm:w-[260px] flex flex-col gap-4 lg:gap-5 text-xs sm:text-[12.5] md:text-[13px] lg:text-sm'>
                        <span className='max-w-[120px] flex items-center gap-2'>
                            <img className='w-3 lg:w-3.5 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            <p className='whitespace-nowrap cursor-pointer'>Digtek About</p>
                        </span>
                        <span className='max-w-[120px] flex items-center gap-2'>
                            <img className='w-3 lg:w-3.5 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            <p className='whitespace-nowrap cursor-pointer'>Our Services</p>
                        </span>
                        <span className='max-w-[120px] flex items-center gap-2'>
                            <img className='w-3 lg:w-3.5 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            <p className='whitespace-nowrap cursor-pointer'>Our Blogs</p>
                        </span>
                        <span className='max-w-[120px] flex items-center gap-2'>
                            <img className='w-3 lg:w-3.5 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            <p className='whitespace-nowrap cursor-pointer'>FAQ’S</p>
                        </span>
                        <span className='max-w-[120px] flex items-center gap-2'>
                            <img className='w-3 lg:w-3.5 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            <p className='whitespace-nowrap cursor-pointer'>Contact Us</p>
                        </span>
                    </div>
                    <div className='w-full sm:w-[260px] flex flex-col gap-5'>
                        <div className='flex items-center gap-4 cursor-pointer'>
                            <img className='w-16 h-fit rounded-lg' src="footer-blog.jpeg" alt="footer-blog" />
                            <span className='flex flex-col gap-1'>
                                <p className='text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-xs l:ml-1'>20 Feb, 2024</p>
                                <h6 className='max-w-[180px] text-xs sm:text-[12.5] md:text-[13px] lg:text-sm text-white font-semibold'>Top 5 Most Famous Technology Trend In 2024</h6>
                            </span>
                        </div>
                        <div className='flex items-center gap-4 cursor-pointer'>
                            <img className='w-16 h-fit rounded-lg' src="footer-blog-1.jpeg" alt="footer-blog-1" />
                            <span className='flex flex-col gap-1'>
                                <p className='text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-xs l:ml-1'>15 Dec, 2024</p>
                                <h6 className='max-w-[180px] text-xs sm:text-[12.5] md:text-[13px] lg:text-sm text-white font-semibold'>The Surfing Man Will Blow
                                Your Mind</h6>
                            </span>
                        </div>
                    </div>
                    <div className='w-full sm:w-[260px] flex flex-col gap-[22px]'>
                        <h6 className='text-xs sm:text-[12.5] md:text-[13px] lg:text-sm'>info@example.com</h6>
                        <h6 className='text-xs sm:text-[12.5] md:text-[13px] lg:text-sm lg:mb-2'>+208-666-0112</h6>
                        <div className='max-w-[240px] flex justify-between bg-[#FFFFFF] rounded-md pl-4 pr-1.5 py-2'>
                            <input className='min-w-[50px] max-w-[175px] text-xs sm:text-[12.5] md:text-[13px] lg:text-sm text-[#504E4E] outline-none' placeholder='Your Email Address' type="text" />
                            <button className='w-6 h-6 sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-8 lg:h-8 flex justify-center items-center bg-[#6A47ED] rounded-sm cursor-pointer'>
                                <img className='w-3 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            </button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='h-4 w-4 cursor-pointer' type="checkbox" name="check" id="check" />
                            <span className='flex items-center gap-1 text-xs sm:text-[12.5] md:text-[13px] lg:text-sm'>
                                <label htmlFor='check' className='cursor-pointer'>I agree to the </label>
                                <p className='underline text-white cursor-pointer'>Privacy Policy.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span onClick={scrollToTop} className='h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex justify-center items-center border-2 sm:border-[2.5px] md:border-[3px] lg:border-4 border-white bg-[#6A47ED] rounded-full z-10 cursor-pointer'>
                <img className='w-3 h-fit -rotate-90' src="right-arrow-white.png" alt="right-arrow-white" />
            </span>
            <div className='flex justify-center w-full bg-[#6A47ED] pt-10 py-6 sm:py-5 md:py-6 lg:py-7 -mt-[18px] sm:-mt-[20px] md:-mt-[22px] lg:-mt-6'>
                <div className='w-[72%] flex flex-wrap gap-4 justify-center sm:justify-between text-xs sm:text-[12.5] md:text-[13px] lg:text-sm font-normal'>
                    <h6>© All Copyright 2024 by Digtek</h6>
                    <span className='flex gap-4'>
                        <p className='cursor-pointer'>Terms & Condition</p>
                        <p className='cursor-pointer'>Privacy Policy</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer