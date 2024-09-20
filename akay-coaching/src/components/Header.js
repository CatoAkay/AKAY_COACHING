import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
    height: 100vh;
    position: relative;
    background-image: url("/pic/cato1.jpg");
    background-size: cover;
    background-position: 50% 24%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    padding: 20px;
    position: relative;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

function Header() {
  return (
    <HeaderSection>
      <Title>Akay Coaching</Title>
    </HeaderSection>
  );
}

export default Header;
