import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutUs(){
    // const images = [
    //     'images/happy-asian-young-family-homeowners-bought-new-house-japanese-mom-dad-daughter-embracing-looking-forward-future-new-home-after-moving-relocation-sitting-sofa-with-boxes-together.jpg',
    //     'images/happy-young-couple-sitting-sofa-living-room-home-use-tablet-with-happiness-together-happy-family-concept.jpg',
    //     'images/asian-senior-couple-using-laptop-home-asian-senior-chinese-grandparents-surf-internet-check-social-media-while-lying-sofa-living-room-home-concept.jpg',
    // ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [slide, setSlide] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSlide(true); // Start slide-out animation

    //         // Wait for the slide-out animation to complete before changing the image
    //         setTimeout(() => {
    //             setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
    //             setSlide(false); // Start slide-in animation
    //         }, 500); // Duration of the animation
    //     }, 20000); // Change image every 7 seconds

    //     return () => clearInterval(interval);
    // }, []);
    return(
        <div> 
  
			
        <div className="min-h-screen ">
              <div className="min-h-screen relative min-h-screen flex items-center justify-center"> 
			<div className="absolute inset-0 bg-cover " 
                style={{ 
                backgroundImage: `url('images/happy-young-couple-sitting-sofa-living-room-home-use-tablet-with-happiness-together-happy-family-concept.jpg')`,
                backgroundPosition: 'center 30%',
                filter: 'brightness(0.6)',
                zIndex: -1,
            }}></div>
            </div>

            <div class="flex flex-wrap   items-center h-screen">
            <div class="bg-white w-full md:w-1/2 h-screen flex items-center justify-center">
                    <div class="mx-8 md:mx-32 space-y-10">
                    <h1 class="text-4xl md:text-6xl font-bold mt-8 md:mt-16">Hapi.Bytes</h1>
                    <div class="description text-gray-500">
                        HapiBytes is the newest internet service provider in the Philippines.
                        Established last Sept 2022. Our main goal is to provide every Filipino
                        home with affordable internet service. We believe that every family
                        should be able to experience strong and seamless connections at the
                        safety of their home.
                    </div>
                    <div class="description text-gray-500">
                        Hapi.Bytes offers various internet services to the Philippine market.
                        Our customers can choose from our wide variety of affordable plans to
                        match their needs.
                    </div>
                    </div>
                </div>
            <div class="bg-red-600 w-full md:w-1/2 h-screen">
                <img
                src="https://dummyimage.com/200x200"
                class="h-screen w-full"
                alt=""
                />
            </div>
            </div>
            <div class="flex flex-wrap md:flex-nowrap items-center h-screen">

                <div class="bg-red-600 w-full md:w-1/2 h-screen">
                    <img
                    src="https://dummyimage.com/200x200"
                    class="h-screen w-full object-cover"
                    alt="Hapi.Bytes"
                    />
                </div>


                <div class="bg-white w-full md:w-1/2 h-screen flex items-center justify-center">
                    <div class="mx-8 md:mx-32 space-y-10">
                    <h1 class="text-4xl md:text-6xl font-bold mt-8 md:mt-16">Hapi.Bytes</h1>
                    <div class="description text-gray-500">
                        HapiBytes is the newest internet service provider in the Philippines.
                        Established last Sept 2022. Our main goal is to provide every Filipino
                        home with affordable internet service. We believe that every family
                        should be able to experience strong and seamless connections at the
                        safety of their home.
                    </div>
                    <div class="description text-gray-500">
                        Hapi.Bytes offers various internet services to the Philippine market.
                        Our customers can choose from our wide variety of affordable plans to
                        match their needs.
                    </div>
                    </div>
                </div>
            </div>
                
            <section class="text-gray-600 body-font j p-24">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discover Our Services</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">121+</h2>
                        <p class="leading-relaxed">Home Subscribers</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">0+</h2>
                        <p class="leading-relaxed">WiFi Hotspot</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">0+</h2>
                        <p class="leading-relaxed">Business Subscribers</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">0+</h2>
                        <p class="leading-relaxed">CCTV Clients</p>
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