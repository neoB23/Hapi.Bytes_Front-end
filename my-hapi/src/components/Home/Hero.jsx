import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    const images = [
        'images/happy-asian-young-family-homeowners-bought-new-house-japanese-mom-dad-daughter-embracing-looking-forward-future-new-home-after-moving-relocation-sitting-sofa-with-boxes-together.jpg',
        'images/happy-young-couple-sitting-sofa-living-room-home-use-tablet-with-happiness-together-happy-family-concept.jpg',
        'images/asian-senior-couple-using-laptop-home-asian-senior-chinese-grandparents-surf-internet-check-social-media-while-lying-sofa-living-room-home-concept.jpg',
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

    return (
        <div>
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background Image with Slide Animation */}
            <div
                className={`absolute inset-0 bg-cover transition-all duration-500 ${slide ? 'slide-out' : 'slide-in'}`}
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundPosition: 'center 30%',
                    filter: 'brightness(0.5)',
                    zIndex: -1,
                }}
            ></div>

            {/* Text and Button Content */}
            <div className="relative text-white text-center z-10 px-4 sm:px-6 md:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold md:font-medium leading-snug">
        Connecting Communities<br />One Line at a Time.
    </h1>
    <p className="font-thin text-lg sm:text-xl md:text-1xl mt-2">
        Provider of affordable internet service to the Filipinos
    </p>

    <div className="w-full max-w-xs sm:max-w-sm mx-auto mt-4 sm:mt-6 bg-transparent border backdrop-blur rounded-md dark:border-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
        <form className="flex flex-col md:flex-row">
            <input
                type="email"
                placeholder="Enter your Location"
                className="flex-1 h-10 px-3 sm:px-4 py-2 m-1 text-white placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                required
            />
            <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-orange rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
                Order Now
            </button>
        </form>
    </div>
</div>

        </div>
        <section className="m-4 md:m-8 dark:text-gray-800 ">
			<div className="container mx-auto p-4 my-6 space-y-2 text-center">
				<h2 className="text-5xl font-bold">What do <span className="text-orange">we have</span> to <span className="text-orange">offer?</span></h2>
				<p className="dark:text-gray-600">Hapi.Bytes Got You</p>
			</div>
			<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col items-center p-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-orange">
						<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
					</svg>
					<h3 className="my-3 text-3xl font-semibold">Reliable</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>our internet service ensures consistent, uninterrupted connectivity, providing you with a dependable experience for work, entertainment, and communication.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-orange">
						<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
					</svg>
					<h3 className="my-3 text-3xl font-semibold">Fast</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Experience high-speed internet with lightning-fast downloads and smooth streaming, keeping you connected without delays.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-orange">
						<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
					</svg>
					<h3 className="my-3 text-3xl font-semibold">Secure</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>We prioritize your online safety by offering advanced security features to protect your personal information and data from threats.</p>
					</div>
				</div>
			</div>
		</section>
        
        

        <div className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative">
    <div 
        className="absolute inset-0 bg-cover"
        style={{
            backgroundImage: `url('images/Electrical lineman.jpg.webp')`,
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
            zIndex: -1,
        }}
    ></div>

    {/* Overlay for darker background */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content section */}
    <div className="relative z-10 flex min-h-screen flex-col justify-center items-start px-4 sm:px-8 space-y-4 sm:space-y-6 ml-4 sm:ml-12">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-7xl text-white leading-snug">
            About <span className="text-orange">Hapi.bytes</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            Founded in 2022, Hapi.Bytes is committed to delivering affordable internet to Filipino households.
            <br className="hidden sm:block" />
            More than just providing connectivity, we offer seamless internet solutions designed to meet the needs
            <br className="hidden sm:block" />
            of every family. At Hapi.Bytes, empowering communities through reliable service is our passion.
        </p>
        <button className="text-orange border-4 border-orange p-2 text-xs sm:text-sm md:text-base">Read More</button>
    </div>
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
export default Hero;
