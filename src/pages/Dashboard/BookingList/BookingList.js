import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [bookingList]);
    
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-14 mx-auto">
                <h2 className='py-5 font-bold text-4xl'>Booking List</h2>
                <div class="flex flex-wrap -m-4">
                    {bookingList.map(booking => (
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="flex flex-wrap ">
                                    <div class="text-gray-600 flex justify-between">
                                        <div>
                                            <img src={booking.imageLink} alt="" className=' w-25' />
                                        </div>
                                        <div>
                                            <p class="text-white bg-pink-500 p-3">{booking.orderStatus.toUpperCase()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h2 class="text-lg text-gray-900 font-medium title-font m-2">{booking.serviceName}</h2>
                                    <p class="leading-relaxed text-base ">{booking.description}</p>
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