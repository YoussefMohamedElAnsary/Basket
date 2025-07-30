import React from 'react';
import CookieIcee from '../assets/Cookie and Ice Cream.png';
import CookieIcee2 from '../assets/Cookie and Ice.png';



const CookieIce = () => {
  return (
    <section className="container mx-auto my-10 px-4 flex flex-col lg:flex-row gap-6">
      <div
        className="flex flex-col p-6 w-full lg:w-[570px] h-[251.2px] rounded-md bg-cover bg-center relative"
        style={{ backgroundImage: `url(${CookieIcee})` }}
      >
        <div className="absolute top-[50px] left-[40px]  rounded-md">
          <p className="text-[14px] text-[#FF6048] font-bold mb-2 uppercase">Weekend Discount 40%</p>
          <p className="text-[24px] text-[#3E445A] font-[600]">Cookie and Ice Cream</p>
          <p className="text-[12px] text-[#3E445A] font-[400] mt-2">Bacola Weekend Discount</p>
          <button className="mt-6 px-6 py-2 bg-[#233A95] text-white text-[14px] font-[600] rounded-full hover:bg-[#233A958A] transition-colors duration-300 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      <div
        className="flex flex-col p-6 w-full lg:w-[570px] h-[251.2px] rounded-md bg-cover bg-center relative"
        style={{ backgroundImage: `url(${CookieIcee2})`}}
      >
        <div className="absolute top-[50px] left-[40px]  rounded-md">
          <p className="text-[14px] text-[#FF6048] font-bold mb-2 uppercase">Weekend Discount 40%</p>
          <p className="text-[24px] text-[#3E445A] font-[600]">Cookie and Ice Cream</p>
          <p className="text-[12px] text-[#3E445A] font-[400] mt-2">Bacola Weekend Discount</p>
          <button className="mt-6 px-6 py-2 bg-[#ED174A] text-white text-[14px] font-[600] rounded-full hover:bg-[#ED174965] transition-colors duration-300 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieIce;
