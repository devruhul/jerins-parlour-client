import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://jerins-parlour-backend.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    // loading
    if (services.length === 0) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    return (
        <div className='my-10 space-y-7 py-10'>
            <h3 className='text-4xl font-bold my-1'>Our Awesome <span className="text-span-text">Services</span></h3>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
                {services.map(service => <Service key={service._id} {...service} />)}
            </div>
            <div className='py-8'>
                <Link to="/exploreServices" className="uppercase my-6 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Explore More
                </Link>
            </div>
        </div>

    );
};

export default Services;