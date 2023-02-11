import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderDiv>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="btns flex">
        <button className="btn flex ai-center jc-center">
          <span>
            <IoIosGlobe />
          </span>
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </button>
        <Link className="btn bg-red sign-in-btn" to="/login">
          Sign In
        </Link>
      </div>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
  padding-top: 1rem;
  .logo {
    img {
      width: 8rem;
      height: inherit;
    }
  }
  .btns {
    .btn {
      width: 6.25rem;
      margin: 0 0.5rem;
      padding: 0.5rem 1.2rem;
      background-color: transparent;
      color: #fff;
      border: 1px solid lightgray;
      border-radius: 2px;
      text-align: center;
      svg {
        font-size: 1rem;
      }
      select {
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
      }
    }
    .bg-red {
      background-color: red;
      cursor: pointer;
      a {
        display: block;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 576px) {
    margin: 0 1rem;
    .logo {
      img {
        height: 2rem;
      }
    }
    .btns {
      .btn {
        width: 5.5rem;
        padding: 0.2rem;
      }
    }
  }
`;
