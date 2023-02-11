import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterCard>
      <div className="footer-wrapper">
        <div className="site-footer">
          <div className="footer-top">
            <div className="social-icons flex">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
          <ul>
            <li>
              <Link to="#">Audio Description</Link>
            </li>
            <li>
              <Link to="#">Help Centre</Link>
            </li>
            <li>
              <Link to="#">Gift Cards</Link>
            </li>
            <li>
              <Link to="#">Media Centre</Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Legal Notice</Link>
            </li>
            <li>
              <Link to="#">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="#">Corporate Information</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
          <div className="service">
            <button>Service Code</button>
          </div>
          <p className="footer-country">© 1997-2023 Netflix, Inc.</p>
        </div>
      </div>
    </FooterCard>
  );
};

export default Footer;

const FooterCard = styled.footer`
  margin: 0 auto;
  padding: 4.4rem 3rem 1rem;
  position: relative;
  max-width: 1000px;
  .footer-wrapper {
    width: 100%;
    padding: 1rem 0;
    color: #737373;
    .site-footer {
      margin: 0 auto;
      width: 100%;
      padding: 1rem;
      .footer-top {
        margin: 0 0 20px;
        padding: 0;
        .social-icons {
          color: white;
          svg {
            width: 36px;
            height: 25px;
            margin-right: 15px;
            cursor: pointer;
          }
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 0 0 14px;
        li {
          flex: 0 0 50%;
          flex-basis: 25%;
          margin-bottom: 1rem;
          list-style: none;
          a {
            color: #737373;
            text-decoration: none;
            font-size: 0.8rem;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .service {
        color: white;
        button {
          margin-top: 0.5rem;
          background-color: black;
          color: #737373;
          border: 1px solid #737373;
          padding: 5px;
          &:hover {
            color: white;
          }
        }
      }
      .footer-country {
        margin-top: 24px;
        font-size: 13px;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    .footer-wrapper {
      .site-footer {
        ul {
          li {
            flex-basis: 50%;
          }
        }
      }
    }
  }
`;
