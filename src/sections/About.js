import styled from 'styled-components'
import { MdPlayArrow } from "react-icons/md";
import Title from '../components/Title';
import { useState } from 'react';

const Section = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;

  @media (max-width: 64em){
    padding: 1rem 1rem;
  }
`

const Content = styled.div`
    width: 100%;
    margin-top: 2rem;
    color: ${props => props.theme.text};

    @media (max-width: 64em){
      margin-top: 0rem;
    }

    h3{
        margin-bottom: 1rem;
        font-size: ${props => props.theme.fontxxl};
        @media (max-width: 64em){
          font-size: ${props => props.theme.fontlg};
        }
    }

    h5{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-size: ${props => props.theme.fontxl};
        line-height: 4rem;
        letter-spacing: 3px;

        @media (max-width: 64em){
          font-size: ${props => props.theme.fontmd};
          line-height: 3rem;
          letter-spacing: 1px;
        }
    }
`

const Ingredients = styled.div`
    width: 100%;
    margin-top: 6rem;
    margin-bottom: 5rem;
    color: ${props => props.theme.text};
    @media (max-width: 64em){
      margin-top: 4rem;
      margin-bottom: 0rem;
    }

    h3{
        margin-bottom: 2rem;
        font-size: ${props => props.theme.fontxxl};
        @media (max-width: 64em){
          font-size: ${props => props.theme.fontlg};
        }
    }

    h5{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-size: ${props => props.theme.fontxl};
        line-height: 4rem;
        letter-spacing: 3px;

        @media (max-width: 64em){
          font-size: ${props => props.theme.fontmd};
          line-height: 3rem;
          letter-spacing: 1px;
        }
    }
`



const About = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <Section id="about">

      <Title title="About" />

      <Content>
        <h3>Disposable Device Pod</h3>

        <h5
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <MdPlayArrow />  Keep away from childreen and pets.
        </h5>
        <h5
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <MdPlayArrow />  Do not ingest or apply to skin.
        </h5>
        <h5
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <MdPlayArrow />  You must be 18 years old.
        </h5>
        <h5
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <MdPlayArrow />  This prolduct may cause reproductive harm and is not intended for pregnant women.
        </h5>
      </Content>

      <Ingredients>
        <h3>Ingredients Vegetable Glycerin</h3>
        <h5
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Propylence Glycol, Nicotine, Natural & Artificial Flavors.
        </h5>
      </Ingredients>

    </Section>
  )
}

export default About