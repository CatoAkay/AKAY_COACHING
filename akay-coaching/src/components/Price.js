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
    margin-bottom: 40px; // Space below the title
`;

const PriceTable = styled.div`
    margin: 20px auto;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
`;

const PriceBox = styled.div`
    padding: 20px;
    border: 1px solid #333;
    background-color: rgba(30, 30, 30, 0.8); // Slightly lighter dark background
    border-radius: 10px; // Rounded corners for a modern look
    color: #b0b0b0; // Darker gray for text
    text-align: center; // Centered text in price boxes

    h3 {
        color: #dcdcdc; // Light gray for plan titles
        margin-bottom: 10px; // Space below plan title
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); // Shadow for clarity
    }

    p {
        font-size: 1.5rem; // Larger font size for price
        font-weight: bold; // Bold price for emphasis
        margin: 0; // Remove default margin
    }
`;

function Price() {
  return (
    <Section id="price">
      <Title>Price</Title>
      <PriceTable>
        <PriceBox>
          <h3>Basic Plan</h3>
          <p>$50 / month</p>
        </PriceBox>
        <PriceBox>
          <h3>Premium Plan</h3>
          <p>$100 / month</p>
        </PriceBox>
      </PriceTable>
    </Section>
  );
}

export default Price;
