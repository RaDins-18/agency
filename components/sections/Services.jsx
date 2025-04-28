const SERICES = [
    {
        image: "speaker-2",
        title: "Digital Marketing",
        description: "Lorem dolor amet consectetur read adipiscing any more elit."
    },
    {
        image: "pie",
        title: "SEO Analytics",
        description: "Lorem dolor amet consectetur read adipiscing any more elit."
    },
    {
        image: "mark",
        title: "Social Marketing",
        description: "Lorem dolor amet consectetur read adipiscing any more elit."
    },
]

const Services = () => {
    return (
        <div className='relative flex justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28 -mt-[110px] md:-mt-[100px]'>
            <div className='w-[70%] flex flex-col gap-14'>
                <div className='flex flex-col gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>WHY SERVICES US</p>
                    </button>
                    <div className='flex flex-col lg:flex-row justify-between gap-6'>
                        <h2 className='lg:w-[620px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#17012C] leading-8 sm:leading-10 md:leading-12 lg:leading-14'>Use SEO To Drive Growth At Your Business</h2>
                        <span className='h-fit text-xs sm:text-sm mt-2 w-[245px] text-[#504E4E] py-1 px-4 border-l-2 border-l-[#6A47ED] font-semibold italic'>
                            Pellentesque ut vehicula sapien
                            dictumst. Maecenas ante
                        </span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    {SERICES.map((service, index) => (
                        <div key={index} className='w-full md:w-[48%] lg:max-w-[380px] border border-[#E5E5E5] rounded-[20px] py-8 px-5 flex gap-3'>
                            <img className='w-10 sm:w-11 md:w-12 lg:w-14 h-fit' src={`${service.image}.png`} alt={service.image} />
                            <div className='flex flex-col'>
                                <h6 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#17012C] font-bold mb-1 sm:mb-0'>{service.title}</h6>
                                <p className='text-[10px] md:text-xs lg:text-sm text-[#504E4E] leading-4 sm:leading-5 md:leading-6 lg:leading-7 mb-2 lg:mb-2.5'>
                                    {service.description}
                                </p>
                                <button className='flex items-center gap-2 text-[10px] md:text-xs lg:text-sm text-[#17012C] cursor-pointer leading-none'>
                                    READ MORE
                                    <img className='w-3.5 h-fit' src="right-arrow.png" alt="right-arrow" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img className='absolute bottom-1/5 left-0 w-12 sm:w-16 md:w-20 lg:w-28 h-fit' src="speaker-3.png" alt="speaker-3" />
            <img className='absolute top-1/4 right-4 sm:right-6 md:right-8 lg:right-10 w-10 md:w-14 lg:w-20 h-fit' src="energy-2.png" alt="energy-2" />
        </div>
    )
}

export default Services