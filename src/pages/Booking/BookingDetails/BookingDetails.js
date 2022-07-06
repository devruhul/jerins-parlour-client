import React from 'react';
import { useParams } from 'react-router-dom';

const BookingDetails = () => {
    let { id } = useParams();
    return (
        <div>
            <h2>This is booking details {id}</h2>
        </div>
    );
};

export default BookingDetails;