import React from 'react';

const ContactUs = () => {
    return (
        <form className="flex w-full  space-x-3 mx-auto">
            <div className="w-full  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Let us handle your <br />
                    project,  <span className='text-span-text'>professionally</span>.
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor='name'>
                            <textarea className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" id="comment" placeholder="Your Message" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2">
                        <button className="uppercase my-6 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default ContactUs;