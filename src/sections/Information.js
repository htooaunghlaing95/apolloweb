import styled from 'styled-components'
import Title from '../components/Title';
import CountUp from 'react-countup'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Section = styled.div`
  padding: 10rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;

  @media (max-width: 64em){
    padding: 5rem 1rem;
  }
`

const Info = styled.div`
    width: 100%;
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: ${props => props.theme.fontxxl};
            @media (max-width: 64em){
              font-size: ${props => props.theme.fontlg};
            }
        }

        h3{
            font-size: ${props => props.theme.fontxl};
            @media (max-width: 64em){
              font-size: ${props => props.theme.fontmd};
            }
        }
    }
`

const Information = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <Section id="information">

      <Title title="Information" />

      <Info>

        <div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1>{counterOn && <CountUp start={0} end={7000} duration={3} delay={0} />}</h1>
          </ScrollTrigger>

          <h3>PUFS</h3>
        </div>
        <div>
          <h1>{counterOn && <CountUp start={0} end={16} duration={3} delay={0} />}</h1>
          <h3>ml</h3>
        </div>
        <div>
          <h1>{counterOn && <CountUp start={0} end={600} duration={3} delay={0} />}</h1>
          <h3>mah</h3>
        </div>
        <div>
          <h1>TYPE-C</h1>
          <h3></h3>
        </div>

      </Info>

    </Section>
  )
}

export default Information