import React, { useEffect, useState } from 'react';

const BookingsLists = () => {
    const [bookingsList, setBookingsLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookingsLists(data))
    }, []);

    // loading
    if (bookingsList.length === 0) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    return (
        <section className="container  px-5 py-5 text-gray-600 body-font">
            <div className=" mx-auto">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    <span className='text-span-text'>Booking </span>
                    List
                </div>
                <div className="flex flex-wrap -m-4">
                    {bookingsList.map(bookingList => (
                        <div key={bookingList._id} className="xl:w-1/3 md:w-1/2 p-10">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex flex-wrap ">
                                    <div className="text-gray-600 flex justify-between">
                                        <div>
                                            <img src={bookingList.serviceImg} alt="" className=' w-25' />
                                        </div>
                                        <div>
                                            <p className="text-white bg-pink-500 p-2">{bookingList.orderStatus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h2 className="text-lg text-gray-900 font-medium title-font m-2">{bookingList.serviceTitle}</h2>
                                    <p className="leading-relaxed text-base ">{bookingList.serviceDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingsLists;