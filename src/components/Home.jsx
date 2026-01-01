import React from 'react'
import img from '../assets/img.jpg'
import DataImage, { listProyek } from '../data/data.js'
import { useState } from 'react'


import { } from '../data/data.js'
const Home = () => {
    const [selectedProyek, setSelectedProyek] = useState(null)

    return (
        <div className="container mx-auto px-6 md:px-20 lg:px-35 flex flex-col justify-center ">
            <div className='mt-15 text-[14px] '>
                <p className='text-gray-400'>Software Developer <span className='text-black'>Muchammad Ibrahim Al Amin</span></p>
                <p className='mt-2 text-gray-400'>Currently at <span className='text-black'>Nesabatechno</span></p>
            </div>
            <div className='pt-10 '>
                <img src={img} className='h-17 w-17 rounded' alt="" />
            </div>
            <div className='pt-10' >
                <p className='text-[18px] md:text-[20px] lg:text-[20]'>Hey, I'm Ibrahim A Software Developer With <b>3 years of experience</b>, i design and <br /> develop web/app products, design and create app</p>
            </div>
            <div className='pt-10' >
                <ul className="flex flex-wrap items-center gap-4 text-[15px] md:gap-6 lg:gap-8 text">
                    <li className='text-gray-500 hover:text-black' >
                        <a className='' href="https://x.com/ibrawsl" target='_blank'>Twitter / X</a>
                    </li>
                    <li className='text-gray-500 hover:text-black' >
                        <a href="https://www.linkedin.com/in/muchammad-ibrahim-al-amin-458a28309/" target='_blank'>Linkedin</a>
                    </li>
                    <li className='text-gray-500 hover:text-black' >
                        <a href="https://github.com/ibrqp" target='_blank'>Github</a>
                    </li>
                    <li className='text-gray-500 hover:text-black' >
                        <a href="#">Github</a>
                    </li>
                    <li className='text-gray-500 hover:text-black' >
                        <a href="#">Github</a>
                    </li>
                </ul>
            </div>
            <div className="pt-30 grid grid-cols-1 md:grid-cols-2 gap-8">
                {listProyek.map((proyek) => (
                    <div>
                        <div key={proyek.id} className='mb-2 text-[12px]'>
                            <p className='text-black'>{proyek.nama} <span className='text-gray-500'>{proyek.kategori}</span> </p>
                        </div>
                        <div
                            onClick={() => setSelectedProyek(proyek)} key={proyek.id} className="p-4 bg-[#f2f2f2] rounded-sm flex items-center justify-center hover:opacity-80 transition">
                            <img
                                src={proyek.gambar}
                                alt={proyek.nama}
                                loading="lazy"
                                className="h-70 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {selectedProyek && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto rounded-md relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProyek(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <h2 className="text-[25px] font-bold mb-2 ">
                            {selectedProyek.nama} Website
                        </h2>

                        <p className="text-[15px] text-gray-500 mb-2 ">
                            {selectedProyek.kategori} | {selectedProyek.tahun}

                        </p>

                        <p className="text-[15px] text-blue-700 mb-4">
                            {selectedProyek.link}
                        </p>

                        <img
                            src={selectedProyek.gambar}
                            alt={selectedProyek.nama}
                            className="w-full mb-4 rounded"
                        />

                        <p className="text-[14px] mb-8">
                            <h1 className='text-[18px] mb-2 text-gray-400' >Overview</h1>
                            {selectedProyek.deskripsi}
                        </p>

                        <hr className="mb-4" />

                        {/* Footer */}
                        <div className="flex flex-col items-center md:flex-row justify-between gap-3 text-[12px] text-gray-500">
                            <p>
                                All designs on this website were created by Helin Kıl.
                                Some works are conceptual and may not represent real products.
                            </p>
                            <p className="whitespace-nowrap">
                                © 2025 Helin Kil. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Home
