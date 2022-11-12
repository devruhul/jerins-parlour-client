import React, { useState } from "react";

const BookingList = ({
  serviceImg,
  serviceDescription,
  orderStatus,
  serviceTitle,
  _id,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [bookingList, setBookingList] = useState({});

  const handleCancelOrder = (id) => {
    const result = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (result) {
      fetch(`https://jerins-parlour-backend.herokuapp.com/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Order cancelled successfully");
            // const remainingBookings = bookingList.filter(booking => booking._id !== id);
            // setBookingList(remainingBookings);
            window.location.reload();
            setBookingList({});
          }
        });
    }
  };
  return (
    <div className='xl:w-1/3 md:w-1/2 p-10'>
      <div className='border border-gray-200 p-6 rounded-lg'>
        <div className='flex'>
          <div className='text-gray-600 flex justify-around'>
            <div>
              <img src={serviceImg} alt='' className='w-100 h-auto' />
            </div>
            {/* cancel order button */}
            <div>
              <button
                onClick={handleCancelOrder}
                className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full'
              >
                Cancel
              </button>
            </div>
            <div>
              <p className='text-white bg-pink-500 p-2 ml-5'>{orderStatus}</p>
            </div>
          </div>
        </div>
        <div className='text-right'>
          <h2 className='text-lg text-gray-900 font-medium title-font m-2'>
            {serviceTitle}
          </h2>
          <p className='leading-relaxed text-base '>{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
