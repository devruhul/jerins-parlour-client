import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookingList from './BookingList/BookingList';

const BookingsLists = () => {
    const { parlourUser } = useAuth()
    const [bookingsList, setBookingsLists] = useState([]);

    useEffect(() => {
        fetch(`https://jerins-parlour-backend.vercel.app/bookings/${parlourUser.email}`)
            .then(res => res.json())
            .then(data => setBookingsLists(data))
    }, [parlourUser.email]);

    // loading
    if (bookingsList.length === 0) {
        return (
            <div className='text-center my-6'>
                <h2 className='mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white'>There is no booking, please book a service and check back later</h2>
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
                        <BookingList
                            key={bookingList._id}
                            {...bookingList}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingsLists;