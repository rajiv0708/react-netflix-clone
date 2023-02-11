import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import OuterFooter from "../components/OuterFooter";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const [validateField, setValidateField] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const email = useSelector((state) => state.user.userEmail);
  const [inputValue, setInputValue] = useState({
    email: email || "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (inputValue.email.length === 0 || inputValue.password.length === 0) {
      setValidateField(true);
    } else {
      try {
        const { email, password } = inputValue;
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setPasswordError(true);
        console.log(err);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) navigate("/");
    });
    // eslint-disable-next-line
  }, []);

  return (
    <FormContainer>
      <Header />
      <div className="container">
        <div className="wrapper">
          <span className="steps">step 2 of 2</span>
          <h1>Create a password to start your membership</h1>
          <div className="formContainer">
            <p>Just a few more steps and you're done!</p>
            <p>We hate paperwork, too.</p>
            <div className="field-wrapper">
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  defaultValue={inputValue.email}
                  onChange={(evt) =>
                    setInputValue({ ...inputValue, email: evt.target.value })
                  }
                />
                <label
                  style={{
                    transform: `${inputValue.email && "translateY(-100%)"}`,
                    fontSize: `${inputValue.email && "0.8rem"}`,
                  }}
                >
                  Email
                </label>
              </div>
              <div className="validateText">
                {validateField && inputValue.email.length <= 0 ? (
                  <span>Email is required.</span>
                ) : null}
              </div>
              <div className="password-field">
                <input
                  type="password"
                  name="password"
                  value={inputValue.password}
                  onChange={(evt) =>
                    setInputValue({ ...inputValue, password: evt.target.value })
                  }
                />
                <label
                  style={{
                    transform: `${inputValue.password && "translateY(-100%)"}`,
                    fontSize: `${inputValue.password && "0.8rem"}`,
                  }}
                >
                  Add a password
                </label>
              </div>
              <div className="validateText">
                {(validateField && inputValue.password.length <= 0 ? (
                  <span>Password is required.</span>
                ) : null) ||
                  (passwordError && inputValue.password.length < 6 ? (
                    <span>Password should be at least 6 characters</span>
                  ) : null)}
              </div>
            </div>
          </div>
          <button onClick={handleSignUp}>Register</button>
        </div>
      </div>
      <div className="reg-footer">
        <OuterFooter />
      </div>
    </FormContainer>
  );
};

export default RegForm;

const FormContainer = styled.div`
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
    border-top: 1px solid #e9e3e3;
    .wrapper {
      max-width: 27rem;
      margin: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;
      gap: 1rem;
      .steps {
        text-transform: uppercase;
        font-size: 0.8rem;
      }
      h1 {
        font-size: 2rem;
      }
      .formContainer {
        width: 100%;
        p {
          padding-bottom: 1rem;
        }
        .field-wrapper {
          display: flex;
          flex-direction: column;
          /* gap: 1rem; */
          .input-field,
          .password-field {
            max-height: 4rem;
            border: 2px solid #a7a1a1;
            border-radius: 0.2rem;
            position: relative;
            input {
              width: 100%;
              height: 100%;
              padding: 1rem;
              font-size: 1.1rem;
              border: none;
              outline: none;
              &:focus ~ label {
                transform: translateY(-100%);
                font-size: 0.8rem;
              }
            }
            label {
              position: absolute;
              left: 1rem;
              top: 1rem;
              padding-top: 0.1rem;
              color: #8c8c8c;
              transition: 0.2s ease all;
              transform: translateY(0%);
              pointer-events: none;
            }
          }
          .validateText {
            width: 100%;
            margin: 0 0 0.5rem 0.1rem;
            text-align: start;
            color: #ac0906;
            font-size: 0.8rem;
          }
        }
      }
      button {
        width: 100%;
        min-height: 4rem;
        font-size: 1.5rem;
        background-color: #e50914;
        color: #ffff;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        &:hover {
          background-color: #f6121d;
        }
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
