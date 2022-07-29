import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowOrderList = ({ _id, serviceImg, userName, userEmail, serviceTitle }) => {

    const [status, setStatus] = useState();

    const getStatus = () => {
        const selectStatus = document.getElementById('status');
        const selectOption = selectStatus.option[selectStatus.selectedIndex];

        const optionText = selectOption.text;
        const optionValue = selectOption.value;
        console.log(optionText, optionValue, status);
        setStatus(optionValue);
    }

    const handleChangeStatus = (e) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
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

                    <select value={status} onClick={getStatus} onChange={e => setStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Ongoing</option>
                        <option>Done</option>
                    </select>
                    <p>{status}</p>
                    <div>
                        <button onClick={handleChangeStatus} className="text-white bg-black p-2">Update</button>
                    </div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div>
                    {/* <button className="btn btn-outline btn-secondary m-3">Update</button> */}
                    <button className="btn btn-outline btn-secondary">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default ShowOrderList;