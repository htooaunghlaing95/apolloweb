import React, { useState } from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const CardContainer = styled.div`
  perspective: 1000px;
`;

const Card = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  &.flipped {
    transform: rotateY(180deg);
  }

  @media (max-width: 64em){
    height: 50vh;
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid ${props => props.theme.border};
  background: #000;
  color: ${props => props.theme.text};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Image = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    img{
      width: 14rem;
      @media (max-width: 64em){
        width: 14rem;
      }
    }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 64em){
    margin: 1rem;
    gap: 0rem;
  }
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 2px solid ${props => props.theme.border};
  background: #000;
  color: ${props => props.theme.text};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackContainer = styled.div`
   margin: 2rem;
   h2{
    margin-bottom: 0.5rem;
   }
`;

const Indicator = styled.div`
   margin-top: 1rem;
   
   p{
    margin-top: 0.5rem;
   }
`;



const ProductItem = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <CardContainer>
        <Card className={isFlipped ? 'flipped' : ''} onClick={handleClick}>
          <Front>
            <Image>
              <img src={props.img} alt={props.name} />
            </Image>

            <Info>
              <h2>{props.name}</h2>
              <p>MMK {props.price}</p>
            </Info>
          </Front>

          <Back>
            <BackContainer>
              <h2>{props.name}</h2>
              <p>{props.description}</p>
              {/* <p>E-liquid Capacity: {props.capacity}</p>
              <p>Nicotine Strength: {props.strength}</p>
              <p>Nicotine Dose Per Puff: {props.puff}</p> */}


              <Indicator>
                  <p>Coolness</p>
                  <Circle number={props.coolness} colorCode={props.colorCode} />

                  <p>Smoothness</p>
                  <Circle number={props.smoothness} colorCode={props.colorCode} />



                  <p>Flavor</p>
                  <Circle number={props.flavor} colorCode={props.colorCode} />


                  <p>Sweetness</p>                
                  <Circle number={props.sweetness} colorCode={props.colorCode} />
              </Indicator>   
            </BackContainer>
          </Back>
          
        </Card>
      </CardContainer>
    </>
  );
};

export default ProductItem;