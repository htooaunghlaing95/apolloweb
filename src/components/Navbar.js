import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  transition: all 0.3s ease;
  z-index: 6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  width: 20%;
  height: 7vh;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 2rem;
  margin-bottom: 1rem;
  @media (max-width: 64em) {
    width: 70vw;
    padding: 0 0.5rem;
    height: 3rem;
  }
`;

const Item = styled(motion.li)`
  font-size:  ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.text};
  @media (max-width: 64em) {
    flex-direction:column;
    padding: 0.5rem 0;
    font-size:  ${(props) => props.theme.fontsm};
  }
`;

const Divider = styled.span`
  display: flex;
  width: 0.05rem;
  height: 2vh;
  background: ${(props) => props.theme.secondaryText};
  transform: rotate(25deg);
`;

const Navbar = () => {
  const { scroll } = useLocomotiveScroll();

  const handleClick = (id) => {
    let elem = document.querySelector(id);
    // setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <>
      <NavContainer

        initial={{ y: `100%` }}
        animate={{ y: 0 }}
        transition={{ duration: 3, delay: 5 /* 2 */ }}
        data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
      >
        <MenuItems
          drag="y"
          dragConstraints={{ top: 0, bottom: 70 }}
          dragElastic={0.05}
          dragSnapToOrigin
        >
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleClick('#home')}
          >
            {' '}
            <Link to="/">Home</Link>
          </Item>
          <Divider />
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleClick('.about')}
          >
            <Link to="/">Me</Link>
          </Item>
          <Divider />
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleClick('.works')}
          >
            <Link to="/">Works</Link>
          </Item>
          <Divider />
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleClick('.exp')}
          >
            {' '}
            <Link to="/">Exp</Link>
          </Item>
        </MenuItems>
      </NavContainer>
    </>
  );
};

export default Navbar;
