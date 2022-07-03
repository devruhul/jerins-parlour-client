import React from 'react';

const Service = ({ img, title, description, price }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  hover:drop-shadow-2xl  rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center  rounded-md  text-white">
                    <img src={img} alt="" className='inline w-32' />
                </div>

            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-2">
                {title}
            </h3>
            <h3 className="text-2xl sm:text-xl text-span-text font-semibold dark:text-white">
                ${price}
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                {description}
            </p>
        </div>
    );
};

export default Service;