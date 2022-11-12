import React from "react";
import { Link } from "react-router-dom";

const ExploreService = ({
  imageLink,
  serviceName,
  price,
  description,
  _id,
}) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-10 bg-white my-6 hover:drop-shadow-2xl  rounded-lg dark:bg-gray-800'>
      <div className='flex-shrink-0'>
        <div className='flex items-center mx-auto justify-center  rounded-md  text-white'>
          <img src={imageLink} alt='service' className='inline w-32' />
        </div>
      </div>
      <div className='text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-2'>
        <h2>{serviceName}</h2>
      </div>
      <div className='text-2xl sm:text-xl text-span-text font-semibold dark:text-white'>
        <h2>${price}</h2>
      </div>
      <div className='text-md  text-gray-500 dark:text-gray-300 py-4'>
        <p>{description}</p>
      </div>
      <Link
        to={`/exploreService/${_id}`}
        className='  focus:ring-purple-500 focus:ring-offset-purple-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   uppercase my-2 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 '
      >
        Book Service
      </Link>
    </div>
  );
};

export default ExploreService;
