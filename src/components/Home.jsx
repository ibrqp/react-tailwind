import React, { useState, useEffect } from "react";
import img from "../assets/hero-img.jpeg";
import { listProyek } from "../data/data.js";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const [selectedProyek, setSelectedProyek] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

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
                <img
                    src={img}
                    alt="Profile"
                    className="h-19 w-19 rounded"
                />
            </div>

            {/* Intro */}
            <div className="pt-10 max-w-2xl">
                <p className="text-[18px] md:text-[20px] leading-relaxed">
                    Hey, I'm Ibrahim, a Software Developer with <b>3 years of experience</b>,
                    designing and developing web and application products with a strong focus
                    on clean code, performance, and user experience.
                </p>
            </div>

            {/* Social */}
            <div className="pt-10">
                <ul className="flex flex-wrap items-center gap-4 text-[15px]">
                    <li><a className="text-gray-500 hover:text-black" href="https://x.com/ibrawsl" target="_blank">Twitter / X</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://github.com/ibrqp" target="_blank">GitHub</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://figma.com" target="_blank">Figma</a></li>
                    <li><a className="text-gray-500 hover:text-black" href="https://instagram.com/ibrqp" target="_blank">Instagram</a></li>
                </ul>
            </div>

            {/* Project Grid */}
            <div className="pt-30 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 my-10 pb-10">
                {listProyek.map((proyek) => (
                    <div
                        key={proyek.id}
                        data-aos="fade-up"
                        data-aos-delay={proyek.dad || 0}
                    >
                        <div className="mb-2 text-[12px]">
                            <p className="text-black">
                                {proyek.nama}{" "}
                                <span className="text-gray-500">{proyek.kategori}</span>
                            </p>
                        </div>

                        <div
                            onClick={() => {
                                setSelectedProyek(proyek);
                                setActiveImage(0);
                            }}
                            className="p-4 bg-[#f2f2f2] rounded-sm flex items-center justify-center hover:opacity-80 cursor-pointer transition"
                        >
                            <img
                                src={proyek.gambar[0]}
                                alt={proyek.nama}
                                className="h-70 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProyek && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white max-w-lg w-full rounded-md relative shadow-lg animate__animated animate__fadeIn">

                        {/* Modal Header */}
                        <div className="flex items-start justify-between border-b border-gray-200 px-6 py-4">
                            <div>
                                <h2 className="text-lg font-semibold">{selectedProyek.nama}</h2>
                                <p className="text-sm text-gray-500">
                                    {selectedProyek.kategori}
                                    {selectedProyek.tahun && ` • ${selectedProyek.tahun}`}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedProyek(null)}
                                className="text-gray-400 hover:text-black text-lg"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-4 space-y-4">

                            {/* Main Image */}
                            <img
                                key={activeImage}
                                src={selectedProyek.gambar[activeImage]}
                                alt="Project preview"
                                className="w-full rounded-md object-cover transition-opacity duration-300"
                            />

                            {/* Thumbnails */}
                            {selectedProyek.gambar.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto">
                                    {selectedProyek.gambar.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            className={`border rounded-md p-1 transition
                                                ${activeImage === index
                                                    ? "border-black"
                                                    : "border-gray-200"
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="h-14 w-20 object-cover rounded"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {selectedProyek.deskripsi || "No description available for this project."}
                            </p>

                            {/* External Link */}
                            {selectedProyek.link && (
                                <a
                                    href={selectedProyek.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    {selectedProyek.link}
                                </a>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 text-sm">
                            <span className="text-gray-400">Portfolio Project</span>

                            <div className="flex gap-3">
                                {selectedProyek.link && (
                                    <a
                                        href={selectedProyek.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-black text-white rounded text-xs hover:opacity-90"
                                    >
                                        View Project
                                    </a>
                                )}

                                <button
                                    onClick={() => setSelectedProyek(null)}
                                    className="px-4 py-2 border rounded text-xs hover:bg-gray-100"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="flex flex-col items-center md:flex-row justify-between gap-3 text-[12px] text-gray-500 mb-50">
                <p className="max-w-md">
                    All designs on this website were created by Ibrahim Kıl.
                    Some of the featured works are conceptual pieces and may not represent real products.
                </p>
                <p className="md:text-right">© 2025 Ibrahim. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Home;
