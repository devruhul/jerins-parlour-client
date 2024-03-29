import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { authToken } = useAuth();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://jerins-parlour-backend.herokuapp.com/users/makeAdmin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${authToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("admin added successfully");
          e.target.reset();
        } else {
          alert("admin existed");
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleMakeAdmin}
        className='flex w-full max-w-xl space-y-3 mx-auto'
      >
        <div className='w-full  px-5 py-5 m-auto bg-white rounded-lg shadow dark:bg-gray-800'>
          <div className='mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white'>
            Add a New <span className='text-span-text'>Admin </span>
          </div>
          <div className='grid  grid-cols-2 gap-6 mx-auto'>
            <div className='md:col-span-2 lg:col-span-2'>
              <div className=' relative '>
                <input
                  name='email'
                  type='email'
                  id='contact-form-admin-email'
                  className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                  required
                  onChange={handleOnChange}
                  placeholder='Admin Email'
                />
              </div>
            </div>
            <div className='col-span-2'>
              <button
                type='submit'
                className='uppercase  py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
