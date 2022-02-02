import React from "react";
import pasta from "../assets/pasta.png";
import { StyledTestimonials } from './styles/Testimonials.styled';


export default function Testimonials() {
  return (
    <StyledTestimonials id='testimonials'>
      <div className='container'>
        <div className='title'>
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className='testimonials'>
          <div className='testimonial'>
            <div className='image'>
              <img src={pasta} alt='' />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className='testimonial'>
            <div className='image'>
              <img src={pasta} alt='' />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className='testimonial'>
            <div className='image'>
              <img src={pasta} alt='' />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
        </div>
      </div>
    </StyledTestimonials>
  );
}
