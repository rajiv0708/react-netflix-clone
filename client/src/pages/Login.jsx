import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgImage from "../assets/images/bgImage.jpg";
import logo from "../assets/images/netflixlogo.png";
import { Link, useNavigate } from "react-router-dom";
import OuterFooter from "../components/OuterFooter";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [showHide, setShowHide] = useState(false);
  const [validateField, setValidateField] = useState(false);
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (evt) => {
    evt.preventDefault();
    if (inputValue.email.length === 0 || inputValue.password.length === 0) {
      setValidateField(true);
    } else {
      try {
        const { email, password } = inputValue;
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setUserError(true);
        console.log(err);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <LoginSection>
      <div className="bgImage">
        <div className="overlay"></div>
        <img src={bgImage} alt="BgImage" />
      </div>
      <div className="login-body">
        <div className="login-header">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="login-container">
          <div className="login-content">
            <div className="login-form flex fd-column">
              <h1>Sign In</h1>
              <form>
                {userError && (
                  <div className="user-error">
                    <p>
                      Sorry, we can't find an account with this email address.
                      Please try again or{" "}
                      <Link to="/signup">create a new account</Link>
                    </p>
                  </div>
                )}
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={(evt) =>
                      setInputValue({
                        ...inputValue,
                        email: evt.target.value,
                      })
                    }
                  />
                  <label
                    style={{
                      transform: `${inputValue.email && "translateY(-100%)"}`,
                      fontSize: `${inputValue.email && "0.8rem"}`,
                    }}
                  >
                    Email or Phone Number
                  </label>
                </div>
                <div className="validateText">
                  {validateField && inputValue.email.length <= 0 ? (
                    <span>
                      Please enter a valid email address or phone number.
                    </span>
                  ) : null}
                </div>

                <div className="password-field">
                  <input
                    type={`${showHide ? "text" : "password"}`}
                    name="password"
                    value={inputValue.password}
                    onChange={(evt) =>
                      setInputValue({
                        ...inputValue,
                        password: evt.target.value,
                      })
                    }
                  />
                  {inputValue.password &&
                    (showHide ? (
                      <span
                        className="show-hide"
                        onClick={() => setShowHide(false)}
                      >
                        HIDE
                      </span>
                    ) : (
                      <span
                        className="show-hide"
                        onClick={() => setShowHide(true)}
                      >
                        SHOW
                      </span>
                    ))}
                  <label
                    style={{
                      transform: `${
                        inputValue.password && "translateY(-100%)"
                      }`,
                      fontSize: `${inputValue.password && "0.8rem"}`,
                    }}
                  >
                    Password
                  </label>
                </div>
                <div className="validateText">
                  {validateField && inputValue.password.length <= 0 ? (
                    <span>
                      Your password must contain between 4 and 60 characters.
                    </span>
                  ) : null}
                </div>
                <button onClick={(evt) => handleSignIn(evt)}>Sign In</button>
                <div className="login-help flex jc-between">
                  <span>
                    <input type="checkbox" /> &nbsp; Remember me
                  </span>
                  <span>Need Help?</span>
                </div>
              </form>
              <div className="login-form-other">
                <span>New to Netflix?</span> &nbsp;
                <Link to="/signup">Sign up now.</Link>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer">
        <OuterFooter />
      </div>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  position: relative;
  .bgImage {
    position: relative;
    width: 100%;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .login-body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .login-header {
      width: 100%;
      margin-left: 2rem;
      padding: 1.5rem 0;
      .logo {
        height: 3rem;
      }
    }
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .login-content {
        max-width: 550px;
        padding: 0 3rem;
        .login-form {
          padding: 4rem;
          background-color: rgba(0, 0, 0, 0.75);
          color: #fff;
          margin: 0;
          h1 {
            font-size: 2rem;
            justify-content: start;
            margin-bottom: 2rem;
          }
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            .user-error {
              width: 100%;
              padding: 0.5rem 1rem;
              background-color: #e87c03;
              color: white;
              border-radius: 5px;
              margin-bottom: 1rem;
              font-size: 0.9rem;
              a {
                color: white;
                text-decoration: underline;
              }
            }
            .input-field,
            .password-field {
              width: 100%;
              height: 3rem;
              /* margin-bottom: 1rem; */
              position: relative;
              input {
                width: 100%;
                height: 100%;
                border-radius: 5px;
                outline: none;
                padding: 1.5rem 1rem;
                font-size: 1rem;
                background: #333;
                color: #fff;
                border-bottom: 2px solid #e87c03;
                &:focus ~ label {
                  transform: translateY(-100%);
                  font-size: 0.8rem;
                }
              }
              .show-hide {
                position: absolute;
                right: 0rem;
                top: 0rem;
                height: 100%;
                padding: 1rem;
                font-size: 0.9rem;
                color: #8c8c8c;
                cursor: pointer;
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
              margin: 0.5rem 0;
              text-align: start;
              color: #e87c03;
              font-size: 0.8rem;
            }
            button {
              width: 100%;
              background: #e50914;
              color: #fff;
              height: 3rem;
              font-weight: bold;
              font-size: 1rem;
              border: none;
              border-radius: 5px;
              margin: 0.5rem 0;
              cursor: pointer;
            }
            .login-help {
              width: 100%;
              font-size: 13px;
              & span {
                display: flex;
                padding: 5px;
              }
              input {
                width: 1rem;
                height: 1rem;
                margin: 0;
              }
            }
          }
          .login-form-other {
            margin-top: 4rem;
            color: #8c8c8c;
            font-size: 13px;
            span {
              font-size: 1rem;
            }
            a {
              color: #fff;
              font-size: 1rem;
            }
            &:hover a {
              text-decoration: underline;
            }
            p {
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }

  .login-footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media (min-width: 0px) and (max-width: 768px) {
    background-color: black;
    color: white;
    .bgImage {
      display: none;
    }
    .login-body {
      position: static;
      height: 95%;
      margin-bottom: 0;
      border-bottom: 1px solid #8c8c8c;
      .login-container {
        .login-content {
          max-width: 600px;
          padding: 1rem 1rem;
          .login-form {
            padding: 0;
            .login-form-other {
              margin: 5rem 0;
            }
          }
        }
      }
    }
    .login-footer {
      /* top: 0; */
      position: static;
    }
  }
`;
