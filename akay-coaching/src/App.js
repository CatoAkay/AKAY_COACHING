import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Expect from "./components/Expect";
import Price from "./components/Price";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import GlobalStyle from './components/GlobalStyle';
import Feedback from './components/Feedback';
import './App.css';
import Testimonials from './components/Testimonials';

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
    background-color: rgba(20, 20, 20, 0.9); /* Darker background */
    padding: 15px 0; /* Increased padding for a more spacious look */
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
`;

const NavLink = styled(Link)`
    color: #dcdcdc; /* Light gray for text */
    font-weight: bold;
    text-decoration: none; /* Remove underline */
    transition: color 0.3s ease, transform 0.3s ease; /* Smooth transition */

    &:hover {
        color: #f76c6c; /* Highlight color on hover */
        transform: scale(1.1); /* Slight scale effect */
    }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
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
      <Feedback />
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default App;
