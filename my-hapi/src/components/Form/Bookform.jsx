import React, { useState, useEffect } from 'react';


const Bookform = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isHelpMenuOpen, setHelpMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    const toggleHelpMenu = () => {
        setHelpMenuOpen(!isHelpMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('#userButton') && isUserMenuOpen) {
            setUserMenuOpen(false);
        }
        if (!event.target.closest('#menu-toggle') && isHelpMenuOpen) {
            setHelpMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isUserMenuOpen, isHelpMenuOpen]);

    return (
        <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal ">
            

            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">                  
                    <div className={`w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20 ${isHelpMenuOpen ? '' : 'hidden'}`} style={{ top: '6em' }} id="menu-content">
                        <ul className="list-reset py-2 md:py-0">
                            {['section1', 'section2', 'section3', 'section4', 'section5'].map((section, index) => (
                                <li key={index} className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                                    <a href={`#${section}`} className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                        <span className="pb-1 md:pb-0 text-sm">Section {index + 1}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <section className="w-full lg:w-4/5">
                    <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                        Apply Now
                    </h1>
                    <hr className="bg-gray-300 my-12" />

                    {['section1', 'section2', 'section3', 'section4', 'section5'].map((section, index) => (
                        <div key={index}>
                            <h2 id={section} className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">{`Section ${index + 1}`}</h2>
                            <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                                {section === 'section1' && (
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      
                                    <div className="md:col-span-5">
                                      <label for="email">Email Address</label>
                                      <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="dummy@gmail.com" />
                                    </div>
                      
                                    <div className="md:col-span-2">
                                      <label for="city">City</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <select name="city" id="city" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                          <option value="" disabled selected>Select City</option>
                                          <option value="Cainta">Rizal</option>
                                        </select>
                                        <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                      
                                    <div className="md:col-span-2">
                                      <label for="city">City</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <select name="city" id="city" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                          <option value="" disabled selected>Select City</option>
                                          <option value="Cainta">Cainta</option>
                                          <option value="Taytay">Taytay</option>
                                        </select>
                                        <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>

                                    <div className="md:col-span-5">
                                      <label for="email">Barangay</label>
                                      <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                    </div>
                                </div>
                                )}
                                {section === 'section2' && (
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                      <div className="md:col-span-5">
                                        <label for="full_name">Referred by</label>
                                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="not required" />
                                      </div>
                        
                                      <div className="md:col-span-2">
                                        <label for="email">FirstName</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                      </div>
                        
                                      <div className="md:col-span-1">
                                        <label for="address">Middle Initial</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Not Requried" />
                                      </div>
                        
                                      <div className="md:col-span-2">
                                        <label for="city">LastName</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label for="city">Address</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="House number / Block and lot / Street / Subdivision" />
                                      </div>
                                  </div>
                                    
                                )}
                                {section === 'section3' && (
                                        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full flex items-center">
                                        <div>
                                          <input className="hidden" id="radio_1" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_1">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB EXTRA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱699/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 25 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_2" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_2">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB LITE</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱999/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 45 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_3" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_3">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB PLUS</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1299/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 70 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_4" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_4">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB MEGA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1499/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 100 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_5" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_5">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB GIGA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1699/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 155 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_6" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_6">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB TERA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱2499/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 250 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      </form>
                                      
                                      
                                )}
                                {section === 'section4' && (
                                    <div id='section3' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                        <div>
                                              <label className="block text-sm font-medium text-black">
                                              Upload Proof of Billing
                                              </label>
                                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                              <div className="space-y-1 text-center">
                                                  <svg className="mx-auto h-12 w-12 text-white" stroke="black" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                  </svg>
                                                  <div className="flex text-sm text-gray-600">
                                                  <label for="file-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                      <span className="">Upload a file</span>
                                                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                                  </label>
                                                  <p className="pl-1 text-black">or drag and drop</p>
                                                  </div>
                                                  <p className="text-xs text-black">
                                                  PNG, JPG, GIF up to 10MB
                                                  </p>
                                              </div>
                                          </div> 
                                      </div>        
                                      <div>
                                              <label className="block text-sm font-medium text-black">
                                              Upload At least 1 Valid ID
                                              </label>
                                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                              <div className="space-y-1 text-center">
                                                  <svg className="mx-auto h-12 w-12 text-white" stroke="black" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                  </svg>
                                                  <div className="flex text-sm text-gray-600">
                                                  <label for="file-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                      <span className="">Upload a file</span>
                                                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                                  </label>
                                                  <p className="pl-1 text-black">or drag and drop</p>
                                                  </div>
                                                  <p className="text-xs text-black">
                                                  PNG, JPG, GIF up to 10MB
                                                  </p>
                                              </div>
                                          </div>   
                                      </div>        
                                      <div>
                                              <label className="block text-sm font-medium text-black">
                                              Installation Landmark(Take a picture of the façade of the installation location. If it’s your house, upload a 
                                              </label>
                                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                              <div className="space-y-1 text-center">
                                                  <svg className="mx-auto h-12 w-12 text-white" stroke="black" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                  </svg>
                                                  <div className="flex text-sm text-gray-600">
                                                  <label for="file-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                      <span className="">Upload a file</span>
                                                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                                  </label>
                                                  <p className="pl-1 text-black">or drag and drop</p>
                                                  </div>
                                                  <p className="text-xs text-black">
                                                  PNG, JPG, GIF up to 10MB
                                                  </p>
                                              </div>
                                          </div>
                                      </div> 
                                    </div>
                                )}
                                {section === 'section5' && (
                                          <div id='section4' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                            <div className="App">
                                            <button onClick={openModal} className="bg-blue text-white px-4 py-2 rounded">
                                              Show Message
                                            </button>
                                            {isModalOpen && (
                                              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                                                <div className="bg-white p-6 rounded shadow-lg w-1/3">
                                                  <h1 className="text-xl font-semibold mb-4">Terms of Service</h1>
                                                  <hr className=""/>
                                                  <p>By using this service, you agree to the collection and storage of your responses. This information is recorded for service improvement and internal use only and will not be shared without your consent, except as required by law. You may request to view, modify, or delete your data by contacting [Contact Information].
                                                      We may update these terms periodically. Continued use implies acceptance of changes. For questions, contact [Contact Information].
                                                      By proceeding, you confirm that you have read, understood, and agree to these Terms of Service.</p>                                    
                                                  By clicking "Agree" or continuing to interact with the service, you confirm that you have read, understood, and agreed to these Terms of Service.
                                                    <div className="flex space-x-2 items-center p-6 ">
                                                      <button onClick={closeModal}  data-modal-toggle="default-modal" type="button" className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                                      <button onClick={closeModal} data-modal-toggle="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                                                  </div>
                                                  </div>
                                                </div>
                                              )}
                                          </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
        
    );
    
};

export default Bookform;
