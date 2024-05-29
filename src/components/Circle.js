import React from 'react';
import { FaCircle } from "react-icons/fa6";
import styled from 'styled-components';



const CircleDot = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const Circle = (props) => {
    const { number, colorCode } = props;
    const circles = Array(5).fill(colorCode).map((color, index) => {
      return <FaCircle key={index} color={index < number ? colorCode : "#fff"} />;
    });
  
    return (
      <CircleDot>
        {circles}
      </CircleDot>
    );
};

export default Circle;