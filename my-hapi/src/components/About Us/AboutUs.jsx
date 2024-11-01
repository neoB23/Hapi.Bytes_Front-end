import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutUs(){
    const images = [
        'images/happy-asian-family-using-tablet-video-call-virtual-meeting-together-sofa-home-living-room.jpg',
        'images/happy-asian-young-family-homeowners-bought-new-house-chinese-mom-dad-daughter-embracing-looking-forward-future-new-home-after-moving-relocation-sitting-floor-with-boxes-together.jpg   ',
        'images/happiness-asian-family-multi-age-generation-enjoy-watch-cheering-her-daughter-up-playing-vr-goggle-together-with-fun-exited-living-room-home-interior-background-quarantine-weekend.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [slide, setSlide] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(true); // Start slide-out animation
            // Wait for the slide-out animation to complete before changing the image
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
                setSlide(false); // Start slide-in animation
            }, 500); // Duration of the animation
        }, 20000); // Change image every 7 seconds
        return () => clearInterval(interval);
    }, []);
    return(
        <div> 
			
        <div className="min-h-screen ">
            <div className="min-h-screen relative min-h-screen flex items-center justify-center"> 
            <div
                className={`absolute inset-0 bg-cover transition-all duration-500 ${slide ? 'slide-out' : 'slide-in'}`}
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundPosition: 'center 30%',
                    filter: 'brightness(0.5)',
                    zIndex: -1,
                }}
            ></div>
            <div className="relative text-white text-center z-10">
                <h1 className="text-4xl font-bold  md:text-7xl md:font-medium">
                Reach Out for<br/> Your Connectivity Needs
                </h1>
                <p className="font-thin text-sm md:text-1xl mt-2">
                Need help? Contact our team, and we’ll assist you with any questions or concerns.
                </p>
                <button type="button" className="mt-4 px-8 py-3 rounded-full bg-orange dark:text-gray-100">Apply Now</button>
            </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center h-screen">
    {/* Left Section (About Hapi.Bytes) */}
    <div className="bg-white w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 md:p-0">
        <div className="mx-4 md:mx-20 space-y-6 md:space-y-10">
            <h1 className="text-3xl md:text-6xl font-bold mt-4 md:mt-16 text-center md:text-left">
                <span className="text-orange">About</span> Hapi.Bytes
            </h1>
            <div className="text-gray-500 text-sm md:text-base leading-relaxed">
                HapiBytes is the newest internet service provider in the Philippines. Established last Sept 2022. Our main goal is to provide every Filipino home with affordable internet service. We believe that every family should be able to experience strong and seamless connections in the safety of their home.
            </div>
            <div className="text-gray-500 text-sm md:text-base leading-relaxed">
                Hapi.Bytes offers various internet services to the Philippine market. Our customers can choose from our wide variety of affordable plans to match their needs.
            </div>
        </div>
    </div>
    {/* Right Section (Image) */}
    <div className="bg-red-600 w-full md:w-1/2 h-64 md:h-screen">
        <img src="images/462559446_915010917352093_8325600417464639268_n.jpg" className="w-full h-full object-cover" alt="Hapi.Bytes" />
    </div>
</div>
<div className="flex flex-wrap md:flex-nowrap items-center h-screen">
    {/* Left Section (Image) */}
    <div className="bg-red-600 w-full md:w-1/2 h-64 md:h-screen">
        <img src="images/462547736_1283181269791496_6732594232415440383_n.jpg" className="w-full h-full object-cover" alt="Our Goals at Hapi.Bytes" />
    </div>
    {/* Right Section (Our Goals) */}
    <div className="bg-white w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 md:p-0">
        <div className="mx-4 md:mx-20 space-y-6 md:space-y-10">
            <h1 className="text-3xl md:text-6xl font-bold mt-4 md:mt-16 text-center md:text-left">
                Our <span className="text-orange">Goals</span> at Hapi.Bytes
            </h1>
            <div className="text-gray-500 text-sm md:text-base leading-relaxed">
                At Hapi.Bytes, we aim to redefine connectivity for every Filipino household by making high-speed, reliable internet affordable and accessible. Our primary goal is to bridge digital divides, empowering families and individuals to stay connected, work, study, and entertain themselves without barriers. We strive to support the growing needs of our customers with flexible internet plans that adapt to different lifestyles.
            </div>
        </div>
    </div>
</div>               
<section className="text-gray-600 body-font p-8 md:p-16 lg:p-24">
    <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 md:mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-gray-900">Discover Our Services</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.
            </p>
        </div>  
        <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">121+</h2>
                    <p className="leading-relaxed">Home Subscribers</p>
                </div>
            </div>
            
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">0+</h2>
                    <p className="leading-relaxed">WiFi Hotspot</p>
                </div>
            </div>
            
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">0+</h2>
                    <p className="leading-relaxed">Business Subscribers</p>
                </div>
            </div>
            
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">0+</h2>
                    <p className="leading-relaxed">CCTV Clients</p>
                </div>
            </div>
        </div>
    </div>
</section>

            
        </div>
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
export default AboutUs;