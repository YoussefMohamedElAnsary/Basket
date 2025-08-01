import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import camera from '../assets/checkout-assets/camera-icon.png'
import ItemCardCheckout from '../components/ItemCardCheckout'
import chips from '../assets/checkout-assets/chips.png'

function Checkout() {
    const [shipping, setShipping] = useState('standard');

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-10 ">
            <section className="flex flex-col pt-10 border-t-2  w-full md:w-1/2 md:border-r-2 md:border-l-0 md:border-t-0 md:border-b-0 border-gray-200 p-6">
                <div className='flex flex-col px-15'>
                    <div className='flex justify-between items-center flex-row py-5'>
                        <h3 className='text-2xl font-bold'>
                            Contact
                        </h3>
                        <Link to="/" className='text-sm text-blue-500 underline'>
                            Log in
                        </Link>
                    </div>
                    <input type="text" placeholder='Email or mobile phone number' className='w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    <div className='flex items-center gap-2 mt-3'>
                        <input type="checkbox" className='w-4 h-4' />
                        <span className='text-sm'>
                            Email me with news and offers
                        </span>
                    </div>
                </div>
                <div className='flex flex-col px-15'>
                    <h3 className='text-2xl font-bold py-5'>
                        Delivery
                    </h3>
                    <input type="text" placeholder='Country/Region' className='mb-2 w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    <div className='flex flex-row gap-2 mb-2'>
                        <input type="text" placeholder='First name (optional)' className='w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                        <input type="text" placeholder='Last name' className='w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    </div>
                    <input type="text" placeholder='Address' className='mb-2 w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    <input type="text" placeholder='Apartment, suite, etc. (optional)' className='mb-2 w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    <div className='flex flex-row gap-2 mb-2'>
                        <input type="text" placeholder='Postal Code (optional)' className='w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                        <input type="text" placeholder='City' className='w-full px-2 py-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm' />
                    </div>
                    <div className='flex items-center gap-2 py-3'>
                        <input type="checkbox" className='w-4 h-4' />
                        <span className='text-sm'>
                            Save this information for next time
                        </span>
                    </div>
                </div>
                <div className='flex flex-col px-15'>
                    <h3 className='text-xl font-bold mb-3'>Shipping method</h3>
                    <div className="flex flex-col gap-3">
                        <label>
                            <input
                                type="radio"
                                name="shipping"
                                value="standard"
                                checked={shipping === 'standard'}
                                onChange={() => setShipping('standard')}
                                className="hidden"
                            />
                            <div
                                className={`rounded-md border px-4 py-5 flex flex-row justify-between items-center w-full cursor-pointer transition
                                    ${shipping === 'standard'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-blue-200 bg-blue-50/50 hover:border-blue-400'}`}
                            >
                                <span className="text-base">Standard</span>
                                <span className="font-bold text-base">FREE</span>
                            </div>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="shipping"
                                value="express"
                                checked={shipping === 'express'}
                                onChange={() => setShipping('express')}
                                className="hidden"
                            />
                            <div
                                className={`rounded-md border px-4 py-5 flex flex-row justify-between items-center w-full cursor-pointer transition
                                    ${shipping === 'express'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-blue-200 bg-blue-50/50 hover:border-blue-400'}`}
                            >
                                <span className="text-base">Express (Same day delivery)</span>
                                <span className="font-bold text-base">$9.99</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col px-15 mt-5'>
                    <h3 className='text-xl font-bold mb-3'>Payment method</h3>
                    <div className='flex flex-col gap-3'>
                        <span className='text-sm text-gray-500 mb-3'>
                            All transactions are secure and encrypted.
                    </span>
                    </div>
                    <div className='flex flex-col gap-2 py-10 px-15 mb-3 bg-gray-100 rounded-md items-center justify-center'>
                        <img src={camera} alt="camera" className='w-15' />
                        <span className='text-sm text-gray-500'>This store can’t accept payments right now.</span>
                    </div>
                    <div className='flex gap-2 py-5 px-15 bg-gray-100 rounded-md items-center justify-center mb-20'>
                        Pay now
                    </div>
                </div>
                <div className='h-[1px] w-[82%] bg-gray-200 mx-auto'></div>
                <Link className='px-15 text-blue-500 underline mt-3'>Privacy policy</Link>
            </section>
            <section className="flex flex-col pt-10 border-t-2  w-full md:w-1/2 md:border-r-2 md:border-l-0 md:border-t-0 md:border-b-0 border-gray-200 p-6">
                <div className='flex flex-col px-15'>
                    <div className='flex flex-col gap-3'>
                        <ItemCardCheckout img={chips} title="Bag of chips" price={100} quantity={1} />
                        <ItemCardCheckout img={chips} title="Bag of chips" price={100} quantity={1} />
                        <ItemCardCheckout img={chips} title="Bag of chips" price={100} quantity={1} />
                    </div>
                    <div className='flex flex-col gap-3 mt-10'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-md text-black'>
                                Subtotal - 3 items
                            </span>
                            <span className='text-md text-black'>
                                $100.00
                            </span>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-md text-black'>
                                Shipping
                            </span>
                            <span className='text-md text-black'>
                                Free
                            </span>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-xl font-bold text-black'>
                                Total
                            </span>
                            <span className='text-md text-gray-500'>
                                USD <span className='text-xl font-bold text-black'>$100.00</span> 
                            </span>
                        </div>
                        <span className='text-md text-gray-500'>
                            including $2.46 in taxes
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Checkout