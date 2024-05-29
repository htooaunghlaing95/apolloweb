import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/loading.json';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  }
`;



const Loader = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <Lottie
                className="lottie"
                options={defaultOptions}
                width={300}
                height={100}
            />

        </Container>
    );
};

export default Loader;
