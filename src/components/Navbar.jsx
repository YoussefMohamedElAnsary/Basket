import React, { useState, useEffect } from 'react'
import secure_delivery_icon from '../assets/secure-delivery-icon.png'
import nav_logo from '../assets/nav-logo.png'
import shopping_basket from '../assets/shopping-basket.png'
import { Menu } from '@headlessui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [selectedMainNav, setSelectedMainNav] = useState('home');
    const { currentUser, signout } = useAuth();
    const { getTotalItems, getTotalPrice } = useCart();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signout();
            navigate('/');
        } catch (error) {
            console.error('Failed to sign out:', error);
        }
    };

    return (
        <div className='w-full '>
            {/* Top notification bar */}
            <div className='text-white bg-[#35AFA0] w-full flex items-center justify-center h-10 text-[13px] px-4 text-center'>
                Due to current circumstances, there may be slight delays in order processing.
            </div>

            {/* Secondary bar */}
            <div className='bg-white w-full h-8 items-center justify-center px-4 md:px-8 lg:px-32 border-b border-gray-200 flex md:flex'>
                <ul className='flex items-center gap-5 text-[12px] mr-auto'>
                    <Link to="/about" className="cursor-pointer">About</Link>
                    <li><Link to="/" className="cursor-pointer">Compare</Link></li>
                    <li><Link to="/" className="cursor-pointer">Wishlist</Link></li>
                </ul>
                <div className='flex items-center gap-2 h-full text-[12px]'>
                    <img src={secure_delivery_icon} alt="secure_delivery_icon" className='w-4 h-4' />
                    <p className='text-gray-500 text-weight-400 hidden lg:block'>100% Secure delivery without contacting the courier</p>
                    <div className="h-4 w-[1px] bg-gray-300 mx-4 hidden lg:block"></div>
                    <div className='items-center gap-2 border-r border-gray-200 pr-4 h-full py-0 flex '>
                        <span className='hidden lg:flex'>Need help? Call Us: </span><span className='text-[#35AFA0]'>+ 0020 500</span>
                    </div>
                    <Menu as="div" className="relative inline-block">
                        <Menu.Button className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none cursor-pointer">
                            English
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            English
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            Spanish
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            French
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="div" className="relative inline-block">
                        <Menu.Button className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none cursor-pointer">
                            USD
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            USD
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            EUR
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}>
                                            GBP
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>

            {/* Main header */}
            <div className='bg-white w-full py-4 lg:py-5 flex items-center justify-between px-4 md:px-8 lg:px-32 border-b border-gray-200'>
                <div className='flex items-center gap-2'>
                    <img src={nav_logo} alt="nav_logo" className='h-10 lg:h-14' />
                </div>

                {/* Mobile menu button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md lg:hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className='hidden lg:flex flex-1 max-w-2xl mx-10'>
                    <div className='relative w-full'>
                        <input 
                            type="text" 
                            placeholder="Search for Products, fruit, meat, eggs .etc..."
                            className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm'
                        />
                        
                        <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 lg:gap-6'>
                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-700 hidden md:block">
                                    Welcome, {currentUser.email}
                                </span>
                                <button
                                    onClick={handleSignOut}
                                    className="text-[#35AFA0] border border-[#35AFA0] px-4 py-2 rounded-full hover:bg-[#35AFA0] hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/signin"
                                    className="text-white bg-[#35AFA0] px-4 py-2 rounded-full hover:bg-[#2e998e] transition-all duration-200 text-sm font-medium cursor-pointer"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-[#35AFA0] border border-[#35AFA0] px-4 py-2 rounded-full hover:bg-[#35AFA0] hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                    <Link to="/checkout" className='flex items-center gap-4 cursor-pointer'>
                        <div className='w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-100 flex items-center justify-center'>
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <span className='text-gray-900 font-medium hidden lg:block'>
                            ${getTotalPrice().toFixed(2)}
                        </span>
                        <div className='relative'>
                            <div className='bg-[#FFF1EE] p-2 rounded-full'>
                                <img src={shopping_basket} alt="shopping_basket" className='w-4 h-4 lg:w-5 lg:h-5' />
                            </div>
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center'>
                                {getTotalItems()}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Categories and navigation */}
            <div className='bg-white w-full flex flex-col lg:flex-row items-start lg:items-center px-4 md:px-8 lg:px-32 py-6 border-b border-gray-200'>
                <Menu as="div" className="relative w-full lg:w-auto mb-8 lg:mb-0">
                    <Menu.Button className="w-full lg:w-[260px] h-[46px] bg-[#35AFA0] text-white rounded-full focus:outline-none relative cursor-pointer">
                        <div className="flex items-center justify-between px-6 h-full">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-base font-medium tracking-wide">ALL CATEGORIES</span>
                            </div>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </Menu.Button>
                    <Menu.Items className="absolute z-50 w-full lg:w-[260px] mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="#"
                                        onClick={() => setSelectedMenu('fruits')}
                                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'fruits' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                    >
                                        Fruits & Vegetables
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="#"
                                        onClick={() => setSelectedMenu('meat')}
                                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'meat' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                    >
                                        Meat & Seafood
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="#"
                                        onClick={() => setSelectedMenu('bakery')}
                                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'bakery' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                    >
                                        Bakery
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="#"
                                        onClick={() => setSelectedMenu('beverages')}
                                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'beverages' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                    >
                                        Beverages
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="#"
                                        onClick={() => setSelectedMenu('dairy')}
                                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'dairy' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                    >
                                        Dairy & Eggs
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#EDEEF5] border-2 border-white px-6 py-1 rounded-full text-[11px] whitespace-nowrap text-[#637381] font-medium">
                            TOTAL 50 PRODUCTS
                        </div>
                    </div>
                </Menu>

                {/* Mobile search */}
                <div className='w-full mb-4 lg:hidden'>
                    <div className='relative'>
                        <input 
                            type="text" 
                            placeholder="Search for Products..."
                            className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm'
                        />
                        <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto lg:items-center gap-4 lg:gap-8 lg:ml-10`}>
                    <NavLink
                        to="/"
                        onClick={() => setSelectedMainNav('home')}
                        className={({ isActive }) =>
                            `cursor-pointer ${selectedMainNav === 'home' ? 'text-[#35AFA0] font-bold' : 'text-gray-700 font-normal'}`
                        }
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/shop"
                        onClick={() => setSelectedMainNav('shop')}
                        className={({ isActive }) =>
                            `cursor-pointer ${selectedMainNav === 'shop' ? 'text-[#35AFA0] font-bold' : 'text-gray-700 font-normal'}`
                        }
                    >
                        SHOP
                    </NavLink>
                    <Menu as="div" className="relative inline-block">
                        <Menu.Button
                            className={`flex items-center gap-1 cursor-pointer 
                                ${selectedMainNav === 'meats' ? 'text-[#35AFA0] font-bold' : 'text-gray-600 font-normal'} 
                                hover:text-[#35AFA0]`}
                        >
                            MEATS & SEAFOOD
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute z-50 w-48 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-2">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('freshmeat');
                                                setSelectedMainNav('meats');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'freshmeat' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Fresh Meat
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('fish');
                                                setSelectedMainNav('meats');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'fish' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Fish
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('shellfish');
                                                setSelectedMainNav('meats');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'shellfish' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Shellfish
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="div" className="relative inline-block">
                        <Menu.Button
                            className={`flex items-center gap-1 cursor-pointer 
                                ${selectedMainNav === 'bakery' ? 'text-[#35AFA0] font-bold' : 'text-gray-600 font-normal'} 
                                hover:text-[#35AFA0]`}
                        >
                            BAKERY
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute z-50 w-48 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-2">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('bread');
                                                setSelectedMainNav('bakery');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'bread' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Bread
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('pastries');
                                                setSelectedMainNav('bakery');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'pastries' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Pastries
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('cakes');
                                                setSelectedMainNav('bakery');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'cakes' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Cakes
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="div" className="relative inline-block">
                        <Menu.Button
                            className={`flex items-center gap-1 cursor-pointer 
                                ${selectedMainNav === 'beverages' ? 'text-[#35AFA0] font-bold' : 'text-gray-600 font-normal'} 
                                hover:text-[#35AFA0]`}
                        >
                            BEVERAGES
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute z-50 w-48 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-2">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('softdrinks');
                                                setSelectedMainNav('beverages');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'softdrinks' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Soft Drinks
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('coffee');
                                                setSelectedMainNav('beverages');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'coffee' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Coffee & Tea
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setSelectedMenu('juices');
                                                setSelectedMainNav('beverages');
                                            }}
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm cursor-pointer ${selectedMenu === 'juices' ? 'text-[#35AFA0] font-semibold' : 'text-gray-700'}`}
                                        >
                                            Juices
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <NavLink
                        to="/blog1"
                        onClick={() => setSelectedMainNav('blog')}
                        className={({ isActive }) =>
                            `cursor-pointer ${selectedMainNav === 'blog' ? 'text-[#35AFA0] font-bold' : 'text-gray-700 font-normal'}`
                        }
                    >
                        BLOG
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setSelectedMainNav('contact')}
                        className={({ isActive }) =>
                            `cursor-pointer ${selectedMainNav === 'contact' ? 'text-[#35AFA0] font-bold' : 'text-gray-700 font-normal'}`
                        }
                    >
                        CONTACT
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
