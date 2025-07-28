import React from 'react'


const Banner = ({ discount, title, subtitle, buttonText, imgSrc }) => {
  return (
    <div
      className="rounded-lg shadow-md flex items-center max-w-[350px] w-full h-56 relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="absolute inset-0 bg-black/5"></div> {/* Overlay */}
      <div className="relative p-6 z-10">
        <p className="text-green-400 font-semibold uppercase tracking-wide text-sm">
          {discount}
        </p>
        <h2 className="mt-1 font-bold text-black text-2xl leading-tight">
          {title}
        </h2>
        <p className="mt-2 text-gray-400 text-sm">{subtitle}</p>
        <button
          className="mt-4 bg-white text-gray-800 rounded-xl py-2 px-6 text-sm font-semibold hover:bg-black hover:text-white  transition-colors"
          aria-label={`Shop now for ${title}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
