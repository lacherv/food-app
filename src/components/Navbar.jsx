import React from "react";
import { StyledNav } from "./styles/Navbar.styled";
import foodYummy from "../assets/FoodYummy.png";

export default function Navbar() {
  return (
    <StyledNav>
      <div className='brand'>
        <img src={foodYummy} alt='brand' />
        <div className='toggle'></div>
      </div>
      <ul className='links'>
        <li>
          <a href='#home' className='active'>
            Home
          </a>
        </li>
        <li>
          <a href='#services'>Our Service </a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonilas</a>
        </li>
        <li>
          <a href='#products'>Products</a>
        </li>
        <li>
          <a href='#newsletter'>Newsletter</a>
        </li>
      </ul>
    </StyledNav>
  );
}
