import React from 'react';
import styled from 'styled-components';
import assets from '../assets/assets';

const Button = ({text}) => {

  const handleDownload = () => {
  console.log("handleDownload called");
  
      const link = document.createElement('a');
      console.log("Downloading resume");
      
      link.href = assets.Resume; 
      link.download = 'Resume.pdf';
      link.click();
    };
    console.log("Button text:", text);
  return (
    <StyledWrapper>
      <button onClick={text === "Resume" ? handleDownload : () => window.location.href = "#contact"}>
        {text}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   padding: 0.6em 1.6em;
   border: 2px solid #17C3B2;
   position: relative;
   overflow: hidden;
   background-color: transparent;
   text-align: center;
   text-transform: uppercase;
   font-size: 16px;
   transition: .3s;
   z-index: 1;
   font-family: inherit;
   color: #17C3B2;
   cursor: pointer;
  }

  button::before {
   content: '';
   width: 0;
   height: 300%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
   background: #17C3B2;
   transition: .5s ease;
   display: block;
   z-index: -1;
  }

  button:hover::before {
   width: 105%;
  }

  button:hover {
   color: #111;
  }`;

export default Button;
