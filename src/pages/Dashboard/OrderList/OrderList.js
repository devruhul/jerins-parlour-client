import React, { useEffect, useState } from 'react';

function OrderList() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-4xl text-slate-800">Order List</h2>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full ml-20">
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
                                    <div className="font-semibold text-left">Service</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-100">
                            {
                                customers.map(customer => {
                                    return (
                                        <tr key={customer._id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full" src={customer.imageLink} width="40" height="40" alt={customer.name} />
                                                    </div>
                                                    <div className="font-medium text-slate-800">{customer.parlourUserName}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.email}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">{customer.serviceName}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}

export default OrderList;