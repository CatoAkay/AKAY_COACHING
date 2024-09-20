import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px auto;
  max-width: 800px;
`;

function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Description>
        Hi! I'm Akay, a dedicated fitness coach passionate about helping people
        reach their full potential. With years of experience in CrossFit and
        personal training, I focus on holistic development, building both
        physical strength and mental resilience.
      </Description>
    </Section>
  );
}

export default About;
