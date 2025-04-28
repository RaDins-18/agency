import React from 'react'

const SuccessStory = () => {
    return (
        <div className="flex justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28 bg-[url('/background.jpeg')] bg-cover bg-center">
            <div className='w-[75%] flex justify-between items-center gap-6 custom-col'>
                <div className='w-full md:w-fit flex custom-row custom-align flex-col justify-between custom-width gap-5'>
                    <div className='flex flex-col gap-5'>
                        <button className='text-[10px] md:text-xs lg:text-sm bg-[#F6F3FE1A] py-2 px-4 rounded-full w-fit'>
                            <p className='font-semibold'>SUCCESS STORIES</p>
                        </button>
                        <h2 className='max-w-[426px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-14 mb-3'>
                            Organic Audience Driven On Your Websites
                        </h2>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <img className='h-2.5 sm:h-3 md:h-3.5 lg:h-4 w-fit mb-1 lg:mb-0' src="star-text.png" alt="star-text" />
                        <div className='custom-hidden flex items-center gap-2'>
                            <div className='flex items-center'>
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white' src="https://randomuser.me/api/portraits/men/1.jpg" alt="user-1" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/2.jpg" alt="user-2" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/3.jpg" alt="user-3" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/4.jpg" alt="user-4" />
                            </div>
                            <p className='text-[10.5px] sm:text-[11px] md:text-[11.5px] lg:text-xs'>450+ reviews</p>
                        </div>
                        <div className='hidden custom-flex flex-row-reverse items-center gap-2'>
                            <div className='flex items-center'>
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white' src="https://randomuser.me/api/portraits/men/1.jpg" alt="user-1" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/2.jpg" alt="user-2" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/3.jpg" alt="user-3" />
                                <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/4.jpg" alt="user-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-fit md:h-[330px] custom-width flex flex-col md:flex-row items-center'>
                    <img className='w-full md:w-fit md:h-full  rounded-2xl' src="rocket.jpeg" alt="rocket" />
                    <div className='w-[90%] md:h-[90%] md:w-full flex flex-col sm:flex-row justify-between bg-white rounded-b-2xl md:rounded-l-none md:rounded-r-2xl p-6 gap-6'>
                        <div className='h-full w-full flex flex-col justify-between text-[#17012C] gap-2 sm:gap-5'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide'>500+</h2>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold whitespace-nowrap'>Total Project</h4>
                                <p className='sm:max-w-[205px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm text-[#504E4E]'>Lorem dolor amet consectetur adipiscing any more elit.</p>
                            </div>
                        </div>
                        <div className='h-full w-full flex flex-col justify-between text-[#17012C] gap-2 sm:gap-5'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide'>300M+</h2>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold whitespace-nowrap'>Investment</h4>
                                <p className='sm:max-w-[205px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm text-[#504E4E]'>Lorem dolor amet consectetur adipiscing any more elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStory