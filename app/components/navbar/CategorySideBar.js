'use client'
import { BarContext } from '@/app/context/BarControl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import CategoryLoading from '../skeletonLoading/CategoryLoading';
import { LuHexagon } from "react-icons/lu";
const CategorySideBar = () => {
    const { categoryBar, setCategoryBar } = useContext(BarContext)
    const [activeCategory, setActiveCategory] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [categoryHeadState, setCategoryHeadState] = useState('books')



    return (
        <div className=''>
            <div className={`bg-white fixed top-0 left-0 z-30 w-64 sm:w-72 md:w-80 ${categoryBar ? "transition-all duration-500" : "-ml-64 sm:-ml-72 md:-ml-80"} lg:ml-0 lg:w-full lg:rounded-2xl  lg:h-[75vh]  xl:h-[87vh] overflow-hidden lg:relative`}>
                <div className=" lg:rounded-t-2xl flex justify-around items-center border-b">
                    <div className={`text-center py-3 w-full cursor-pointer ${categoryHeadState === 'books' ? 'bg-[#2B9E76] text-white' : 'text-black'}`} onClick={() => setCategoryHeadState('books')}>
                        Books
                    </div>
                    <div className={`text-center py-3 w-full cursor-pointer ${categoryHeadState === 'chapter' ? 'bg-[#2B9E76] text-white' : 'text-black'}`} onClick={() => setCategoryHeadState('chapter')}>
                        Chapter
                    </div>
                </div>
                <div className="flex px-4 py-3 pb-5 relative">
                    <div className="absolute top-4 rounded-lg  py-2 px-4">
                        <IoIosSearch size={24} color='#767777' />
                    </div>
                    <input type="text" className="focus:outline-green-500 rounded-lg py-3 px-4 pl-12 w-full text-base bg-[#F2F4F6] shadow-sm" placeholder="Search For Filter" />
                </div>

                {/* category items */}
                <div className="px-4 space-y-1 pb-48 h-[100vh] lg:h-full overflow-y-scroll">

                    {isLoading ? Array(10).fill(1).map((i, j) => <CategoryLoading key={j} />) : categoryHeadState === 'books' ?
                        Array(10).fill(1).map((item, j) => <div key={item.id} className="group">
                            {/* header  */}
                            <div onClick={() => { setActiveCategory(j) }} className={`flex items-center justify-between p-4 rounded-xl group-hover:bg-[#EBFCF6] ${activeCategory === j ? "bg-[#EBFCF6]" : ""}  cursor-pointer`}>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <svg
                                            width="50px"
                                            height="50px"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        // {...props}
                                        >
                                            <path
                                                d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
                                                fill={`${activeCategory === j ? "#2B9E76" : "#F1F5F4"}`}
                                            />

                                        </svg>
                                        <span className={`absolute top-3.5 left-5 ${activeCategory === j ? "text-white" : "text-[#9CA3BC]"}`}>{j + 1}</span>
                                    </div>
                                    <div>
                                        <span className="text-black font-medium">
                                            ওহীর সূচনা অধ্যায়</span>
                                        <br />
                                        <span className="text-[#7E7E7E] text-xs">Total Hadis:  ১ - ৭</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        : Array(10).fill(1).map((item, j) => <div key={item.id} className="group">
                            {/* header  */}
                            <div onClick={() => { setActiveCategory(j) }} className={`flex items-center justify-between p-4 rounded-xl group-hover:bg-[#EBFCF6] ${activeCategory === j ? "bg-[#EBFCF6]" : ""}  cursor-pointer`}>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <svg
                                            width="50px"
                                            height="50px"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        // {...props}
                                        >
                                            <path
                                                d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
                                                fill={`${activeCategory === j ? "#2B9E76" : "#F1F5F4"}`}
                                            />

                                        </svg>
                                        <span className={`absolute top-3.5 left-5 ${activeCategory === j ? "text-white" : "text-[#9CA3BC]"}`}>{j + 1}</span>
                                    </div>
                                    <div>
                                        <span className="text-black font-medium">
                                            ওহীর সূচনা অধ্যায়</span>
                                        <br />
                                        <span className="text-[#7E7E7E] text-xs">Total Hadis:  ১ - ৭</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                    <div className="bg-white py-2 w-full absolute left-0 bottom-0">

                    </div>
                </div>
            </div>
            {categoryBar ? <div className='bg-black opacity-20 fixed top-0 left-0 w-full h-full z-20'
                onClick={() => setCategoryBar(!categoryBar)}
            ></div> : null}

        </div>
    )
}

export default CategorySideBar
