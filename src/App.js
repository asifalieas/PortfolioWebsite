
import React from 'react'
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

//components
import MyNavbar from "./components/my-navbar/navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.components";
import About from "./pages/about/about.components";
import BG from "./assets/img/parallex/cool.png"

const App = () => {
  return (
    (<div >
      <MyNavbar />
      <MyCarousel />
      <TitleMessage/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/cool.png")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      
    </div>)
  );
}

export default App;
