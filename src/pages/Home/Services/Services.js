import React from 'react';
import service1 from '../../../assets/icon/service-1.png'
import service2 from '../../../assets/icon/service-2.png'
import service3 from '../../../assets/icon/service-3.png'
import Service from './Service/Service';

const services = [
    {
        id: 1,
        title: 'Anti Age Face Treatment',
        price: 199,
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: service1

    },
    {
        id: 2,
        title: 'Hair Color & Styling',
        price: 99,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: service2

    },
    {
        id: 3,
        title: 'Skin Care Treatment',
        price: 299,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: service3
    }
]


const Services = () => {
    return (
        <div className='my-10 space-y-7 py-10'>
            <h3 className='text-4xl font-bold my-1'>Our Awesome <span className="text-span-text">Services</span></h3>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
                {
                    services.map((service) => <Service
                        key={service.id}
                        {...service}
                    ></Service>
                    )}
            </div>
            <div className='py-8'>
                <button className="uppercase my-6 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Explore More
                </button>
            </div>
        </div>


    );
};

export default Services;