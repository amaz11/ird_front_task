'use client'
import React from 'react'
import logo from "../../../public/home-logo.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className="fixed w-full  bottom-0 left-0 z-10 xl:static xl:pb-0 xl:w-auto">
            <div className="flex flex-row md:flex-col items-center justify-center xl:justify-between xl:h-full bg-white text-black w-full xl:w-[100px] p-4 rounded-3xl rounded-b-none xl:rounded-none ">
                <div className="hidden xl:block">
                    <Image src={logo} width={48} height={48} alt='logo' />
                </div>
                <ul className="flex flex-row justify-between gap-6 w-full items-center xl:flex-col">
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md "><FiHome size={24} className="text-[#5C5C5C] font-medium" /></li>
                    <li className="bg-[#2B9F76] p-4 rounded-md "><MdOutlineDashboard size={24} className="text-white font-medium" /></li>
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md "><IoBulbOutline size={24} className="text-[#5C5C5C] font-medium" /></li>
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md "><IoBookmarkOutline size={24} className="text-[#5C5C5C] font-medium" /></li>
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md "><RiMedicineBottleLine size={24} className="text-[#5C5C5C] font-medium" /></li>
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md  hidden xl:block"><IoChatbubbleOutline size={24} className="text-[#5C5C5C] font-medium" /></li>
                    <li className="hover:bg-[#f6f6f6] p-4 rounded-md  hidden xl:block"><IoBookOutline size={24} className="text-[#5C5C5C] font-medium" /></li>

                </ul>
                <div className="hidden xl:block opacity-0">
                </div>
            </div>
        </div>
    )
}

export default Sidebar