import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderStatusUpdate = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${id}`)
            .then(res => res.json())
            .then(data => setCustomer(data)
            )
    }, [id])

    return (
        <div>
            <h2>Hello status update {customer?.orderStatus}</h2>
        </div>
    );
};

export default OrderStatusUpdate;