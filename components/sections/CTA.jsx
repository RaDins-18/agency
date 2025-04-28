import React from 'react'

const CTA = () => {
    return (
        <div className='hidden lg:flex justify-center pt-[80px] bg-[#F6F3FE]'>
            <div className="w-[72%] h-full flex justify-between items-center px-10 bg-[url('/background-1.jpeg')] bg-cover bg-center rounded-3xl gap-8">
                <div className='min-w-[180px] max-w-[270px] -mt-[80px] self-end'>
                    <img className='w-fit h-fit' src="boy-3.png" alt="boy-3" />
                </div>
                <h2 className='max-w-[250px] text-[150%] font-bold py-6'>
                    Stay Connected With Cutting Edge IT
                </h2>
                <div className='flex cursor-pointer'>
                    <div className='main group flex justify-center items-center relative'>
                        <div className='h-0 group-hover:h-full transition-all duration-300 ease-in-out w-full bg-white absolute rounded-full'></div>
                        <button className='text-[#17012C] whitespace-nowrap text-xs font-semibold bg-white rounded-full h-10 px-6 cursor-pointer uppercase z-10'>talk TO A SPECIALIST</button>
                        <div className='flex justify-center items-center bg-white rounded-full min-w-10 min-h-10 group-hover:-ml-4 lg:group-hover:-ml-5 transition-all duration-300 ease-in-out z-10'>
                            <img className='w-3 lg:w-4 h-fit' src="right-arrow.png" alt="right-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA