import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-light-tomato">
            <form className="flex w-full max-w-sm space-y-3 mx-auto">
                <div className="w-full  px-5 py-10 m-auto mb-10 mt-10 rounded-lg shadow-lg dark:bg-gray-800">
                    <h1 className="title-font sm:text-3xl md:text-3xl text-3xl mb-4 font-bold text-gray-900">Let us handle your <br /> project,
                        <span className="text-span-text"> Professionally.</span>
                    </h1>
                    <div className="grid  grid-cols-2 gap-6 m-auto">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input required type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input required type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2">
                            <div className=" relative ">
                                <input required type="email" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2">
                            <div className=" relative ">
                                <input required type="number" id="contact-form-number" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-700" htmlFor="name">
                                <textarea className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" id="message" placeholder="Your Message" name="comment" rows="5" cols="40">
                                </textarea>
                            </label>
                        </div>
                        <div className="col-span-2 text-center">
                            <button type="submit" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;