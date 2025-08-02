import React from 'react';
import { bacola_banner } from '../assets';

const BacolaBanner = () => {
    return (
        <div className="flex flex-col items-center mt-4 px-5">
            <div className="w-full h-48  p-6 rounded-lg overflow-hidden border border-blue-500 mb-2 relative bg-cover bg-center"
             style={{ backgroundImage: `url(${bacola_banner})` }}>
               
                
                <div className="absolute text-center inset-0 mt-6 p-6">
                    <h2 className="text-2xl font-light">
                        Organic Meals Prepared 
                    </h2>
                    <h2 className="text-2xl font-bold">
                         <span className="text-green-500">Delivered to your Home</span>
                    </h2>
                    <p className="text-gray-600 text-sm">Fully prepared & delivered nationwide.</p>
                </div>
            </div>
            <div className='flex justify-between p-3  font-normal text-gray-400  w-full'>
            <span>62 products</span>
                <span>Sort by: <span className="font-semibold text-gray-600">Alphabetically, A-Z</span></span>    </div>
           
        </div>
    );
};

export default BacolaBanner;
