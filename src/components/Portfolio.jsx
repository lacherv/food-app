import React from "react";
import { StyledPortfolio } from "./styles/Portfolio.styled";
import background from "../assets/portfolio.jpg";

export default function Portfolio() {
  return (
    <StyledPortfolio id='portfolio'>
      <div className='background'>
        <img src={background} alt='' />
      </div>
      <div className='content'>
        <h1>Buy Premium Pan Free Hand Toast!</h1>
        <h2>
        There are many variations of passages of Lorem Ipsum available
        </h2>
        <button>Buy Now</button>
      </div>
    </StyledPortfolio>
  );
}
