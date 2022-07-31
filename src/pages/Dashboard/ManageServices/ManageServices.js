import React, { useEffect, useState } from 'react';
import ManageService from './ManageService/ManageService';

const ManageServices = () => {
    const [handleServices, setHandleServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setHandleServices(data))
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <h2 className='py-5 font-bold text-4xl'>All Services List</h2>
                <div className="flex flex-wrap -m-4">
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