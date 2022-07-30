import React, { useEffect, useState } from 'react';

const ShowOrderList = ({ _id, serviceImg, userName, userEmail, serviceTitle }) => {

    const [status, setStatus] = useState("");
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
        console.log(optionText, optionValue, status);
        setStatus(optionValue);
    }

    const handleChangeStatus = (e) => {
        const updateStatus = {
            orderStatus: status
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
                    setStatus(status);
                }
                else {
                    alert('Status not updated');
                }
            })
    }

    // delete order
    // delete order from database by id
    const handleOrderDelete = id => {
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
                        setCustomerOrder({});
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img className="rounded-full" src={serviceImg} width="40" height="40" alt="" />
                    </div>
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
                    <select id='status' value={status} onChange={getStatus}>
                        {/* <option >select status</option> */}



                        {customerOrder.orderStatus === "Pending" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null
                        }
                        {customerOrder.orderStatus === "Ongoing" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null}
                        {customerOrder.orderStatus === "Done" ? <option value={customerOrder.orderStatus}>{customerOrder.orderStatus}</option> : null}

                        {/* <option >Pending</option> */}
                        if (customerOrder.orderStatus !== "Ongoing"){
                            <option >Ongoing</option>

                        }else{
                            <option >Done</option>
                        }

                    </select>
                    <div>

                        <button onClick={handleChangeStatus} className="text-white bg-black p-2">Update</button>
                    </div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div>
                    {/* <button className="btn btn-outline btn-secondary m-3">Update</button> */}
                    <button onClick={() => handleOrderDelete(customerOrder._id)} className="btn btn-outline btn-secondary">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default ShowOrderList;