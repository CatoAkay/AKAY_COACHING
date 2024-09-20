import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px auto;
  max-width: 800px;
`;

function Expect() {
  return (
    <Section id="expect">
      <Title>What to Expect</Title>
      <Description>
        With my coaching, you'll receive tailored programs, personalized
        nutrition advice, and constant support. You'll push your boundaries and
        achieve results you never thought possible.
      </Description>
    </Section>
  );
}

export default Expect;
