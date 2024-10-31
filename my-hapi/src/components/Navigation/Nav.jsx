import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative z-50">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-10">
            {/* Logo Section */}
            <div className="w-auto">
                <CustomLink href="/">
                    <img src="images/logo-light3-1.webp" className="h-10 md:h-12 w-auto" alt="logo" />
                </CustomLink>
            </div>
    
            {/* Main Navigation Links - Centered on desktop */}
            <div className="hidden md:flex text-white space-x-6 absolute left-1/2 transform -translate-x-1/2">
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/thirdlayout">About Us</CustomLink>
                <CustomLink href="/seclayout">Pricing</CustomLink>
                <CustomLink href="/fourthlayout">Contact Us</CustomLink>
            </div>
    
            {/* Burger Menu Button */}
            <div className="flex justify-end">
                <button onClick={toggleMenu}>
                    <img
                        src="images/iconamoon--menu-burger-horizontal.png"
                        alt="burger menu"
                        className="h-6"
                    />
                </button>
            </div>
        </div>
    
        {/* Right-side overlay menu, only on mobile */}
        {menuOpen && (
            <div className="fixed inset-0 md:inset-auto md:right-0 md:w-1/6 h-full bg-black bg-opacity-90 p-6 text-white flex flex-col items-start space-y-6 transition-transform duration-300 ease-in-out z-50">
                {/* Close (X) Button */}
                <button onClick={toggleMenu} className="self-end mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M8 7l7.5 10M8 17l7.5-10"
                        />
                    </svg>
                </button>
                
                {/* Menu Links */}
                <CustomLink href="/">Home</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/thirdlayout">About Us</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/seclayout">Pricing</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/fourthlayout">Contact Us</CustomLink>
                <CustomLink href="/" className="text-lg">Area Coverage</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/sixlayout" className="text-lg">Sign In</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/fifthlayout" className="text-lg">Language</CustomLink>
                <hr className="w-full border-gray-700" />
                <CustomLink href="/" className="text-lg">Internet Speed</CustomLink>
            </div>
        )}
    </div>
    

    );
}

function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props} className="hover:underline">
            {children}
        </Link>
    );
}

export default Nav;
