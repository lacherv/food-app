import React from "react";
import { StyledServices } from "./styles/Services.styled";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";

export default function Services() {
  return (
    <StyledServices id='services'>
      <div className='title'>
        <h1 className='yellow'>What we do?</h1>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
      </div>
      <div className='services'>
        <div className='service'>
          <img src={Services2} alt='Services Image' />
          <p>
            Web page editors now use <span>Lorem Ipsum</span> as their default model text.
          </p>
          <button>Read More</button>
        </div>
        <div className='service yellow'>
          <img src={Services1} alt='Services Image' />
          <p>
            Web page editors now use <span>Lorem Ipsum</span> as their default model text.
          </p>
          <button>Read More</button>
        </div>
        <div className='service'>
          <img src={Services3} alt='Services Image' />
          <p>
            Web page editors now use <span>Lorem Ipsum</span> as their default model text.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </StyledServices>
  );
}
