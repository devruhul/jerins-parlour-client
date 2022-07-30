import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const ServiceReview = () => {
    const { parlourUser } = useFirebase();

    const [serviceReview, setServiceReview] = useState({})

    const handleOnChange = (e) => {
        const nameInputField = e.target.name
        const valueInputField = e.target.value

        setServiceReview({
            ...serviceReview,
            [nameInputField]: valueInputField
        })
    }

    const handleServiceReview = (e) => {

        const reviewInfo = {
            ...serviceReview,
            parlourUserName: parlourUser?.displayName,
            email: parlourUser?.email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Successfully')
                    e.target.reset()
                }
            })

        e.preventDefault();
    }

    return (
        <form onSubmit={handleServiceReview} className="flex w-full max-w-xl space-y-3 mx-auto">
            <div className="w-full  px-5 py-5 m-auto mt-5 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="font-semibold text-4xl mb-4 text-slate-800">Reviews</h2>
                <div className="grid  grid-cols-2 gap-6 mx-auto">
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="userName" type="text" id="contact-form-user-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                value={parlourUser?.displayName}
                                placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="companyName" type="text" id="contact-form-company-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 col-span-2">
                        <div className=" relative ">
                            <textarea name="yourReview" type="text" id="contact-form-review" className=" resize flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                placeholder="Your Review" rows="5" cols="40">
                            </textarea>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button type='submit' className="uppercase my-6 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ServiceReview;