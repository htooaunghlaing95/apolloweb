import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Home from "./sections/Home";
import Products from "./sections/Products";
import About from "./sections/About";
import Information from "./sections/Information";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark} >


        {
          Loaded ? (
            <>
              <AnimatePresence>
                <Home key="home" />
                <Information key="information" />
                <Products key="products" />
                <About key="about" />
                <Contact key="contact" />
                <Footer key="footer" />
              </AnimatePresence>
            </>
          ) : <Loader />
        }

      </ThemeProvider>
    </>
  );
}

export default App;
