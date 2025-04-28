import React from 'react'

const Blogs = [
    {
        id: "1",
        image: "blog-1.jpeg",
        title: "Importers achieve savings through the First Sale rule!",
    },
    {
        id: "2",
        image: "blog-2.jpeg",
        title: "Is now the right time to invest in an enterprise",
    },
    {
        id: "3",
        image: "blog-3.jpeg",
        title: "Focus logistics secure new landmark Contracts",
    },
    {
        id: "4",
        image: "blog-4.jpeg",
        title: "Transid Named a Finalist For Year 25 Best Choice",
    },
]

const Blog = () => {
    return (
        <div className='flex justify-center py-16 sm:py-20 md:py-24 lg:py-28 bg-[#F6F3FE]'>
            <div className='w-[80%] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <button className='text-[10px] md:text-xs lg:text-sm bg-[#384BFF1A] py-2 px-4 rounded-full w-fit'>
                        <p className='font-semibold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent'>BLOG & NEWS</p>
                    </button>
                    <h2 className='lg:w-[620px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-[#17012C] leading-8 sm:leading-10 md:leading-12 lg:leading-14'>
                        Use SEO To Drive Growth At Your Business
                    </h2>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {Blogs.map((blog) => (
                        <div key={blog.id} className='max-w-[320px] flex flex-col gap-6 bg-[#FFFFFF] drop-shadow-custom-40 rounded-2xl p-4'>
                            <img className='w-fit h-fit rounded-2xl' src={blog.image} alt={`blog-${blog.id}`} />
                            <div className='flex flex-col gap-6 px-3'>
                                <div className='flex gap-6'>
                                    <span className='flex items-center gap-2'>
                                        <img className='h-3 w-fit' src="comment.png" alt="comment" />
                                        <p className='text-xs text-[#504E4E] font-normal'>0 Comment</p>
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <img className='h-3 w-fit' src="calender.png" alt="calender" />
                                        <p className='text-xs text-[#504E4E] font-normal'>September 6, 2024</p>
                                    </span>
                                </div>
                                <h2 className='text-base sm:text-[16.5px] md:text-[17px] lg:text-lg text-[#17012C] font-extrabold -mt-3.5 capitalize'>
                                    {blog.title}
                                </h2>
                                <div className='flex justify-between items-center mb-3 -mt-1'>
                                    <button className='flex items-center gap-2 whitespace-nowrap cursor-pointer text-xs text-[#535353]'>
                                        Read More
                                        <img className='h-2 w-fit' src="right-arrow.png" alt="right-arrow" />
                                    </button>
                                    <div className='flex items-center'>
                                        <img className='h-6 w-6 rounded-full border border-white' src="https://randomuser.me/api/portraits/men/1.jpg" alt="user-1" />
                                        <img className='h-6 w-6 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/2.jpg" alt="user-2" />
                                        <img className='h-6 w-6 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/3.jpg" alt="user-3" />
                                        <img className='h-6 w-6 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/4.jpg" alt="user-4" />
                                        <img className='h-6 w-6 rounded-full border border-white -ml-2' src="https://randomuser.me/api/portraits/men/5.jpg" alt="user-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog