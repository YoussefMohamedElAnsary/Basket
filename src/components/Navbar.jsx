import React, { useState, useEffect } from 'react'
import secure_delivery_icon from '../assets/nav-assets/secure-delivery-icon.png'
import nav_logo from '../assets/nav-assets/nav-logo.png'
import shopping_basket from '../assets/nav-assets/shopping-basket.png'
import { Menu } from '@headlessui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../context/SearchContext';

const Navbar = () => {
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [selectedMainNav, setSelectedMainNav] = useState('home');
    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([]);
    const { currentUser, signout } = useAuth();
    const { getTotalItems, getTotalPrice } = useCart();
    const { performSearch } = useSearch();
    const navigate = useNavigate();

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const uniqueCategories = [...new Set(data.products.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleSignOut = async () => {
        try {
            await signout();
            navigate('/');
        } catch (error) {
            console.error('Failed to sign out:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            performSearch(searchInput);
            navigate(`/shop?search=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`/shop?category=${encodeURIComponent(category)}`);
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
                    <form onSubmit={handleSearch} className='relative w-full'>
                        <input 
                            type="text" 
                            placeholder="Search for Products, fruit, meat, eggs .etc..."
                            className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        
                        <button type="submit" className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
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
                                    className=" text-[6px] md:text-[12px] md:px-2 md:py-2 py-1 px-2 text-nowrap text-white bg-[#35AFA0] lg:px-4 lg:py-2 rounded-full hover:bg-[#2e998e] transition-all duration-200 text-sm font-medium cursor-pointer"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className=" text-[6px] md:text-[12px] md:px-2 md:py-2 py-1 text-nowrap px-2 text-[#35AFA0] border border-[#35AFA0] lg:px-4 lg:py-2 rounded-full hover:bg-[#35AFA0] hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer"
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
                    <Menu.Items className="absolute z-50 w-full lg:w-[260px] mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-y-auto">
                        <div className="py-2">
                            {categories.map((category, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleCategoryClick(category)}
                                            className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-[#35AFA0] transition-colors`}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#EDEEF5] border-2 border-white px-6 py-1 rounded-full text-[11px] whitespace-nowrap text-[#637381] font-medium">
                            TOTAL {categories.length} CATEGORIES
                        </div>
                    </div>
                </Menu>

                {/* Mobile search */}
                <div className='w-full mb-4 lg:hidden'>
                    <form onSubmit={handleSearch} className='relative'>
                        <input 
                            type="text" 
                            placeholder="Search for Products..."
                            className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button type="submit" className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
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
                    
                                         {/* Popular Categories */}
                     {categories.slice(0, 3).map((category, index) => (
                         <button
                             key={index}
                             onClick={() => {
                                 handleCategoryClick(category);
                                 setSelectedMainNav(`category-${index}`);
                             }}
                             className={`cursor-pointer hover:text-[#35AFA0] transition-colors ${
                                 selectedMainNav === `category-${index}` ? 'text-[#35AFA0] font-bold' : 'text-gray-700 font-normal'
                             }`}
                         >
                             {(category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')).toUpperCase()}
                         </button>
                     ))}
                    
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
