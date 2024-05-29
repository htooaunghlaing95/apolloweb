import React from 'react';
import styled from 'styled-components'
import Title from '../components/Title'
import Map from '../components/Map';
import Form from '../components/Form';

const Section = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;

  @media (max-width: 64em){
    padding: 5rem 1rem;
  }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10rem;
    color: ${props => props.theme.text};

    @media (max-width: 64em){
      flex-direction: column;
      gap: 5rem;
    }
`

const Address = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1{
        font-size: ${props => props.theme.fontxl};
    }

    h3{
      margin-bottom: 1rem;
    }

    @media (max-width: 64em){
      width: 100%;
      margin-top: -2rem;
    }
`


const ContentUs = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 64em){
      width: 100%;
      gap: 0rem;
    }
`

const Contact = () => {


  return (
    <Section id="contact">

      <Title title="Contact Us" />

      <Container>
        <Address>
          <h1>Address</h1>

          <Map />

          <div className='address'>
            <h3>Imported And Distibuted by Royal New Planet Co LTD</h3>
            <p>No.9, Room-D(Ground Floor), 7 Wards,</p>
            <p>Pannita Condo, Pannita Street, Hlaing Township</p>
            <p>Yangon</p>
          </div>
        </Address>

        <ContentUs>
          <Form />
        </ContentUs>
      </Container>



    </Section>
  )
}

export default Contact