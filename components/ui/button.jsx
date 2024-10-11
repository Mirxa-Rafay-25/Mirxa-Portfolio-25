"use client"
import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">Hire Me</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
 width: 6.5em;
 height: 2.3em;
 margin: 0.5em;
 background: #1f2937;
 color: white;
 border: none;
 border-radius: 0.625em;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
}

button:hover {
 color: black;
}

button:after {
 content: "";
 background: teal;
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

button:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
`;

export default Button;



