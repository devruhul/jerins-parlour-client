import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="'container mx-auto m-2">
      <h2 className='text-3xl text-span-text text-uppercase'>
        Nothing found, please go back to <Link to='/'>Home</Link>{" "}
      </h2>
    </div>
  );
};

export default NotFound;
