import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
const Register = () => {
    const [createUserData, setCreateUserData] = useState({})
    const { createParlourUser } = useFirebase();


    const location = useLocation()
    // const signUpUsingFacebook = () => {
    //     signInWithFacebook();
    // }

    const handleOnBlur = e => {
        // store the value of email and password field
        const emailText = e.target.name
        const passValue = e.target.value

        setCreateUserData({
            ...createUserData,
            [emailText]: passValue
        })
    }

    const signUpUsingEmail = (e) => {
        e.preventDefault();
        // create user with firebase
        createParlourUser(createUserData.email, createUserData.password, createUserData.name, location)

        // match password
        if (createUserData.password !== createUserData.userConfirmPassword) {
            alert('Password do not match')
            return
        }
        else {
            alert('Register Successfully')
            e.target.reset()
        }
    }

    return (
        <div className="flex flex-col w-full mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-3xl font-bold text-gray-600 sm:text-2xl dark:text-white">
                Create an account
            </div>
            <div className="mt-4">
                <form  autoComplete="off" onSubmit={signUpUsingEmail}>
                    <div className="flex flex-col mb-3">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-id-card"></i>
                            </span>
                            <input type="text" name="name" onBlur={handleOnBlur} id="sign-up-name" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name" />
                        </div>
                    </div>

                    <div className="flex flex-col mb-3">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input type="text" name="email" onBlur={handleOnBlur} id="sign-up-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-3">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input type="password" name="password" onBlur={handleOnBlur} id="sign-up-password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Password" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input type="password" name="userConfirmPassword" onBlur={handleOnBlur} id="sign-up-confirm-password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="flex items-center mb-6 -mt-4">
                        <div className="flex ml-auto">
                            <a href="/#" className="inline-flex text-base font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="  focus:ring-purple-500 focus:ring-offset-purple-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   uppercase my-2 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 ">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/login" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2 text-2xl">
                        Already created an account?
                    </span>
                </Link>
            </div>
        </div>

    );
};

export default Register;