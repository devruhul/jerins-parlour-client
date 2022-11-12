import React, { useEffect, useState } from "react";

const OrdersLists = () => {
  const [orderLists, setOrderLists] = useState([]);
  const [selects, setSelects] = useState("");
  const [orderList, setorderList] = useState({});

  useEffect(() => {
    fetch("https://jerins-parlour-backend.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setOrderLists(data));
  }, []);

  // loading
  if (orderLists.length === 0) {
    return (
      <div className='text-center my-6'>
        <i className='fa-solid fa-3x fa-spinner'></i>
      </div>
    );
  }

  const handleChangeStatus = (e, _id) => {
    const updateStatus = [selects];

    fetch(`https://jerins-parlour-backend.herokuapp.com/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          console.log(data);
          alert("Status updated successfully");
          window.location.reload();
          setSelects("");
        } else {
          alert("Status not updated");
        }
      });
    e.preventDefault();
  };

  // delete order from database by id
  const handleOrderDelete = (_id) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      const url = `https://jerins-parlour-backend.herokuapp.com/bookings/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully!");
            window.location.reload();
            console.log(orderList);
            setorderList({});
          }
        });
    }
  };

  return (
    <div className=' container px-5 py-4 col-span-full xl:col-span-6  rounded-sm'>
      <header>
        <div className='mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white'>
          <span className='text-span-text'>Order </span>
          List
        </div>
      </header>
      <div className='pb-10'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full m-10'>
            {/* Table header */}
            <thead className='text-xs font-semibold uppercase text-slate-400 bg-slate-50'>
              <tr>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Name</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Email</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Service Name</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-center'>Edit Status</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-center'>Delete Order</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-100'>
              {orderLists.map((product) => (
                <tr key={product._id}>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='font-medium text-slate-800'>
                        {product.userName}
                      </div>
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left'>{product.userEmail}</div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left font-medium text-green-500'>
                      {product.serviceTitle}
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='flex justify-around'>
                      <select
                        value={selects}
                        onChange={(e) => setSelects(e.target.value)}
                        className='select select-primary w-50 select-sm max-w-xs'
                      >
                        <optgroup label='Select Order Status'>
                          <option
                            defaultValue={product?.orderStatus[0] || null}
                          >
                            {product.orderStatus[0] || null}
                          </option>
                        </optgroup>

                        {/* if order status is empty then show all option*/}
                        {product?.orderStatus[0] === "" && (
                          <>
                            <option value='Pending'>Pending</option>
                            <option value='OnGoing'>OnGoing</option>
                            <option value='Done'>Done</option>
                          </>
                        )}
                        {/* if order status is pending then show option on going and done */}
                        {product?.orderStatus[0] === "Pending" && (
                          <>
                            <option value='OnGoing'>OnGoing</option>
                            <option value='Done'>Done</option>
                          </>
                        )}
                        {/* if order status is on going then show option pending and done */}
                        {product?.orderStatus[0] === "OnGoing" && (
                          <>
                            <option value='Pending'>Pending</option>
                            <option value='Done'>Done</option>
                          </>
                        )}
                        {/* if order status is done then show option pending and on going */}
                        {product.orderStatus[0] === "Done" && (
                          <>
                            <option value='Pending'>Pending</option>
                            <option value='OnGoing'>OnGoing</option>
                          </>
                        )}
                      </select>
                      <div>
                        <button
                          onClick={(e) => handleChangeStatus(e, product._id)}
                          className='text-white bg-black p-2'
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div>
                      <button
                        onClick={() => handleOrderDelete(product._id)}
                        className='btn btn-outline btn-secondary'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersLists;
