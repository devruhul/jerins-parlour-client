import React from 'react';
import jplogo from '../../../assets/Image/jp-logo.png'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const Header = () => {

    const isMenuOpen = function (state) {
        return state.isOpen;
    };

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '15px',
            top: '100px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '29px',
            width: '29px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '3.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }


    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="w-full justify-between flex items-center">
                            <Link to="/" className="flex-shrink-0" >
                                <img className="h-10 w-full" src={jplogo} alt="jplogo" />
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/" className="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" >
                                        Home
                                    </Link>
                                    <Link to="/services" className="text-gray-500 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" >
                                        Services
                                    </Link>
                                    <Link to="/testimonials" className="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" >
                                        Testimonials
                                    </Link>
                                    <Link to="/contact" className="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <Menu right disableCloseOnEsc width={230} onStateChange={isMenuOpen} styles={styles} >
                                <div className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        <Link to="/" className="text-gray-300 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-lg font-medium" >
                                            Home
                                        </Link>
                                        <Link to="/services" className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-lg font-medium" >
                                            Services
                                        </Link>
                                        <Link to="testimonials" className="text-gray-300 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-lg font-medium" >
                                            Testimonials
                                        </Link>
                                        <Link to="contact" className="text-gray-300 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-lg font-medium" >
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;