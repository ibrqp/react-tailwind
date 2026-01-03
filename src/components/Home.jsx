import React, { useState } from "react";
import img from "../assets/hero-img.jpeg";
import { listProyek } from "../data/data.js";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const [selectedProyek, setSelectedProyek] = useState(null);

    return (
        <div className="container mx-auto px-6 md:px-20 lg:px-35 flex flex-col justify-center">

            {/* Header */}
            <div className="mt-15 text-[14px]">
                <p className="text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
                    Software Developer <span className="text-black">Muchammad Ibrahim Al Amin</span>
                </p>
                <p className="mt-2 text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
                    Currently at <span className="text-black">Nesabatechno</span>
                </p>
            </div>

            {/* Avatar */}
            <div className="pt-10">
                <img src={img} className="h-19 w-19 rounded" alt="Profile" />
            </div>

            {/* Intro */}
            <div className="pt-10">
                <p className="text-[18px] md:text-[20px]">
                    Hey, I'm Ibrahim, a Software Developer with <b> 3 years of experience</b>, designing and developing web and application products with a strong focus on clean code, performance, and user experience.
                </p>
            </div>

            {/* Social */}
            <div className="pt-10">
                <ul className="flex flex-wrap items-center gap-4 text-[15px]">
                    <li><a className="text-gray-500 hover:text-black" href="https://x.com/ibrawsl" target="_blank">Twitter / X</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://github.com/ibrqp" target="_blank">GitHub</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://instagram.com/ibrqp" target="_blank">Figma</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://instagram.com/ibrqp" target="_blank">Instagram</a></li>
                </ul>
            </div>

            {/* Project Grid */}
            <div className="pt-30 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 my-10 pb-10">
                {listProyek.map((proyek) => (
                    <div
                        key={proyek.id}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={proyek.dad}
                        data-aos-once="true"
                    >
                        <div className="mb-2 text-[12px]">
                            <p className="text-black">
                                {proyek.nama}{" "}
                                <span className="text-gray-500">{proyek.kategori}</span>
                            </p>
                        </div>

                        <div
                            onClick={() => setSelectedProyek(proyek)}
                            className="p-4 bg-[#f2f2f2] rounded-sm flex items-center justify-center hover:opacity-80 cursor-pointer"
                        >
                            <img
                                src={proyek.gambar}
                                alt={proyek.nama}
                                className="h-70 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>


            {/* Modal */}
            {selectedProyek && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50  ">
                    <div className="bg-white p-6 max-w-lg w-full rounded-md relative">
                        <button
                            onClick={() => setSelectedProyek(null)}
                            className="absolute top-3 right-3"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold">{selectedProyek.nama}</h2>
                        <p className="text-gray-500">
                            {selectedProyek.kategori} | {selectedProyek.tahun || "-"}
                        </p>

                        <img src={selectedProyek.gambar} className="w-full my-4 rounded" />

                        <p className="text-sm">
                            {selectedProyek.deskripsi || "No description available."}
                        </p>
                    </div>
                </div>
            )}

            <div className='flex flex-col items-center md:flex-row justify-between gap-3 text-[12px] text-gray-500 mb-50'>
                <p className="max-w-md">All designs on this website were created by Helin Kıl. Some of the featured works are conceptual pieces and may not represent real products.</p>
                <p className="md:text-right">© 2025 Ibrahim. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Home;
