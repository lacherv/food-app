import React from "react";
import { StyledProducts } from "./styles/Products.styled";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "R122.4",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "R15.5",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "R18",
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "R112.5",
    },
  ];
  return (
    <StyledProducts id="products">
      <div className='title'>
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className='products'>
        {data.map((product) => {
          return (
            <div className='product'>
              <div className='image'>
                <img src={product.image} alt='' />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </StyledProducts>
  );
}
