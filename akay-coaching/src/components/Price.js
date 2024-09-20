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

const PriceTable = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
`;

const PriceBox = styled.div`
  padding: 20px;
  border: 1px solid #333;
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
