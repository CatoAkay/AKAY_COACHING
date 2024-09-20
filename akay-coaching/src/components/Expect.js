import React from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background with transparency
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold; // Bold for emphasis
    color: #dcdcdc; // Light gray for the title
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); // Shadow for depth
    margin-bottom: 20px; // Space below the title
`;

const Description = styled.p`
    font-size: 1.2rem;
    margin: 20px auto;
    max-width: 800px;
    line-height: 1.6; // Improve readability
    color: #b0b0b0; // Darker gray for description
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); // Shadow for clarity
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
      <img
        src="/pic/cato3.jpg"
        alt="About Akay"
        className="section-image"
      />
    </Section>
  );
}

export default Expect;
