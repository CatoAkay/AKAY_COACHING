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

function About() {
  return (
    <Section id="about">

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Akay, a certified coach passionate about helping you reach your full potential. Whether it's fitness,
          health, or well-being, I'm here to guide you every step of the way.
        </p>
        <img
          src="/pic/cato1.jpg"
          alt="About Akay"
          className="section-image"
        />
      </section>

      {/* What to Expect Section */}
      <section id="what-to-expect" className="expect-section">
        <h2>What to Expect</h2>
        <ul>
          <li>Personalized coaching plans tailored to your needs</li>
          <li>Weekly check-ins and progress tracking</li>
          <li>Support and motivation to keep you going</li>
        </ul>
        <img
          src="/pic/cato2.jpg"
          alt="What to Expect"
          className="section-image"
        />
      </section>
      <Title>More Info</Title>
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
