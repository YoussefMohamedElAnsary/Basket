import React from 'react'


import Banner from './Banner';
import { banner1,banner2,banner3 } from '../assets';
function BannerSection() {
  return (
    <div className="flex justify-center gap-6 flex-wrap p-2  mx-auto">
      <Banner
        discount="Weekend Discount 40%"
        title="Natural Eggs"
        subtitle="Eat one every day"
        buttonText="Shop Now"
        imgSrc={banner1}
      />
      <Banner
        discount="Weekend Discount 40%"
        title="Natural Eggs"
        subtitle="Eat one every day"
        buttonText="Shop Now"
        imgSrc={banner2}      />
      <Banner
        discount="Weekend Discount 40%"
        title="Natural Eggs"
        subtitle="Eat one every day"
        buttonText="Shop Now"
        imgSrc={banner3}      />
    </div>
  );
}

export default BannerSection;

