import React from "react";
import review1 from "../../../assets/images/review-1.png";
import review2 from "../../../assets/images/review-2.png";
import review3 from "../../../assets/images/review-3.png";
import Testimonial from "./Testimonial/Testimonial";

const reviews = [
  {
    id: 1,
    name: "Nash Patrik",
    company: "CEO, Manpol",
    text: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
    image: review1,
  },
  {
    id: 2,
    name: "Mirriam Barron",
    company: "CEO, TechNext",
    text: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
    image: review2,
  },
  {
    id: 3,
    name: "Bria Malone",
    company: "CEO, TechPick",
    text: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
    image: review3,
  },
];

const Testimonials = () => {
  return (
    <div className='mt-12 space-y-10 '>
      <h3 className='text-4xl font-bold my-1'>
        <span className='text-span-text'>Testimonials</span>
      </h3>
      <div className='w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8'>
        {reviews.map((review) => (
          <Testimonial key={review.id} {...review}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
