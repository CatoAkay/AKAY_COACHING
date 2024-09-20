import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background with transparency
`;

const StyledTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #dcdcdc; // Light gray for the title
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
`;

const StyledDescription = styled.p`
    font-size: 1.2rem;
    margin: 20px auto;
    max-width: 800px;
    line-height: 1.6;
    color: #b0b0b0; // Darker gray for description
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 20px 0;

    li {
        font-size: 1.2rem;
        margin: 10px 0;
        color: #b0b0b0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;

function About() {
  return (
    <StyledAboutSection id="about">
      {/* About Me Section */}
      <StyledTitle>About Me</StyledTitle>
      <StyledDescription>
        Hi, I'm Akay, a certified coach passionate about helping you reach your full potential. Whether it's fitness,
        health, or well-being, I'm here to guide you every step of the way.
      </StyledDescription>
      <img
        src="/pic/cato1.jpg"
        alt="About Akay"
        className="section-image"
      />

      {/* What to Expect Section */}
      <StyledTitle>What to Expect</StyledTitle>
      <StyledList>
        <li>Personalized coaching plans tailored to your needs</li>
        <li>Weekly check-ins and progress tracking</li>
        <li>Support and motivation to keep you going</li>
      </StyledList>
      <img
        src="/pic/cato2.jpg"
        alt="What to Expect"
        className="section-image"
      />

      <StyledTitle>More Info</StyledTitle>
      <StyledDescription>
        Hi! I'm Akay, a dedicated fitness coach passionate about helping people reach their full potential. With years
        of experience in CrossFit and personal training, I focus on holistic development, building both physical
        strength and mental resilience.
      </StyledDescription>
    </StyledAboutSection>
  );
}

export default About;
