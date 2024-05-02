'use client'
import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { BarContext } from '@/app/context/BarControl';
import { FaHandHoldingHeart } from "react-icons/fa";

const Topbar = () => {
    const { settingBar, setSettingBar } = useContext(BarContext)

    return (
        <nav className="w-full fixed mb-14 z-20 top-0 left-0  xl:static xl:mb-auto xl:bg-transparent ">
            <div className='bg-white flex justify-between items-center px-6 py-4 xl:px-0 xl:py-4'>
                <div>
                    <h4 className="font-bold col-span-2 text-[16px]">হাদিস সমূহ</h4>
                    <span className='text-xs'>হাদিস পড়ুন শিখুন এবং জানুন</span>
                </div>
                <div className='flex justify-between items-center gap-6 pr-6'>
                    <div className="hidden lg:flex justify-end pr-4 relative">
                        <input type="text" className="outline-[#6F6F6F] border-2 border-[#DEE1E5] rounded-lg w-full py-3 px-4 pl-12 text-base bg-white shadow-sm" placeholder="Search Hadith" />
                        <div className="absolute top-1 rounded-lg left-0 py-2 px-4">
                            <IoIosSearch className='text-[#6F6F6F]' size={24} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-4 col-span-2">
                        <button className='py-3 px-5 bg-[#2B9E76] text-white rounded-md text-sm font-semibold flex gap-3 items-center'>সাপোর্ট করুন <FaHandHoldingHeart size={24} className="text-white" /></button>
                        <GoGear size={24} className="text-[#868686] cursor-pointer xl:hidden" onClick={() => setSettingBar(!settingBar)} />
                    </div>
                </div>


            </div>


        </nav>
    )
}

export default Topbar