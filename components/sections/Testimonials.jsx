'use client'

import React, { useEffect, useRef, useState } from 'react'

const reviews = [
    {
        id: "1",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Courtney Henry",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "2",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Esther Howard",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "3",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Courtney Henry",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "4",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Esther Howard",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "5",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Esther Howard",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "6",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Courtney Henry",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "7",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Esther Howard",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "8",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Courtney Henry",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "9",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Esther Howard",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: "10",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Courtney Henry",
        occupation: "Nursing Assistant",
        description: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
]

const Testimonials = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(0);
    
    const scrollRef = useRef(null);
    const scrollRef1 = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef1.current || isScrolling) return;
        setIsScrolling(true);
        // Set responsive scroll distance
        let scrollAmount = 460; // default
        if (window.innerWidth < 640) {
            scrollAmount = 280;
        }
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
        setScrollIndex(prev => direction === "right" ? prev + 1 : Math.max(prev - 1, 0));
        setTimeout(() => setIsScrolling(false), 500);
    };
    
    const scroll1 = (direction) => {
        if (!scrollRef1.current || isScrolling) return;

        setIsScrolling(true); // Disable buttons

        scrollRef1.current.scrollBy({
            left: direction === "left" ? -180 : 180,
            behavior: "smooth",
        });

        setTimeout(() => setIsScrolling(false), 500);
    };

    return (
        <div className='flex justify-center py-16 sm:py-20 md:py-24 lg:py-28'>
            <div className='w-[75%] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14'>
                <div className='flex flex-col gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>TESTIMONILAS</p>
                    </button>
                    <div className='flex flex-col lg:flex-row justify-between gap-6'>
                        <h2 className='lg:w-[620px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#17012C] leading-8 sm:leading-10 md:leading-12 lg:leading-14'>What Our Awesome
                            Customers Say</h2>
                        <span className='h-fit text-xs sm:text-sm mt-2 lg:w-[420px] text-[#504E4E] py-1 px-4 border-l-2 border-l-[#6A47ED] font-semibold italic'>
                            The a long established fact that a reader will be distracted
                            the readable content of page when looking at layout the
                            point of using lorem Ipsum
                        </span>
                    </div>
                </div>
                <div className='flex flex-wrap flex-col lg:flex-row justify-between gap-8 sm:gap-9 md:gap-10 lg:gap-12'>
                    <div className='flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10'>
                        <div ref={scrollRef1} className='w-[180px] flex overflow-hidden'>
                            {
                                reviews.slice(2).map((review) => (
                                    <div key={review.id} className='min-w-[180px] flex items-center gap-2'>
                                        <span className='h-[50px] w-[50px] border-2 border-[#FFFFFF] rounded-full'>
                                            <img className='h-full w-full rounded-full' src={review.image} alt={`dp-${review.id}`} />
                                        </span>
                                        <div className='flex flex-col gap-1'>
                                            <img className='w-16 h-fit' src="five-star.png" alt="five-star" />
                                            <p className='text-xs sm:text-[12.5px] md:text-[13px] lg:text-sm text-[#504E4E] whitespace-normal'>15k+(reviews)</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex gap-2 mr-3.5'>
                            <button
                                disabled={scrollIndex === 0 || isScrolling}
                                onClick={() => { scroll("left"); scroll1("left"); }}
                                className={`w-8 h-8 sm:w-[34px] sm:h-[34px] md:w-[36px] md:h-[36px] lg:w-10 lg:h-10 flex justify-center items-center leading-none rounded-full cursor-pointer ${scrollIndex === 0 ? 'bg-white drop-shadow-custom-30' : 'bg-[#6A47ED]'
                                    }`}
                            >
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit rotate-180' src={scrollIndex === 0 ? 'right-arrow.png' : 'right-arrow-white.png'} alt="left-arrow" />
                            </button>
                            <button
                                disabled={scrollIndex === 7 || isScrolling}
                                onClick={() => { scroll("right"); scroll1("right"); }}
                                className={`w-8 h-8 sm:w-[34px] sm:h-[34px] md:w-[36px] md:h-[36px] lg:w-10 lg:h-10 flex justify-center items-center leading-none rounded-full cursor-pointer ${scrollIndex === 7 ? 'bg-white drop-shadow-custom-30' : 'bg-[#6A47ED]'
                                    }`}
                            >
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src={scrollIndex === 7 ? 'right-arrow.png' : 'right-arrow-white.png'} alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                    <div ref={scrollRef} className='flex w-[280px] testi lg:w-[920px] overflow-hidden'>
                        {
                            reviews.map((review) => (
                                <div key={review.id} className='min-w-[280px] sm:min-w-[460px] pl-[24px] sm:pl-[28px] md:pl-[32px] lg:pl-[36px]'>
                                    <div className='w-fit flex relative items-center bg-[#F6F3FE] rounded-2xl py-6 sm:py[26px] md:py-[28px] lg:py-8 px-4'>
                                        <img className='h-[100px] sm:h-[115px] md:h-[130px] lg:h-[155px] w-fit absolute left-0' src="border.png" alt="border" />
                                        <span className='absolute -left-[25px] sm:-left-[28px] md:-left-[31px] lg:-left-[35px] border-4 border-[#FFFFFF] bg-[#0000000F] rounded-full z-10'>
                                            <img className='h-[50px] sm:h-[56px] md:h-[62px] lg:h-[70px] w-fit rounded-full' src={review.image} alt={`dp-${review.id}`} />
                                        </span>
                                        <div className='flex flex-col pl-[30px] sm:pl-[36px] md:pl-[42px] lg:pl-[50px] gap-2 sm:gap-[9px] md:gap-[10px] lg:gap-3'>
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col'>
                                                    <img className='h-fit w-16 sm:w-[69px] md:w-[74px] lg:w-20' src="five-star.png" alt="five-star" />
                                                    <h5 className='text-sm sm:text-[15px] md:text-[16] lg:text-lg text-[#17012C] font-semibold'>{review.name}</h5>
                                                    <p className='text-[11px] sm:text-[12px] md:text-[13] lg:text-sm font-normal text-[#504E4E]'>{review.occupation}</p>
                                                </div>
                                                <img className='w-5 sm:w-6 md:w-7 lg:w-8 h-fit' src="bookmark.png" alt="bookmark" />
                                            </div>
                                            <p className='max-w-[320px] text-[11px] sm:text-[12px] md:text-[13] lg:text-sm text-[#504E4E] font-normal'>
                                                {review.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials