import React from 'react';
import { Link } from 'react-router-dom';

function Contactform() {
    return (
        <div className="min-h-screen">
            <div className="min-h-screen relative min-h-screen flex items-center justify-center"> 
			<div className="absolute inset-0 bg-cover " 
                style={{ 
                backgroundImage: `url('images/happy-young-couple-sitting-sofa-living-room-home-use-tablet-with-happiness-together-happy-family-concept.jpg')`,
                backgroundPosition: 'center 30%',
                filter: 'brightness(0.6)',
                zIndex: -1,
            }}></div>
            <div className="relative text-white text-center z-10">
                <h1 className="text-4xl md:text-7xl md:font-medium font-bold">
                Reach Out for<br/> Your Connectivity Needs
                </h1>
                <p className="font-thin text-xl md:text-1xl mt-2">
                Need help? Contact our team, and we’ll assist you with any questions or concerns.
                </p>
                <CustomLink href="/" type="button" className="mt-10 px-8 py-3 rounded-full bg-orange dark:text-gray-100">Apply Now</CustomLink>
            </div>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            className="absolute inset-0" 
                            frameBorder="0" 
                            title="map" 
                            marginHeight="0" 
                            marginWidth="0" 
                            scrolling="no" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5988561966005!2d121.11873717686491!3d14.564917449605703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7a0c0df363f%3A0x7dd5c9f47114136!2s52%20Fermina%2C%20Brgy.%20Sta.%20Ana%2C%20Taytay%2C%201920%20Rizal!5e0!3m2!1sen!2sph!4v1729353938897!5m2!1sen!2sph" 
                            // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">#52 Fermina Road Brgy Sta Ana Taytay, Rizal</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">info@hapibytes.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">09185573264</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    </div>
                </div>
                
            </section>
            
        </div>
        
    );
}
function CustomLink({ href, children, className, ...props }) {
    return (
        <Link to={href} className={className} {...props}>
            {children}
        </Link>
    );
}

export default Contactform;
