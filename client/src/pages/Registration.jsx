import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import stepLogo from "../assets/images/stepLogo.png";
import OuterFooter from "../components/OuterFooter";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <Register>
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="stepLogo">
            <img src={stepLogo} alt="step-logo" />
          </div>
          <span>step 1 of 2</span>
          <h1>Finish setting up your account</h1>
          <p>
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <button onClick={() => navigate("/signup/regform")}>Next</button>
        </div>
      </div>
      <div className="reg-footer">
        <OuterFooter />
      </div>
    </Register>
  );
};

export default Registration;

const Register = styled.div`
  background-color: white !important;
  color: black !important;
  header {
    padding: 1rem 0;
    button {
      display: none;
    }
    .sign-in-btn {
      font-weight: 500;
      background-color: white !important;
      color: black !important;
      border: none !important;
    }
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #494747;
    .wrapper {
      max-width: 340px;
      margin: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      .stepLogo {
        margin: 2rem 1rem;
        img {
          width: 100%;
        }
      }
      span {
        text-transform: uppercase;
        font-size: 0.8rem;
      }
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        padding: 0 1rem;
      }
      button {
        width: 100%;
        min-height: 4rem;
        font-size: 1.5rem;
        background-color: #f6141d;
        color: #ffff;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
      }
    }
  }
  .reg-footer {
    width: 100%;
    background-color: #f3f3f3;
    footer {
      margin: 0;
      padding-top: 1rem;
      .footer-wrapper {
        padding: 0;
        .site-footer {
          .lang-selection {
            select {
              background-color: #f3f3f3;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    header {
      padding: 0.3rem 0;
    }
    .container {
      .wrapper {
        margin: 2rem 2rem 10rem;
        text-align: start;
        p {
          padding: 0;
        }
      }
    }
  }
`;
