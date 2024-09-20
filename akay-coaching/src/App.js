import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Expect from "./components/Expect";
import Price from "./components/Price";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #f76c6c;
  }
`;

function App() {
  return (
    <Container>
      <Navigation>
        <NavLink to="about" smooth={true} duration={500}>About Me</NavLink>
        <NavLink to="expect" smooth={true} duration={500}>What to Expect</NavLink>
        <NavLink to="price" smooth={true} duration={500}>Price</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </Navigation>
      <Header />
      <About />
      <Expect />
      <Price />
      <Testimonials />
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default App;
