// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     return (

//         <div className="flex flex-col w-full mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
//             <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
//                 Login To Your Account
//             </div>
//             <div className="flex gap-4 item-center">
//                 <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
//                         </path>
//                     </svg>
//                     Facebook
//                 </button>
//                 <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
//                         </path>
//                     </svg>
//                     Google
//                 </button>
//             </div>
//             <div className="mt-8">
//                 <form action="#" autoComplete="off">
//                     <div className="flex flex-col mb-2">
//                         <div className="flex relative ">
//                             <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
//                                 <i className="fa-solid fa-envelope"></i>
//                             </span>
//                             <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
//                         </div>
//                     </div>
//                     <div className="flex flex-col mb-6">
//                         <div className="flex relative ">
//                             <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
//                                 <i className="fa-solid fa-lock"></i>
//                             </span>
//                             <input type="password" id="sign-in-password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
//                         </div>
//                     </div>
//                     <div className="flex items-center mb-6 -mt-4">
//                         <div className="flex ml-auto">
//                             <a href="/#" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
//                                 Forgot Your Password?
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex w-full">
//                         <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <div className="flex items-center justify-center mt-6">
//                 <Link to="/register" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
//                     <span className="ml-2 text-2xl">
//                         You don't have an account?
//                     </span>
//                 </Link>
//             </div>
//         </div>

//     );
// };

// export default Login;