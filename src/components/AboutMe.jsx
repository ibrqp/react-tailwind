import React from 'react'
// import img from '../assets/img.jpg'
import { listKomentar, listPekerjaan } from '../data/data'
const AboutMe = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-35  flex flex-col justify-center ">
      <div className='mt-15 text-[14px] '>
        <p className='text-gray-400'>Software Developer <span className='text-black'>Muchammad Ibrahim Al Amin</span></p>
        <p className='mt-2 text-gray-400'>Currently at <span className='text-black'>Nesabatechno</span></p>
      </div>
      <div className='my-10'>
        <h1 className='my-6 text-3xl' >
          Nice to meet you!
        </h1>
        <p className='my-6'>
          I’ve been working professionally in product design for six years, focusing on 0→1 product development, complex financial flows, and highly interactive interfaces.
        </p>
        <p>
          My approach is rooted in understanding user behavior, aligning design decisions with business goals,
          and crafting digital products that are visually strong, intuitive, and scalable.
        </p>
      </div>
      <div className=' my-7 mb-4 border-b b border-gray-100 '>
        {listPekerjaan.map((pekerjaan) =>
          <div className='flex items-center mb-4' key={pekerjaan.id}>
            <img className='h-12 w-12 mr-3 rounded-sm' src={pekerjaan.gambar} alt="foto" />
            <div className='flex flex-col'>
              <p>{pekerjaan.namaKerja} at <b >{pekerjaan.tempat}</b> </p>
              <p>{pekerjaan.lokasi} <span className='text-gray-400'>{pekerjaan.tahun}</span></p>

            </div>
          </div>
        )}
      </div>
      <div className='border-b b border-gray-100 pb-5 '>
        {listPekerjaan.map((pekerjaan) =>
          <div className='flex items-center mb-2' key={pekerjaan.id}>
            <img className='h-12 w-12 mr-3 rounded-sm' src={pekerjaan.gambar} alt="foto" />
            <div className='flex flex-col'>
              <p>{pekerjaan.namaKerja} at <b >{pekerjaan.tempat}</b> </p>
              <p>{pekerjaan.lokasi} <span className='text-gray-400'>{pekerjaan.tahun}</span></p>

            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-100 my-10 pb-10 ">
        {listKomentar.map((komentar, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col h-full mb-10"
          >
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full"
                src={komentar.gambar}
                alt="foto"
              />

              <div className="flex flex-col">
                <p className="font-semibold text-sm">{komentar.nama}</p>
                <p className="text-xs text-gray-500">{komentar.pekerjaan}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {komentar.isiKomentar}
            </p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center md:flex-row justify-between gap-3 text-[12px] text-gray-500 mb-50'>
          <p className="max-w-md">All designs on this website were created by Helin Kıl. Some of the featured works are conceptual pieces and may not represent real products.</p>
          <p className="md:text-right">© 2025 Helin Kil. All rights reserved.</p>
      </div>

      

    </div>

  )
}

export default AboutMe
