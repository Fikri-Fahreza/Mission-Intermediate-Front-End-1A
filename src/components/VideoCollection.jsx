import React from 'react';
import avatar from '../assets/fikri.jpg';
// Import semua gambar untuk card
import img1 from '../assets/Rectangle 2.png';
import img2 from '../assets/Rectangle 3.png';
import img3 from '../assets/Rectangle 4.png';
import img4 from '../assets/Rectangle 6.png';
import img5 from '../assets/Rectangle 7.png';
import img6 from '../assets/Rectangle 8.png';
import img7 from '../assets/Rectangle 22957.png';

const videos = [
  { img: img1, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img2, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img3, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img4, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img5, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img6, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img2, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img1, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
  { img: img7, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
];

const VideoCollection = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        <div className="flex gap-6 mt-6 text-gray-500 text-lg font-medium">
          <span className="text-orange-500 relative cursor-pointer">
            Semua Kelas
            <div className="w-8 h-1 bg-orange-500 absolute left-0 -bottom-1 rounded-full"></div>
          </span>
          <span className="cursor-pointer hover:text-gray-900">Pemasaran</span>
          <span className="cursor-pointer hover:text-gray-900">Desain</span>
          <span className="cursor-pointer hover:text-gray-900">Pengembangan Diri</span>
          <span className="cursor-pointer hover:text-gray-900">Bisnis</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img src={video.img} className="rounded-md w-full mb-2" alt={video.title} />
            <h4 className="font-semibold text-gray-800">{video.title}</h4>
            <p className="text-gray-500 text-sm line-clamp-2">
              Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center gap-3 bg-white py-4 w-full justify-start">
              <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div>
                <span className="block font-semibold text-gray-800">Fikri Fahreza</span>
                <span className="text-sm text-gray-500">Fullstack Developer Gojek</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < video.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{video.rating}</span>
                <span className="text-gray-500 text-sm underline">({video.reviews})</span>
              </div>
              <span className="text-green-500 font-bold text-lg">{video.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCollection;