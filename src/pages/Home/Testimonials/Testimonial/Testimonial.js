import React from 'react';

const Testimonial = ({ name, company, image, text }) => {
    return (
        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl py-10 px-5">
            <div className="flex items-center mt-4">
                <a href="/#" className="block relative">
                    <img alt="profile" src={image} className="mx-auto object-cover rounded-full h-10 w-10 " />
                </a>
                <div className="flex flex-col ml-2 justify-between">
                    <span className="font-semibold text-indigo-500 text-lg">
                        {name}
                    </span>
                    <span className="dark:text-gray-400  text-base flex items-center">
                        {company}
                    </span>
                </div>
            </div>
            <p className="text-gray-600 dark:text-white text-left py-10 leading-loose">
                <span className="font-bold text-indigo-500 text-lg">
                    “
                </span>
                {text}
                <span className="font-bold text-indigo-500 text-lg">
                    ”
                </span>
            </p>
            <div className="text-left">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
            </div>
        </div>
    );
};

export default Testimonial;