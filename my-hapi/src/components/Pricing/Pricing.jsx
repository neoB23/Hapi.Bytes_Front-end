import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    const backgroundImage = 'images/asian-senior-couple-using-laptop-home-asian-senior-chinese-grandparents-surf-internet-check-social-media-while-lying-sofa-living-room-home-concept-Copy.jpg';
    return (
        <section className="dark:text-gray-800 min-h-screen flex flex-col">
            <div className="min-h-screen relative flex items-center justify-center">
        <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'center 30%',
                        filter: 'brightness(0.5)',
                        zIndex: -1,
                    }}
                ></div>
                <div className="relative text-white text-center z-10">
                    <h1 className="text-4xl font-bold md:text-7xl md:font-medium">
                        Affordable Plans for Every Household
                    </h1>
                    <p className="font-thin text-sm md:text-1xl mt-2">
                        Choose from a range of affordable plans designed to fit your home or business needs. Stay connected, your way
                    </p>
                    <button href="/" type="button" className="mt-4 px-8 py-3 rounded-full bg-orange dark:text-gray-100">Apply Now</button>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col space-y-4 text-center w-full mb-20">
                    <span className="font-bold  tracking-wider text-4xl md:font-bold md:text-5xl uppercase text-black">Our <span className="text-orange">Plans</span>  for Your <span className="text-orange">Connectivity</span> </span>
                    <h2 className="text-sm md:text-4xl font-light text-xl">Find the perfect plan for your needs whether it's for your business, startup, or home WiFi. <br/>Explore our top options below and get connected today.</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Adjusted class xl:w-1/3 for 3x3 layout */}
                    <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Xtra 699</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱699</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 25 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
					{/* Plan 2 */}
					<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Lite</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱999</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 45 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
					
					<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Plus</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱1299</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 70 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>

					<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Mega</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱1499</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 100 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>

					<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Xtra Giga</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱1699</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 155 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
					<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">HB Tera</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₱2499</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1> 
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Speed: 250 Mbps
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Fiber Fast Unli Data
                            </p>
                            <CustomLink href="/fifthlayout" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Apply Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </CustomLink>
                            {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
                    {/* Repeat this structure for each card, adjusting only specific plan details */}
                    {/* Additional pricing cards would have xl:w-1/3 as well */}
                </div>
            </div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="images/Infrastruttura-di-rete-FTTH.png" alt="FTTH" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">FTTH (Fiber to the Home)</h3>
				<p className="my-6 dark:text-gray-600">is an optical fiber architecture in which fiber cable is used in the access network to make the final connection directly to customer’s homes or offices. The purpose of using optical cable in the access network is to provide broadband services to the customers. The greatest hurdle in its widespread deployment was its high cost, but with the recent development in the optical communication systems and especially in the PON (Passive Optical Network) made it possible to deploy it widely with reduced cost. On the other hand high data rates are now possible because of huge available bandwidth, thus making it cost effective solution</p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="images/internet-leased-line-services-1.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">Leased Line Internet Connection</h3>
				<p className="my-6 dark:text-gray-600">A leased line is a dedicated, fixed-bandwidth data connection. It allows data-hungry businesses to have a reliable, high-quality internet connection with guarantees of upload and download speed, uptime and resilience. “Leased” refers to the connection which is rented by the Internet Service Provider (ISP) directly to a business, resulting in a service above and beyond what standard broadband provides.</p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="images/istockphoto-673967530-612x612.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">CCTV Installation</h3>
				<p className="my-6 dark:text-gray-600">Security at home and in buildings is a top consideration everywhere in the world. Acting to improve the security of your loved ones is a wise and important decision given that the media frequently reports on various instances of theft and burglary. And one way to increase security in your neighborhood is by installing CCTV cameras.</p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="images/Hf4d306872e3d447aa33c0f414bc58b42k.avif" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">WiFi Hotspot/Vendo</h3>
				<p className="my-6 dark:text-gray-600">A leased line is a dedicated, fixed-bandwidth data connection. It allows data-hungry businesses to have a reliable, high-quality internet connection with guarantees of upload and download speed, uptime and resilience. “Leased” refers to the connection which is rented by the Internet Service Provider (ISP) directly to a business, resulting in a service above and beyond what standard broadband provides.</p>
				{/* <button type="button" className="self-start bg-blue text-white p-2 rounded">Apply</button> */}
			</div>
		</div>
	</div>
</section>
        </section>
    );
}
function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props} >
            {children}
        </Link>
    );
}
export default Pricing;
