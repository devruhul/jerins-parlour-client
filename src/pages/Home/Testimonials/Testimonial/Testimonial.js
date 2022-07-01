import React from 'react';

const Testimonial = ({ name, company, image, text }) => {
    return (
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl py-10 px-5">
            <div class="flex items-center mt-4">
                <a href="/#" class="block relative">
                    <img alt="profile" src={image} class="mx-auto object-cover rounded-full h-10 w-10 " />
                </a>
                <div class="flex flex-col ml-2 justify-between">
                    <span class="font-semibold text-indigo-500 text-lg">
                        {name}
                    </span>
                    <span class="dark:text-gray-400  text-base flex items-center">
                        {company}
                    </span>
                </div>
            </div>
            <p class="text-gray-600 dark:text-white text-left py-10 leading-loose">
                <span class="font-bold text-indigo-500 text-lg">
                    “
                </span>
                {text}
                <span class="font-bold text-indigo-500 text-lg">
                    ”
                </span>
            </p>
            <div class="text-left">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            </div>
        </div>
    );
};

export default Testimonial;