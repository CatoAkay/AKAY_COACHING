import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1.1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  font-size: 1.1rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f76c6c;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextArea
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
}

export default ContactForm;
