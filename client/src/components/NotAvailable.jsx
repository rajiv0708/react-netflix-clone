import React from "react";
import styled from "styled-components";

const NotAvailable = ({ type, isList }) => {
  return (
    <Container className="not-available">
      {isList ? (
        <h3>Your list is empty..!</h3>
      ) : (
        <h3>{type} are unavailable for this genre..!</h3>
      )}
    </Container>
  );
};

export default NotAvailable;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  h3 {
    color: white;
    font-size: 3rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
