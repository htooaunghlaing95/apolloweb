import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontxxl};
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;

    @media (max-width: 64em){
        font-size: ${props => props.theme.fontxl};
      }
`

const Title = (props) => {
  return (
    <>
      <Text>{props.title}</Text>
    </>
  );
};

export default Title;