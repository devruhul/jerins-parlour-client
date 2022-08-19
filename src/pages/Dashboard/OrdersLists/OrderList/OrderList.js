import React, { useEffect, useState } from 'react';

const OrderList = ({ _id, serviceImg, userName, userEmail, serviceTitle }) => {

    const [changeStatus, setChangeStatus] = useState("");
    const [customerOrder, setCustomerOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${_id}`)
            .then(res => res.json())
            .then(data => setCustomerOrder(data))
    }, [_id])

    const getStatus = () => {
        const selectStatus = document.getElementById('status');
        const selectOption = selectStatus.options[selectStatus.selectedIndex];
        const optionText = selectOption.text;
        const optionValue = selectOption.value;
        console.log(optionText, optionValue, changeStatus);
        setChangeStatus(optionText);
    }

    const handleChangeStatus = (e) => {
        const updateStatus = {
            orderStatus: changeStatus
        }

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status updated successfully');
                    console.log(data);
                    setChangeStatus(changeStatus);
                }
                else {
                    alert('Status not updated');
                }
            })
    }

    // delete order from database by id
    const handleOrderDelete = () => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `http://localhost:5000/bookings/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        window.location.reload();
                        setCustomerOrder({});
                    }
                })
        }
    }

    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-slate-800">{userName}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{userEmail}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{serviceTitle}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className='flex justify-around'>
                    <select id='status' value={changeStatus} onChange={getStatus}>

                        {customerOrder.orderStatus === "Pending" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null
                        }
                        {customerOrder.orderStatus === "Ongoing" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null}
                        {customerOrder.orderStatus === "Done" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null}

                        <option>Ongoing</option>
                        <option>Done</option>
                    </select>
                    <div>
                        <button onClick={handleChangeStatus} className="text-white bg-black p-2">Update</button>
                    </div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div>
                    <button onClick={() => handleOrderDelete(customerOrder._id)} className="btn btn-outline btn-secondary">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default OrderList;