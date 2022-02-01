import React from "react";
import { StyledHero } from "./styles/Hero.styled";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/HeroDesign.png";
export default function Hero() {
  return (
    <StyledHero id='home'>
      <div className='background'>
        <img src={hero} alt='Background Image' />
      </div>
      <div className='content'>
        <div className='sale'>
          <img src={heroDesign} alt='Hero Design' />
          <h1>
            BIG SALE
            <span>50% OFF</span>
          </h1>
        </div>
        <div className='info'>
          <h2>RETAILER</h2>
          <em>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            quaerat!
          </em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </StyledHero>
  );
}