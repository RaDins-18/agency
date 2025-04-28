'use client'

import React, { useEffect, useState } from 'react'
import { SpinningText } from '../ui/spinning-text'

const Hero = () => {
  const [radius, setRadius] = useState(6);
  const [fontSize, setFontSize] = useState(0.6);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 1024px)"); // Tailwind lg+
    const smQuery = window.matchMedia("(min-width: 640px)");  // Tailwind sm+

    const handleChange = () => {
      if (mdQuery.matches) {
        setRadius(6);
        setFontSize(0.6);
      } else if (smQuery.matches) {
        setRadius(5);
        setFontSize(0.5);
      } else {
        setRadius(4.3);
        setFontSize(0.43);
      }
    };

    // Initial set
    handleChange();

    // Listen to both media queries
    mdQuery.addEventListener("change", handleChange);
    smQuery.addEventListener("change", handleChange);

    return () => {
      mdQuery.removeEventListener("change", handleChange);
      smQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className='flex flex-col w-full bg-[#040E46] pt-12 md:pt-16 lg:pt-20 -mb-[110px] md:-mb-[100px]'>
      <div className='flex h-48 justify-between w-full overflow-hidden'>
        <div className='w-[56px] sm:w-fit self-end flex justify-start'>
          <div className='flex justify-center items-center rounded-full h-20 w-20 md:h-32 md:w-32 lg:h-44 lg:w-44 -ml-8 -mb-2 md:-ml-12 md:-mb-4 lg:-ml-16 lg:-mb-7 bg-linear-to-t from-20% from-[#040E46] to-100% to-[#36589e]'>
            <img className='h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20 -mt-3 -mr-5 md:-mt-5 md:-mr-7 lg:-mt-8 lg:-mr-10 opacity-90' src="speaker.png" alt="speaker" />
          </div>
        </div>
        <div className='self-center flex justify-center'>
          <div className='relative px-3'>
            <h1 className='text-center text-stroke text-[3.6rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold leading-tight'>BOOST NOW</h1>
            <h1 className='text-center absolute top-0 left-2.5 sm:left-[18px] md:left-[20px] lg:left-[22px] text-[3.6rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold leading-tight'>BOOST NOW</h1>
          </div>
        </div>
        <div className='w-[60px] sm:w-fit self-start flex justify-end'>
          <img className='h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 mr-3 md:mr-5 lg:mr-8 rounded-ee-[64px]' src="energy.png" alt="energy" />
        </div>
      </div>
      <div className='h-full w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-4'>
        <div className='max-w-[250px] sm:max-w-[50%] md:max-w-[70%] lg:w-[33%] flex justify-center lg:justify-end'>
          <img className='w-10 sm:w-11 md:w-12 lg:w-13 h-fit self-end mb-2 md:mb-6 lg:mb-12 mr-5' src="triple-arrow.png" alt="triple-arrow" />
          <div className='flex flex-col h-full w-fit justify-center gap-2 lg:gap-4'>
            <h4 className='text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-widest uppercase w-fit'>go for advertising</h4>
            <h4 className='text-3xl sm:text-[40px] md:text-[50px] lg:text-6xl font-extrabold mb-1 lg:mb-2 w-fit'>Think Digital</h4>
            <p className='text-[10px] sm:text-[11px] md:text-xs lg:text-sm max-w-[420px]'>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised
            </p>
          </div>
        </div>
        <div className='w-[36%] hidden lg:flex justify-center items-end'>
          <img className='w-[410px] h-fit' src="boy.png" alt="boy" />
        </div>
        <div className='w-full lg:w-[30%] flex justify-end items-end'>
          <div className='w-full flex flex-col items-center lg:items-stretch justify-between overflow-hidden '>
            <div className='max-w-[250px] sm:max-w-[50%] md:max-w-[70%] lg:max-w-full flex justify-between'>
              <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                <div className='h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 relative flex justify-center items-center rounded-full bg-linear-to-t from-[#1b2557] to-[#60678a] border border-white mb-2'>
                  <SpinningText
                    radius={radius}
                    fontSize={fontSize}
                    variants={{
                      container: {
                        hidden: {
                          opacity: 1,
                        },
                        visible: {
                          opacity: 1,
                          rotate: 360,
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 4,
                            repeat: Infinity,
                            staggerChildren: 0.03,
                          },
                        },
                      },
                      item: {
                        hidden: {
                          opacity: 0,
                          filter: "blur(2px)",
                        },
                        visible: {
                          opacity: 1,
                          filter: "blur(0px)",
                        },
                      },
                    }}
                    className="font-[300]"
                  >
                    {`P L A Y  I N T R O  V I D E O  •  P L A Y  I N T R O  V I D E O  •  `}
                  </SpinningText>
                  <img className='absolute w-1.5 sm:w-2 lg:w-2.5 h-fit' src="play.png" alt="play" />
                </div>
                <p className='text-[10px] sm:text-[11px] md:text-xs lg:text-sm max-w-[340px] mb-2'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form, by injected.
                </p>
                <img className='h-2.5 sm:h-3 md:h-3.5 lg:h-4 w-fit mb-1 lg:mb-0' src="star-text.png" alt="star-text" />
                <div className='flex items-center'>
                  <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white' src="https://randomuser.me/api/portraits/men/1.jpg" alt="user-1" />
                  <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/2.jpg" alt="user-2" />
                  <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/3.jpg" alt="user-3" />
                  <img className='h-[22px] sm:h-[26px] md:h-[29px] lg:h-8 w-[22px] sm:w-[26px] md:w-[29px] lg:w-8 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/4.jpg" alt="user-4" />
                  <p className='text-[10.5px] sm:text-[11px] md:text-[11.5px] lg:text-xs ml-2'>450+ reviews</p>
                </div>
              </div>
              <img className='w-10 sm:w-11 md:w-12 lg:w-13 h-fit self-start mt-3 mr-3 md:mt-4 md:mr-4 lg:mt-5 lg:mr-5' src="triple-arrow.png" alt="triple-arrow" />
            </div>
            <div className='self-end hidden lg:flex justify-center items-center rounded-full h-18 w-18 md:h-28 md:w-28 lg:h-40 lg:w-40 -mr-3 -mb-4 md:-mr-4 md:-mb-7 lg:-mr-5 lg:-mb-10 bg-linear-to-t from-20% from-[#040E46] to-100% to-[#36589e]'>
              <img className='h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 -mt-12 mr-4 md:-mt-[70px] md:mr-5 lg:-mt-24 lg:mr-6 opacity-90' src="rocket.png" alt="rocket" />
            </div>
          </div>
        </div>
        <div className='w-full flex lg:hidden justify-center relative -mt-2 overflow-hidden'>
          <div className='max-w-[250px] sm:max-w-[50%] md:max-w-[70%] flex justify-center'>
            <img className='w-[410px] h-fit' src="boy.png" alt="boy" />
          </div>
          <div className='absolute bottom-0 right-0 flex justify-center items-center rounded-full h-18 w-18 md:h-28 md:w-28 lg:h-40 lg:w-40 -mr-3 -mb-4 md:-mr-4 md:-mb-7 lg:-mr-5 lg:-mb-10 bg-linear-to-t from-20% from-[#040E46] to-100% to-[#36589e]'>
            <img className='h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 -mt-12 mr-4 md:-mt-[70px] md:mr-5 lg:-mt-24 lg:mr-6 opacity-90' src="rocket.png" alt="rocket" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero