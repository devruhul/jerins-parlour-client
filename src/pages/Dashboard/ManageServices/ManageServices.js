import React, { useEffect, useState } from 'react';
import ManageService from './ManageService/ManageService';

const ManageServices = () => {
    const [handleServices, setHandleServices] = useState([]);

    useEffect(() => {
        fetch('https://jerins-parlour-backend.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setHandleServices(data))
    }, []);

    // loading
    if (handleServices.length === 0) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
            <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    <span className='text-span-text'>All Services </span>
                    List
                </div>
                <div className="flex flex-wrap pb-4">
                    {handleServices.map(service => <ManageService
                        key={service._id}
                        {...service}
                    />)}
                </div>
            </div>
        </section>
    );
};

export default ManageServices;