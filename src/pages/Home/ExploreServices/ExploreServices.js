import React, { useEffect, useState } from "react";
import ExploreService from "./ExploreService/ExploreService";

const ExploreServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("https://jerins-parlour-backend.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  return (
    <div className='my-10 space-y-7 py-10'>
      <h3 className='text-4xl font-bold my-1'>
        Explore More<span className='text-span-text'> Services</span>
      </h3>
      <div className='sm:flex flex-wrap justify-center items-center text-center gap-8'>
        {allServices.map((service) => (
          <ExploreService key={service._id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
