import React from 'react';
import faceWash from '../../../assets/images/facewash-women.png'

const Feature = () => {
    return (
        <section class="text-gray-600 py-12 body-font bg-light-tomato">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={faceWash} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-3xl md:text-3xl text-3xl mb-4 font-bold text-gray-900">Let us handle your <br /> screen
                        <span class="text-span-text"> Professionally.</span>
                    </h1>
                    <p class="mb-8 leading-relaxed">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div class="flex justify-center gap-8">
                        <div className='flex flex-col space-y-5'>
                            <h1 class="inline-flex  text-span-text border-0 focus:outline-none  rounded text-5xl font-bold">500+</h1>
                            <h3 class="inline-flex  text-gray-800 border-0 focus:outline-none  rounded text-lg whitespace-nowrap font-bold">Happy Customer</h3>
                        </div>
                        <div className='flex flex-col space-y-5'>
                            <h1 class="inline-flex  text-span-text border-0 focus:outline-none  rounded text-5xl font-bold">16+</h1>
                            <h3 class="inline-flex  text-gray-800 border-0 focus:outline-none  rounded text-lg font-bold whitespace-nowrap">Total Service</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;