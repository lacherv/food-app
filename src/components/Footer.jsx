import React from "react";
import { StyledFooter, LowerFooter } from "./styles/Footer.styled";
import logo from "../assets/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className='footer'>
      <StyledFooter>
        <div className='brand container'>
          <img src={logo} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className='about container'>
          <div className='title'>
            <h3>About Us</h3>
          </div>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text
          </p>
        </div>
        <div className='contact container'>
          <div className='title'>
            <h3>Contact Us</h3>
          </div>
          <p>+27 112 3123 </p>
          <p>foodyama@example.com</p>
          <p>@foodyama</p>
          <p>412 Street, Ground Floor, South Africa</p>
        </div>
      </StyledFooter>
      <LowerFooter className='lower__footer'>
        <h2>
          Copyright &copy; 2022 <span>Food Yama</span>
        </h2>
      </LowerFooter>
    </div>
  );
}
