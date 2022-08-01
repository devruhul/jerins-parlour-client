import React, { useEffect, useState } from 'react';
import ShowOrderList from '../ShowOrderList/ShowOrderList';

const OrderList = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setCustomers(data)
            })
    }, [])

    // loading
    if (customers.length === 0) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    return (
        <div className=" container px-5 py-4 col-span-full xl:col-span-6  rounded-sm">
            <header>
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    <span className='text-span-text'>Order </span>
                    List
                </div>
            </header>
            <div className="pb-10">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full m-10">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Service Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Edit Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Delete Order</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-100">
                            {
                                customers.map(customer =>
                                    <ShowOrderList
                                        key={customer._id}
                                        {...customer}
                                    />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default OrderList;