import React from 'react';

const ManageService = ({ _id, serviceName, imageLink, price, description }) => {

    const handleDeleteService = () => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `http://localhost:5000/services/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!')
                        window.location.reload();
                    }
                })
        }
    }
    return (
        <div className="xl:w-1/3 md:w-1/2 p-10">
            <div className="border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-wrap ">
                    <div className="text-gray-600 flex justify-between">
                        <div>
                            <img src={imageLink} alt="" className=' w-50' />
                        </div>
                        <div>
                            <button onClick={() => handleDeleteService(_id)} className="text-white bg-pink-500 p-2">Delete</button>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <h2 className="text-lg text-gray-900 font-medium title-font m-2">{serviceName}</h2>
                    <p className="text-black text-2xl p-2">Price $<span className='text-span-text font-semibold'>{price}</span> </p>
                    <p className="leading-relaxed text-base ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ManageService;