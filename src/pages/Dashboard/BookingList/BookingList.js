import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings]);

    // loading
    if (bookings.length === 0) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <h2 className='py-5 font-bold text-4xl'>Booking List</h2>
                <div className="flex flex-wrap -m-4">
                    {bookings.map(booking => (
                        <div key={booking._id} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex flex-wrap ">
                                    <div className="text-gray-600 flex justify-between">
                                        <div>
                                            <img src={booking.serviceImg} alt="" className=' w-25' />
                                        </div>
                                        <div>
                                            <p className="text-white bg-pink-500 p-2">{booking.orderStatus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h2 className="text-lg text-gray-900 font-medium title-font m-2">{booking.serviceTitle}</h2>
                                    <p className="leading-relaxed text-base ">{booking.serviceDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingList;