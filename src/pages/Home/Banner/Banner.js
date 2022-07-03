import React from 'react';
import facialWomen from '../../../assets/images/facial-women.png'

const Banner = () => {
    return (
        <div className="bg-light-tomato dark:bg-gray-800 flex py-12 relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-10">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 text-justify space-y-5">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <div className='space-y-3 '>
                        <h1 className="font-poppins uppercase text-6xl sm:text-4xl font-black flex flex-col  dark:text-white text-gray-800">
                            BEAUTY SALON
                        </h1>
                        <span className='font-poppins uppercase text-6xl sm:text-4xl font-black flex flex-col  dark:text-white text-gray-800'> FOR EVERY WOMEN</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white w-55 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <div className="flex mt-8">
                        <a href="/#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Get an Appointment
                        </a>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={facialWomen} alt='facial women' className="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;