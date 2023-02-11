import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../assets/images/bgImage.jpg";
import { IoIosArrowForward } from "react-icons/io";
import tvscreen from "../assets/images/tvscreen.png";
import video1 from "../assets/videos/video1.m4v";
import mobile from "../assets/images/mobile.jpeg";
import boxshot from "../assets/images/boxshot.png";
import dIcon from "../assets/images/downloadIcon.gif";
import devicePileIn from "../assets/images/devicePileIn.png";
import videoDevicesIn from "../assets/videos/videoDevicesIn.m4v";
import childrenfun from "../assets/images/childrenfun.png";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import OuterFooter from "../components/OuterFooter";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getActiveUser } from "../store/userSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getStart = (evt) => {
    evt.preventDefault();
    if (email) {
      dispatch(getActiveUser(email));
      navigate("/signup/registration");
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <Container>
      <div className="main-section">
        <div className="bgImage">
          <div className="overlay"></div>
          <img src={bgImage} alt="bgImage" />
        </div>
        <div className="hero-wrapper">
          <Header />
          <div className="story-card">
            <div className="story-wrapper">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <Form>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="email-form">
                  <div className="email">
                    <input
                      type="email"
                      autoComplete="off"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <label>Email address</label>
                  </div>
                  <div className="get-start-btn">
                    <button onClick={(evt) => getStart(evt)}>
                      <span className="getStarted">Get Started</span>
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>
                {isEmpty && email.length <= 0 ? (
                  <div className="required">
                    <span>Email is required.</span>
                  </div>
                ) : null}
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-story">
        <div className="story-container flex jc-between ai-center">
          <div className="story-text flex fd-column jc-center ">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="story-img">
            <img src={tvscreen} alt="" />
            <div className="story-card-animation">
              <video autoPlay loop muted>
                <source src={video1} />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-story">
        <div className="story-container flipped flex jc-between ai-center">
          <div className="story-text flex fd-column jc-center ">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="story-img">
            <img className="mobile" src={mobile} alt="" />
            <div className="downloadAndWatch flex jc-between ai-center">
              <div className="boxshot">
                <img src={boxshot} alt="" />
              </div>
              <div className="boxshot-title">
                <h4>Stranger Things</h4>
                <p>Downloading...</p>
              </div>
              <div className="download-icon">
                <img src={dIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-story">
        <div className="story-container flex jc-between ai-center">
          <div className="story-text flex fd-column jc-center ">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="story-img">
            <img src={devicePileIn} alt="" />
            <div className="videoDeviceIn">
              <video autoPlay loop muted>
                <source src={videoDevicesIn} />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-story">
        <div className="story-container flipped flex jc-between ai-center">
          <div className="story-text flex fd-column jc-center ">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
          <div className="story-img">
            <img className="mobile" src={childrenfun} alt="" />
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq-container flex fd-column ai-center">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <Accordion />
          <div className="form-wrapper">
            <Form>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="email-form">
                <div className="email">
                  <input
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                  <label>Email address</label>
                </div>
                <div className="get-start-btn">
                  <button onClick={(evt) => getStart(evt)}>
                    <span className="getStarted">Get Started</span>
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
              {isEmpty && (
                <div className="required">
                  <span>Email is required.</span>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>

      <OuterFooter />
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  background-color: black;
  color: white;
  .main-section {
    width: 100vw;
    max-height: 100vh;
    aspect-ratio: 1;
    border-bottom: 0.5rem solid #222;
    position: relative;
    .bgImage {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
    .hero-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .story-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        .story-wrapper {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          gap: 2rem;
          h1 {
            font-size: 3.125rem;
          }
          h2 {
            font-size: 1.625rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  .animated-story,
  .faq {
    margin: 0 auto;
    padding: 2rem 3rem;
    position: relative;
    border-bottom: 0.5rem solid #222;
    .story-container,
    .faq-container {
      max-width: 1100px;
      margin: 0 auto;
      &.flipped {
        flex-flow: row-reverse;
      }
      .form-wrapper {
        padding: 0 2rem 0;
        text-align: center;
      }
      .story-title,
      .faq-title {
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
      }
      .story-text {
        text-align: start;
        padding: 0 2rem;
        width: 50%;
        h1 {
          font-size: 3.125rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
        h2 {
          font-size: 1.625rem;
          font-weight: 400;
          padding: 0.2rem 0;
        }
      }
      .story-img {
        width: 50%;
        img {
          height: auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .mobile {
          z-index: 0;
        }
        .story-card-animation {
          position: absolute;
          height: 100%;
          left: 70%;
          max-height: 49%;
          max-width: 73%;
          top: 48%;
          transform: translate(-50%, -50%);
          width: 100%;
          video {
            width: 100%;
            height: 100%;
          }
        }
        .videoDeviceIn {
          position: absolute;
          height: 100%;
          left: 70%;
          max-height: 41%;
          top: 35%;
          transform: translate(-50%, -50%);
          width: 100%;
          video {
            width: 100%;
            height: 100%;
          }
        }
        .downloadAndWatch {
          background: #000;
          position: absolute;
          max-height: 20%;
          width: 20.5rem;
          top: 67%;
          left: 18%;
          padding: 0.5em 0.75em;
          border: 2px solid #494747;
          border-radius: 10px;
          .boxshot {
            margin-right: 1em;
            img {
              height: 4.5em;
            }
          }
          .boxshot-title {
            margin: 0.3em 0;
            width: 3rem;
            flex-grow: 1;
            h4 {
              font-weight: 600;
            }
            p {
              color: #0071eb;
              font-weight: 400;
            }
          }
          .download-icon {
            height: 3.75em;
            img {
              height: 100%;
            }
          }
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .main-section {
    }
    .animated-story,
    .faq {
      .story-container,
      .faq-container {
        flex-direction: column;
        justify-content: center;
        &.flipped {
          flex-direction: column;
        }
        .story-text {
          width: 100%;
          align-items: center;
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 1.2rem;
            text-align: center;
          }
        }
        .story-img {
          width: 100%;
          .story-card-animation {
            top: 56%;
            left: 50%;
            max-width: 74%;
            max-height: 41%;
          }
          .downloadAndWatch {
            width: 24.5rem;
            max-height: 13%;
            top: 78%;
            left: 22%;
          }
          .videoDeviceIn {
            left: 50%;
            max-height: 36%;
            top: 45%;
          }
        }
        .faq-title {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 576px) {
    .main-section {
      min-height: 500px;
      .hero-wrapper {
        .story-card {
          .story-wrapper {
            padding: 1.5rem;
            gap: 1rem;
            h1 {
              font-size: 1.7rem;
            }
            h2 {
              font-size: 1.1rem;
            }
            form {
              h3 {
                padding: 0 2rem 1.4rem;
              }
              .email-form {
                flex-direction: column;
                gap: 1rem;
                .email {
                  width: 100%;
                  input {
                    padding: 0.9rem;
                    font-size: 1.1;
                  }
                }
                .get-start-btn {
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  button {
                    width: 30%;
                    font-size: 1.1rem;
                  }
                }
              }
            }
          }
        }
      }
    }
    .animated-story,
    .faq {
      padding: 2rem 1rem;
      &.faq {
        padding: 2rem 0;
      }
      .story-container,
      .faq-container {
        flex-direction: column;
        justify-content: center;
        &.flipped {
          flex-direction: column;
        }
        & > form {
          h3 {
            text-align: center;
          }
        }
        .story-text {
          width: 100%;
          padding: 0;
          align-items: center;
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.2rem;
            text-align: center;
          }
        }
        .story-img {
          width: 100%;
          .story-card-animation {
            top: 56%;
            left: 50%;
            max-width: 70%;
          }
          .downloadAndWatch {
            width: 18rem;
            max-height: 13%;
            top: 78%;
            left: 22%;
          }
          .videoDeviceIn {
            left: 49%;
            max-height: 34%;
            top: 46%;
          }
        }
        .faq-title {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  h3 {
    width: 100%;
    max-width: none;
    font-size: 1.1rem;
    margin: 0 auto;
    padding-bottom: 1.4rem;
    font-weight: 400;
  }
  .email-form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    .email {
      width: 70%;
      height: 100%;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        outline: none;
        padding: 0.5rem;
        font-size: 1.1rem;
        border-bottom: 2px solid #ffa00a;
        border-radius: 5px;
        &:focus ~ label {
          transform: translateY(-100%);
          font-size: 0.7rem;
          font-weight: 500;
        }
      }
      label {
        top: 1rem;
        left: 1rem;
        position: absolute;
        color: #8c8c8c;
        pointer-events: none;
        transition: 0.2s ease all;
        transform: translateY(0%);
      }
    }
    .get-start-btn {
      width: 30%;
      height: 100%;
      button {
        width: 100%;
        height: 100%;
        padding: 0.5rem 0;
        border: none;
        border-radius: 3px;
        background-color: #e50914;
        color: #fff;
        font-size: 1.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background: #f40612;
          box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
        }
      }
    }
  }
  .required {
    text-align: start;
    padding: 0 0.3rem;
    span {
      color: #ffa00a;
    }
  }
  @media (min-width: 0px) and (max-width: 576px) {
    .email-form {
      flex-direction: column;
      gap: 1rem;
      .email {
        width: 100%;
        input {
          padding: 0.9rem;
          font-size: 1.1;
        }
      }
      .get-start-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
          width: 30%;
          font-size: 1.1rem;
        }
      }
    }
  }
`;
