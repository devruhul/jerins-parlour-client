import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingDetails = () => {
    let { id } = useParams();

    const [booking, setBooking] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
            })
    }, [id])

    const handleOnBlur = (e) => {
        const nameInputField = e.target.name
        const valueInputField = e.target.value

        setBooking({
            ...booking,
            [nameInputField]: valueInputField
        })

        console.log(booking)
    }
    // Handle the booking form submit
    const handleBookingDetails = e => {

        const bookingService = {
            ...booking
        }

        // send booking service data to server side
        fetch('http://localhost:5000/bookings/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking service Successfully')
                    e.target.reset()
                }
            })
        // Stop reloading the page
        e.preventDefault()
    }

    return (
        <form onSubmit={handleBookingDetails} className="flex w-full  space-x-3 mx-auto">
            <div className="w-full  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Booking<span className='text-span-text'> The Service {booking.serviceName}</span>
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="serviceName" type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                disabled
                                onBlur={handleOnBlur}
                                defaultValue={booking.serviceName}
                                placeholder="Service Title" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="description" type="text" id="contact-form-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                disabled
                                onBlur={handleOnBlur}
                                defaultValue={booking.description}
                                placeholder="Service Description" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="price" type="number" id="contact-form-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                disabled
                                onBlur={handleOnBlur}
                                defaultValue={booking.price}
                                placeholder="Service Price" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <textarea name="addBookingInfo" type="text" id="contact-form-message" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnBlur}
                                placeholder="Add your additional booking info" rows="5" cols="40">
                            </textarea>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button type='submit' className="uppercase my-6 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BookingDetails;