import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowOrderList = ({ _id, imageLink, parlourUserName, email, serviceName }) => {

    const [status, setStatus] = useState({})

    const getStatus = () => {
        const selectStatus = document.getElementById('status');
        const selectOption = selectStatus.options[selectStatus.selectedIndex];

        const optionText = selectOption.text;
        const optionValue = selectOption.value;
        console.log(optionText, optionValue, status);
        setStatus(optionValue);
    }


    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img className="rounded-full" src={imageLink} width="40" height="40" alt="" />
                    </div>
                    <div className="font-medium text-slate-800">{parlourUserName}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{serviceName}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className='flex justify-around'>

                    <select id="status" onClick={getStatus}>
                        <option value="Pending"
                        >Pending</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Done">Done</option>
                    </select>
                    <div>
                        <Link to={`/dashboard/orderList/${_id}`} className="text-white bg-black p-2">Update</Link>
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