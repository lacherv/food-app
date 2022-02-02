import React from 'react'
import { StyledLetter } from './styles/Newsletter.styled'

export default function Newsletter() {
  return (
    <StyledLetter id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or 
        randomised words which don't look even slightly believable
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
      </div>
    </StyledLetter>
  )
}
