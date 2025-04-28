const Slider = () => {

    return (
        <div className='h-[260px] flex flex-col items-center justify-center overflow-hidden'>
            <div className="w-full flex border-y border-[#666] bg-[#C6F806] -rotate-2 -mb-14 lg:-mb-16">
                <div className="flex gap-10 sm:gap-[42px] md:gap-[44px] lg:gap-12 w-screen animate-scroll-right">
                    {Array(50).fill(0).map((_, i) => (
                        <span key={i} className="flex items-center gap-4 py-4">
                            <img className="h-5 sm:h-[22px] md:h-6 lg:h-7 w-fit" src="star.png" alt="star" />
                            <p className="text-black text-xs sm:text-base md:text-lg lg:text-xl font-extrabold leading-none">THE BEST SOLUTION</p>
                        </span>
                    ))}
                </div>
            </div>
            <div className="w-full flex border-y border-[#666] bg-white rotate-2">
                <div className="flex gap-10 sm:gap-[42px] md:gap-[44px] lg:gap-12 w-screen animate-scroll-left">
                    {Array(50).fill(0).map((_, i) => (
                        <span key={i} className="flex items-center gap-4 py-4">
                            <img className="h-5 sm:h-[22px] md:h-6 lg:h-7 w-fit" src="star.png" alt="star" />
                            <p className="text-black text-xs sm:text-base md:text-lg lg:text-xl font-extrabold leading-none">THE BEST SOLUTION</p>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider