import styled from 'styled-components'
import Astronaut from '../assets/Images/astronaut.png'
import Apollo from '../assets/Images/apollo.png'
import Smoke from '../assets/Images/smoke-bg.gif'
import apollo from '../assets/Images/3apollo.png'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Section = styled.div`
  padding: 0rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;
  @media (max-width: 64em){
    padding: 0rem 0.5rem;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  img{
    width: 12rem;
    &:nth-of-type(2){
      width: 2rem;
    }

    @media (max-width: 64em){
      width: 6rem;
      &:nth-of-type(2){
        width: 1rem;
      }
    }
  }
  
`
const Card = styled.div`
  background-image: url(${Smoke}); 
  background-size: cover; 
  background-position: center; 
  border-radius: 1.5rem;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 64em){
    border-radius: 0.5rem;
    padding: 4rem 1rem 4rem 1rem;
    flex-direction: column;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%; 
`

const Text = styled(motion.h1)`
    width: 50%;
    text-transform: capitalize;
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontxxxl};
    @media (max-width: 64em){
      width: 100%;
      font-size: ${props => props.theme.fontxxl};
    }
`

const Image = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 64em){
    display: none;
  }
`

const Button = styled(motion.div)`
  a{
    display: flex;
    color: ${props => props.theme.secondaryText};
    font-size: ${props => props.theme.fontlg};
    background: #C6E7FF;
    margin-top: 1rem;
    padding: 1rem;
    width: 10rem;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
      transform: scale(1.1);
      color:  ${props => props.theme.text};
    } 

    @media (max-width: 64em){
      padding: 0.5rem;
      width: 8rem;
      font-size: ${props => props.theme.fontmd};
    }
  }
`

const imageVariants = {
  hidden: {
    opacity: 0,
    y: -1000,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 2,
      delay: 1, // 2
      ease: 'easeInOut',
    },
  },
};



const Home = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }


  return (
    <Section id="home">
      <Header>
        <img src={Apollo} alt="apollo" />

        <img src={Astronaut} alt="Astronaut" />
      </Header>

      <Card>
        <Info>
          <Text>
            <span>
              <Typewriter
                words={['Fly with Apollo']}
                delaySpeed={1000}
              />
            </span>
          </Text>
          <Image
            variants={imageVariants} initial="hidden" animate="visible"
          >
            <img
              src={apollo}
              alt="apollo"
            />
          </Image>
        </Info>

        <Button>
          <a onClick={() => scrollTo('products')}>vape with me</a>
        </Button>
      </Card>

    </Section>
  )
}

export default Home