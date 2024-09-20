import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  height: 100vh;
  background-image: url("https://example.com/your-header-image.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

function Header() {
  return (
    <HeaderSection>
      <Title>Akay Coaching</Title>
    </HeaderSection>
  );
}

export default Header;
