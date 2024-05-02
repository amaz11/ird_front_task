import React from 'react'
import Image from "next/image";
import book from "../../../public/book.svg"
import { IoCopyOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import getDua from '@/app/services/getDua';

const Dua = async ({ catId }) => {
    // const duas = await getDua(catId);
    // console.log(duas);
    return (
        <div className="h-auto lg:h-[88vh] lg:overflow-y-scroll col-span-full lg:col-span-1">
            {/* <div className="bg-white py-4 px-5 rounded-xl mb-3 font-medium">
                <span className="text-[#4AB57B]">Section: </span>
                <span>The servant is dependent on his Lord</span>
            </div> */}
            {Array(10).fill(1)?.map((item, index) => {
                return (
                    <div className='mb-3' key={index}>
                        <div className="bg-white py-4 px-5 rounded-xl">
                            <div className="space-y-6">
                                <div className='space-y-3 border-b pb-4'>
                                    <div className="flex items-center gap-2">
                                        <Image src={book} width={32} height={32} alt="duacard" />
                                        <span className="font-medium">
                                            ২/১. অধ্যায়ঃ
                                        </span>

                                    </div>
                                    <p className='text-sm font-medium'>নবী (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-এর বাণীঃ ইসলাম পাঁচটি স্তম্ভের উপর প্রতিষ্ঠিত।</p>
                                </div>

                                <p className="text-base font-medium">
                                    আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-এর বাণীঃ ইসলামের স্তম্ভ হচ্ছে পাঁচটিঃ মুখে স্বীকার এবং কাজে পরিণত করাই হচ্ছে ঈমান এবং তা বৃদ্ধি পায় ও হ্রাস পায়। [১] আল্লাহ তা’আলা বলেনঃ “যাতে তারা তাদের ঈমানের সঙ্গে ঈমান মজবুত করে নেয়-(সূরা ফাত্‌হ ৪৮/৪); আমরা তাদের সৎ পথে চলার শক্তি বাড়িয়ে দিয়েছিলাম- (সূরা কাহাফ ১৮/১৩); এবং যারা সৎপথে চলে আল্লাহ তাদের অধিক হিদায়াত দান করেন-(সূরা মারইয়াম ১৯/৭৬); এবং যারা সৎপথ অবলম্বন করে আল্লাহ তাদের হিদায়াত বাড়িয়ে দেন এবং তাদের সৎপথে চলার শক্তি বাড়িয়ে দেন- (সূরা মুহাম্মাদ ৪৭/১৭)। যাতে মু’মিনদের ঈমান বেড়ে যায়-(সূরা মুদদাস্‌সির ৭৪/৩১), আল্লাহ তা’আলা আরো বলেন, এটা তোমাদের মধ্যে কার ঈমান বাড়িয়ে দিল? যারা মু’মিন এ তো তাদের ঈমান বাড়িয়ে দেয়-(সূরা আত্‌-তাওবাহ ৯/১২৪), এবং তাঁর বাণী, “সুতরাং তোমরা তাদের ভয় কর ; একথা তাদের ঈমানের দৃঢ়তা বাড়িয়ে দিল”- (সূরা আল-ইমরান ৩/১৭৩)। “আর এতে তাদের ঈমান ও আনুগত্যই বাড়লো” –(সূরা আহ্‌যাব ৩৩/১৭৩)। “এতে তাদের ঈমান ও আনুগত্য আরও বৃদ্ধি পেল” –(সূরা আহ্‌যাব ৩৩/২২)। আর আল্লাহর জন্য ভালবাসা ও আল্লাহর জন্য ঘৃণা করা ঈমানের অংশ। ‘উমার ইব্‌নু ‘আবদুল ‘আযীয (রহঃ) ‘আদী ইব্‌নু ‘আদী (রহঃ)-এর নিকট এক পত্রে লিখেছিলেন, ‘ঈমানের কতকগুলো ফর্‌য, কতকগুলো হুকুম-আহকাম, বিধি-নিষেধ এবং সুন্নাত রয়েছে। যে এগুলো পূর্ণভাবে আদায় করে, তার ঈমান পূর্ণ হয়। আর যে এগুলো পূর্ণভাবে আদায় করে না, তার ঈমান পূর্ণ হয় না। আমি যদি বেঁচে থাকি তবে অচিরেই এগুলো তোমাদের নিকট ব্যক্ত করব, যাতে তোমরা তার উপর ‘আমল করতে পার। আর যদি আমার মৃত্যু হয় তাহলে জেনে রাখ, তোমাদের সাহচর্যে থাকার জন্য আমি আকাঙ্ক্ষিত নই’। ইবরাহীম (‘আঃ) বলেন, ‘তবে এ তো কেবল চিত্ত প্রশান্তির জন্য’- (সূরা আল-বাক্বারাহ ২/২৬), মু’আয (রাঃ) বলেন, “এসো আমাদের সঙ্গে বস, কিছুক্ষণ ঈমানের আলোচনা করি”; ইব্‌নু মাস’উদ (রাঃ) বলেন, ‘ইয়াকীন হল পূর্ণ ঈমান’, ইব্‌নু ‘উমার (রাঃ) বলেন, ‘বান্দা প্রকৃত তাকওয়ায় পৌছতে পারে না, যতক্ষণ পর্যন্ত সে, মনে যে বিষয়ের সন্দেহের সৃষ্টি করে, তা পরিত্যাগ না করে’; মুজাহিদ (রহঃ) এ আয়াতের ব্যাখ্যায় বলেন, “অর্থাৎ হে মুহাম্মাদ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) ! আমি আপনাকে এবং নূহকে একই ধর্মের আদেশ করেছি”- (সূরা শূরা ৪২/১৩), ইব্‌নু ‘আব্বাস (রাঃ) বলেন, “অর্থাৎ পথ ও পন্থা”- (সূরা আল-মায়িদাহ ৫/৪৮)।
                                </p>
                            </div>

                            <div className="flex items-center gap-6 justify-end text-[#7E7E7E] mt-10">
                                <IoCopyOutline size={20} />
                                <IoBookOutline size={20} />
                                <IoBulbOutline size={20} />
                                <IoShareSocialOutline size={20} />
                                <MdOutlineReport size={20} />

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Dua