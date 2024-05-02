'use client'
import { BarContext } from '@/app/context/BarControl';
import React, { useContext, useState } from 'react'


const Settingbar = () => {
    const { settingBar, setSettingBar } = useContext(BarContext)
    const [dropdown, setdropdown] = useState(false)
    return (
        <div className=''>
            <div className={`bg-white z-40 w-64 fixed top-0 right-0 pb-4 ${settingBar ? "transition-all duration-500" : "-mr-64"} xl:w-full xl:static xl:rounded-xl mb-7`}>
                <div className="text-center text-black text-[20px] py-4">
                    সেটিংস
                </div>
                <div className="px-4 space-y-4">
                    <div class="relative">
                        <p className='text-sm mb-2 font-medium'>আরবি ফন্ট সিলেক্ট করুন</p>
                        <button onClick={() => setdropdown(!dropdown)} className="border border-[#DEE1E5] font-semibold py-2 px-4 rounded-lg flex justify-between items-center w-full">
                            <span className="mr-1">Select Arabic Font</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className={`absolute ${dropdown ? 'block' : 'hidden'} text-gray-700 pt-1 top-20 shadow-md rounded-md w-full`}>
                            <li className=""><a className="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                            <li className=""><a className="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                            <li className=""><a className="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">Three</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-sm mb-3 font-medium'>এরাবিক ফন্ট সাইজ</p>
                        <input type="range" min="1" max="100" className='w-full accent' value="50"></input>
                    </div>
                    <div className="">
                        <p className='text-sm mb-3 font-medium'>এরাবিক ফন্ট সাইজ</p>
                        <input type="range" min="1" max="100" className='w-full accent' value="50"></input>
                    </div>
                </div>
            </div>

            <div className='bg-[#34AB82] p-5 space-y-3 rounded-lg'>
                <h4 className='font-bold text-2xl text-white'>
                    আপনিও সদাকায়ে জারিয়াতে অংশ নিন
                </h4>
                <p className='text-[#D6EEE6] text-sm'>
                    আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
                </p>
                <div className='flex justify-center items-center pt-4'>
                    <button className='py-3 px-5 bg-white text-[#2B9E76] rounded-md text-sm font-semibold flex gap-3 items-center'>সাপোর্ট করুন</button>

                </div>
            </div>
            {settingBar ? <div className='bg-black opacity-20 fixed top-0 left-0 w-full h-full z-30' onClick={() => setSettingBar(!settingBar)}></div> : null}
        </div>
    )
}

export default Settingbar