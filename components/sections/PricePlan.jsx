'use client'

import NumberFlow from "@number-flow/react"
import { useState } from "react"
import { Tab } from "../ui/pricing-tab"

const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

const TIERS = [
    {
        id: "premium",
        name: "Premium",
        price: {
            monthly: 99,
            yearly: 799,
        }
    },
    {
        id: "extended",
        name: "Extended",
        price: {
            monthly: 149,
            yearly: 1199,
        }
    }
]

const PricePlan = () => {
    const [selectedFrequency, setSelectedFrequency] = useState(PAYMENT_FREQUENCIES[0])

    return (
        <div className='flex justify-center relative bg-[#F6F3FE] py-16 sm:py-20 md:py-24 lg:py-28'>
            <div className='w-[75%] flex flex-wrap sm:justify-center lg:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14'>
                <div className='relative flex flex-col gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>OUR PRICNG PLAN</p>
                    </button>
                    <h2 className='lg:w-[350px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-14 mb-3 text-[#17012C]'>
                        Our Awesome Pricing Plan
                    </h2>
                    <div className='flex gap-2'>
                        <div className="h-fit p-1 flex items-center gap-2 border bg-white border-[#E5E5E5] rounded-full">
                            {PAYMENT_FREQUENCIES.map((freq) => (
                                <Tab
                                    key={freq}
                                    text={freq}
                                    selected={selectedFrequency === freq}
                                    setSelected={setSelectedFrequency} />
                            ))}
                        </div>
                        <div className='relative flex gap-2'>
                            <img className='w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-fit' src="rounded-arrow.png" alt="rounded-arrow" />
                            <p className='self-end text-[#6A47ED] text-xs md:text-sm lg:text-base'>Save 25%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-fit flex flex-wrap justify-center gap-4 '>
                    <div className='w-full sm:w-[380px] flex flex-col p-6 gap-8 rounded-3xl bg-white border border-[#D4DCFF]'>
                        <div className='flex justify-between items-center bg-[#17012C] p-4 rounded-xl md:rounded-2xl'>
                            <div className='flex flex-col gap-3'>
                                <h6 className='text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap'>Premium Plan</h6>
                                <span className='flex gap-1 lg:mb-1'>
                                    <h2 className='leading-none text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold -mb-1 sm:-mb-[6px] md:-mb-[8px] lg:-mb-3'>
                                        $
                                        <NumberFlow
                                            value={TIERS[0].price[selectedFrequency]}
                                        />
                                    </h2>
                                    <p className='text-[10px] sm:text-[11px] md:text-xs lg:text-sm self-end capitalize'>/ {selectedFrequency}</p>
                                </span>
                            </div>
                            <img className='w-10 sm:w-11 md:w-12 lg:w-14 h-fit' src="cloud.png" alt="cloud" />
                        </div>
                        <div className='flex flex-col gap-3 mb-1 sm:mb-[5px] md:mb-[6px] lg:mb-2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>100 GB SSD Storage</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Weekly Backups</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Unlimited Free SSL</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>24/7 system Monitoring</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Free Domain ($9.99 value)</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Dedicated IP Address</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>20+ Payment Methods</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center border border-[#17012C] bg-[#17012C] p-3 rounded-xl md:rounded-2xl'>
                            <span className='flex items-center gap-2'>
                                <h6 className='text-xs sm:text-[13px] md:text-sm lg:text-base font-semibold'>Get Started Now </h6>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="right-arrow-white.png" alt="right-arrow-white" />
                            </span>
                        </div>
                    </div>
                    <div className='w-full sm:w-[380px] flex flex-col p-6 gap-8 rounded-3xl bg-white border border-[#D4DCFF]'>
                        <div className='flex justify-between items-center bg-[#6A47ED] p-4 rounded-xl md:rounded-2xl'>
                            <div className='flex flex-col gap-3'>
                                <h6 className='text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap'>Extended Plan</h6>
                                <span className='flex gap-1 lg:mb-1'>
                                    <h2 className='leading-none text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold -mb-1 sm:-mb-[6px] md:-mb-[8px] lg:-mb-3'>
                                        $
                                        <NumberFlow
                                            value={TIERS[1].price[selectedFrequency]}
                                        />
                                    </h2>
                                    <p className='text-[10px] sm:text-[11px] md:text-xs lg:text-sm self-end capitalize'>/ {selectedFrequency}</p>
                                </span>
                            </div>
                            <img className='w-10 sm:w-11 md:w-12 lg:w-14 h-fit' src="cloud.png" alt="cloud" />
                        </div>
                        <div className='flex flex-col gap-3 mb-1 sm:mb-[5px] md:mb-[6px] lg:mb-2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>100 GB SSD Storage</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Weekly Backups</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Unlimited Free SSL</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>24/7 system Monitoring</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Free Domain ($9.99 value)</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>Dedicated IP Address</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="tick-2.png" alt="tick-2" />
                                    <p className='text-xs sm:text-[13px] md:text-sm lg:text-base font-medium text-[#504E4E]'>20+ Payment Methods</p>
                                </div>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="question-mark.png" alt="question-mark" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center border border-[#6A47ED] p-3 rounded-xl md:rounded-2xl'>
                            <span className='flex items-center gap-2'>
                                <h6 className='text-xs sm:text-[13px] md:text-sm lg:text-base text-[#6A47ED] font-semibold'>Get Started Now </h6>
                                <img className='w-3 sm:w-[13px] md:w-[14px] lg:w-4 h-fit' src="right-arrow-purple.png" alt="right-arrow-purple" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute right-0 bottom-0 w-14 sm:w-[80px] md:w-[100px] lg:w-32 h-fit" src="blender.png" alt="blender" />
        </div>
    )
}

export default PricePlan