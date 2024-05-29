import styled from 'styled-components'
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

const Section = styled.div`
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;

  @media (max-width: 64em){
    padding: 5rem 1rem;
  }
`

const Title = styled.h1`
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontxl};
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`

const Social = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontlg};
    .icon{
      cursor: pointer;
      background: #17143F;
      padding: 1rem;
      border-radius: 50%;
      transition: transform 0.3s ease;

      &:hover{
        transform: rotate(360deg);
      } 
    }
    
`

const Menu = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontlg};
    a{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      &:hover{
        transform: scale(1.1);
        text-decoration: underline;
      } 
    }

    @media (max-width: 64em){
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 1rem;
      font-size: ${props => props.theme.fontmd};
    }
    
`


const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section id="footer">
      <Title>
        APOLLO
      </Title>

      <Social>
        <a
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          href="https://gmail.com"
          target="_blank"
        >
          <FaFacebookF className='icon' />
        </a>
        <a
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          href="mailto:royalnewplanet.info@gmail.com"
        >
          <BiLogoGmail className='icon' />
        </a>

        <a
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          href="tel:+959409899919"
        >
          <FaPhoneAlt className='icon' />
        </a>


      </Social>

      <Menu
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <a onClick={() => scrollTo('home')}>Home</a>
        <a onClick={() => scrollTo('information')}>Information</a>
        <a onClick={() => scrollTo('products')}>Products</a>
        <a onClick={() => scrollTo('about')}>About</a>
      </Menu>
    </Section>
  );
};

export default Footer;

