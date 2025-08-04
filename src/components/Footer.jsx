import React from 'react'
import envelope from '../assets/footer-assets/envelope-icon.png'
import coupon from '../assets/footer-assets/coupon.png'
import fresh_products from '../assets/footer-assets/milk-icon.png'
import delivery from '../assets/footer-assets/delivery-icon.png'
import coin from '../assets/footer-assets/coin-icon.png'
import discount from '../assets/footer-assets/discount-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcStripe, faCcPaypal, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full relative flex flex-col md:flex-row items-stretch bg-[#35AFA0] min-h-[320px] px-2 md:px-6 md:pt-4 lg:px-16  pb-0'>
                <div className='flex flex-col justify-center text-white text-2xl w-full md:w-1/2 flex-grow'>
                    <div className='flex flex-row gap-2 font-light text-[18px]'>
                        <a href="#" className='underline decoration-white decoration-1'>$20 discount </a>for your first order
                    </div>
                    <div className='flex font-semibold text-[26px] mt-2 mb-2'>
                        Join our newsletter and get...
                    </div>
                    <div className='flex flex-row gap-2 font-light text-[16px] w-90 opacity-50'>
                        Join our email subscription now to get updates
                        on promotions and coupons.
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <div className='relative w-full md:max-w-[400px]'>
                            <img src={envelope} alt="envelope" className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4' />
                            <input
                                type="text"
                                placeholder="Your email address"
                                className='w-full px-10 py-3 bg-gray-100 rounded-md focus:outline-none text-[12px] text-gray-500 h-15'
                            />
                            <button className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#35AFA0] text-[13px] text-white rounded-sm px-4 py-2 h-12' >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Coupon image: absolute on md+, static on mobile */}
                <div className='w-full md:w-1/2 flex flex-col items-end mt-6 md:mt-0 p-0 m-0 static md:absolute md:bottom-0 md:right-0 md:items-end'>
                    <img src={coupon} alt="logo" className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain p-0 m-0' />
                </div>
            </div>
            {/* Main footer wrapper with light gray background */}
            <div className="w-full bg-[#f8f9fb] font-sans">
                {/* Info Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center border-b border-gray-200 py-6 md:py-8 px-2 md:px-8 lg:px-20 bg-white">
                    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-0 text-gray-700 text-base md:divide-x md:divide-gray-200 items-center">
                        <div className="flex items-center gap-3 justify-center py-3">
                            <img src={fresh_products} alt="fresh products" className="w-6 h-6" />
                            <span>Everyday fresh products</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center py-3">
                            <img src={delivery} alt="delivery" className="w-6 h-6" />
                            <span>Free delivery for order over $70</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center py-3">
                            <img src={discount} alt="discount" className="w-6 h-6" />
                            <span>Daily Mega Discounts</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center py-3">
                            <img src={coin} alt="coin" className="w-6 h-6" />
                            <span>Best price on the market</span>
                        </div>
                    </div>
                </div>
                {/* Category Columns */}
                <div className="w-full py-10 px-2 md:px-8 lg:px-20 bg-[#f8f9fb]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Repeat for each category */}
                        <div>
                            <div className="font-bold text-gray-800 mb-2 text-[15px] uppercase">FRUIT & VEGETABLES</div>
                            <ul className="text-gray-600 text-[15px] space-y-1">
                                <li>Fresh Vegetables</li>
                                <li>Herbs & Seasonings</li>
                                <li>Fresh Fruits</li>
                                <li>Cuts & Sprouts</li>
                                <li>Exotic Fruits & Veggies</li>
                                <li>Packaged Produce</li>
                                <li>Party Trays</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800 mb-2 text-[15px] uppercase">BREAKFAST & DAIRY</div>
                            <ul className="text-gray-600 text-[15px] space-y-1">
                                <li>Milk & Flavoured Milk</li>
                                <li>Butter and Margarine</li>
                                <li>Cheese</li>
                                <li>Eggs Substitutes</li>
                                <li>Honey</li>
                                <li>Marmalades</li>
                                <li>Sour Cream and Dips</li>
                                <li>Yogurt</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800 mb-2 text-[15px] uppercase">MEAT & SEAFOOD</div>
                            <ul className="text-gray-600 text-[15px] space-y-1">
                                <li>Breakfast Sausage</li>
                                <li>Dinner Sausage</li>
                                <li>Beef</li>
                                <li>Chicken</li>
                                <li>Sliced Deli Meat</li>
                                <li>Shrimp</li>
                                <li>Wild Caught Fillets</li>
                                <li>Crab and Shellfish</li>
                                <li>Farm Raised Fillets</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800 mb-2 text-[15px] uppercase">BEVERAGES</div>
                            <ul className="text-gray-600 text-[15px] space-y-1">
                                <li>Water</li>
                                <li>Sparkling Water</li>
                                <li>Soda & Pop</li>
                                <li>Coffee</li>
                                <li>Milk & Plant-Based Milk</li>
                                <li>Tea & Kombucha</li>
                                <li>Drink Boxes & Pouches</li>
                                <li>Craft Beer</li>
                                <li>Wine</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800 mb-2 text-[15px] uppercase">BREADS & BAKERY</div>
                            <ul className="text-gray-600 text-[15px] space-y-1">
                                <li>Milk & Flavoured Milk</li>
                                <li>Butter and Margarine</li>
                                <li>Cheese</li>
                                <li>Eggs Substitutes</li>
                                <li>Honey</li>
                                <li>Marmalades</li>
                                <li>Sour Cream and Dips</li>
                                <li>Yogurt</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="w-full bg-white pt-8 pb-4 px-2 md:px-8 lg:px-20">
                    {/* Responsive Bottom Section */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-y-6 md:gap-y-0 md:gap-x-0 py-8">
                        {/* Phone Section */}
                        <div className="flex flex-row items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                            <div className="w-14 h-14 rounded-full border-2 border-[#E4E5EE] flex items-center justify-center">
                                <FontAwesomeIcon icon={faPhone} className="text-gray-600 text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#232B3B] text-xl font-semibold">8 800 555-55</span>
                                <span className="text-gray-400 text-sm">Working 8:00 - 22:00</span>
                            </div>
                        </div>
                        {/* App Download and Social Icons Group */}
                        <div className="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto gap-y-4 md:gap-y-0 md:gap-x-8 mt-6 md:mt-0">
                            <div className="flex flex-row items-center md:items-center md:mr-8 gap-x-4 ">
                                <div className='flex flex-col'>
                                    <span className="text-[#232B3B] font-semibold text-base md:text-lg">Download App on Mobile :</span>
                                    <span className="text-gray-400 text-sm mb-2">15% discount on your first purchase</span>
                                </div>

                                <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 justify-center md:justify-end mt-2 md:mt-0">
                                <a href="#" className="w-10 h-10 rounded-full border border-[#23398B] flex items-center justify-center hover:bg-[#23398B]/10 transition">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-[#23398B] text-lg" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[#23398B] flex items-center justify-center hover:bg-[#23398B]/10 transition">
                                    <FontAwesomeIcon icon={faTwitter} className="text-[#23398B] text-lg" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[#23398B] flex items-center justify-center hover:bg-[#23398B]/10 transition">
                                    <FontAwesomeIcon icon={faInstagram} className="text-[#23398B] text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Bottom-most bar */}
                    <div className="w-full border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[14px] gap-4">
                        <div className="w-full md:w-auto text-left">Copyright 2025 © All rights reserved by Blackrise Theme</div>
                        <div className="flex flex-row gap-4 justify-center w-full md:w-auto">
                            <a href="#" className="hover:text-[#35AFA0]">Privacy Policy</a>
                            <a href="#" className="hover:text-[#35AFA0]">Terms and Conditions</a>
                            <a href="#" className="hover:text-[#35AFA0]">Cookie</a>
                        </div>
                        <div className="flex flex-row gap-3 justify-end w-full md:w-auto">
                            <FontAwesomeIcon icon={faCcVisa} className="text-2xl" />
                            <FontAwesomeIcon icon={faCcMastercard} className="text-2xl" />
                            <FontAwesomeIcon icon={faCcStripe} className="text-2xl" />
                            <FontAwesomeIcon icon={faCcPaypal} className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer