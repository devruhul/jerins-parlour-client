import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="text-white bg-footer-bg body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div class="flex title-font font-medium items-center md:justify-start justify-center text-white gap-7">
                        {/* location icon */}
                        <i class="fa-solid  text-white fa-location-dot text-3xl"></i>
                        <p class="mt-2 text-base text-white"> (0th Floor), Road,New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-bold text-white tracking-widest text-lg mb-3">Company</h2>
                        <nav class="list-none mb-10 space-y-2">
                            <li>
                                <Link to="/about" class="text-white">About</Link>
                            </li>
                            <li>
                                <Link to="" class="text-white">Project</Link>
                            </li>
                            <li>
                                <Link to="" class="text-white">Our Team</Link>
                            </li>
                            <li>
                                <Link to="" class="text-white">Terms & Conditions</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-bold text-white tracking-widest text-lg mb-3">Quick Links</h2>
                        <nav class="list-none mb-10 space-y-2">
                            <li>
                                <Link to="/" class="text-white  ">Rentals</Link>
                            </li>
                            <li>
                                <Link to="/" class="text-white  ">Sales</Link>
                            </li>
                            <li>
                                <Link to="/contact" class="text-white  ">Contact</Link>
                            </li>
                            <li>
                                <Link to="/" class="text-white  ">Our Blog</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:ml-3 space-y-3">
                        <div class="flex title-font font-bold items-center md:justify-start justify-center text-white">
                            <span class=" text-lg">About us</span>
                        </div>
                        <p class="mt-2 text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-400">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-white text-base text-center sm:text-left">© 2022
                        <a to="" href="https://devruhul.netlify.app/" rel="noopener noreferrer" class="text-black text-base ml-1" target="_blank">Ruhul Amin </a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-lg">
                        <Link to="/" class="text-white">
                            <i class="fa-brands fa-facebook"></i>
                        </Link>
                        <Link to="/" class="ml-3 text-white">
                            <i class="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="/" class="ml-3 text-white">
                            <i class="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link to="/" class="ml-3 text-white">
                            <i class="fa-brands fa-youtube"></i>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;