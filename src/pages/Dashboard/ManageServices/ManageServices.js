import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, []);


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <h2 className='py-5 font-bold text-4xl'>All Services List</h2>
                <div className="flex flex-wrap -m-4">
                    {services.map(service => (
                        <div key={service._id} className="xl:w-1/3 md:w-1/2 p-10">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex flex-wrap ">
                                    <div className="text-gray-600 flex justify-between">
                                        <div>
                                            <img src={service.imageLink} alt="" className=' w-50' />
                                        </div>
                                        <div>
                                            <button className="text-white bg-pink-500 p-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h2 className="text-lg text-gray-900 font-medium title-font m-2">{service.serviceName}</h2>
                                    <p className="text-black text-2xl p-2">Price $<span className='text-span-text font-semibold'>{service.price}</span> </p>
                                    <p className="leading-relaxed text-base ">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManageServices;