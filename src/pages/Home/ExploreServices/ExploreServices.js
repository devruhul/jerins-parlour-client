import React from 'react';
import service1 from '../../../assets/icon/service-1.png';
import { Link } from 'react-router-dom';

const ExploreServices = () => {
    return (
        <div className='my-10 space-y-7 py-10'>
            <h3 className='text-4xl font-bold my-1'>Explore More<span className="text-span-text"> Services</span></h3>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-10 bg-white my-6 hover:drop-shadow-2xl  rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center  rounded-md  text-white">
                            <img src={service1} alt="" className='inline w-32' />
                        </div>

                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-2">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </h3>
                    <h3 className="text-2xl sm:text-xl text-span-text font-semibold dark:text-white">
                        <h3>$199</h3>
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam fugit eveniet deserunt. Iusto laboriosam nulla adipisci, minima ut laborum?</p>
                    </p>
                    <Link to="/booking/" className="  focus:ring-purple-500 focus:ring-offset-purple-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   uppercase my-2 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 ">
                        Book Service
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ExploreServices;