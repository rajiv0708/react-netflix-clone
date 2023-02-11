import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosGlobe } from "react-icons/io";

const OuterFooter = () => {
  return (
    <FooterCard>
      <div className="footer-wrapper">
        <div className="site-footer">
          <p className="footer-top">Questions? Call 000-800-040-1843</p>
          <ul className="footer-link">
            <li className="link-item">
              <Link to="#">FAQ</Link>
            </li>
            <li className="link-item">
              <Link to="#">Help Centre</Link>
            </li>
            <li className="link-item">
              <Link to="#">Privacy</Link>
            </li>
            <li className="link-item">
              <Link to="#">Cookie Preferences</Link>
            </li>
            <li className="link-item">
              <Link to="#">Corporate Information</Link>
            </li>
          </ul>
          <div className="lang-selection">
            <div className="lang-picket flex ai-center">
              <IoIosGlobe />
              <select>
                <option value="">English</option>
                <option value="">हिन्दी</option>
              </select>
            </div>
          </div>
          <p className="footer-country">Netflix India</p>
        </div>
      </div>
    </FooterCard>
  );
};

export default OuterFooter;

const FooterCard = styled.footer`
  margin: 0 auto;
  padding: 1.4rem 3rem;
  position: relative;
  max-width: 1000px;
  .footer-wrapper {
    width: 100%;
    padding-bottom: 1.4rem;
    color: #737373;
    .site-footer {
      margin: 0 auto;
      width: 90%;
      .footer-top {
        margin: 0 0 30px;
        padding: 0;
      }
      .footer-link {
        max-width: 1000px;
        margin: 0;
        padding: 0;
        font-size: 13px;
      }
      .link-item {
        list-style: none;
        min-width: 100px;
        margin-bottom: 1rem;
        width: 25%;
        display: inline-block;
        padding-right: 1rem;
        a {
          color: #737373;
          text-decoration: none;
        }
        &:hover {
          text-decoration: underline;
        }
      }
      .lang-selection {
        margin-top: 1.4rem;
        .lang-picket {
          width: 125px;
          border: 1px solid #333;
          padding: 10px;
          svg {
            font-size: 1.2rem;
            color: #999;
          }
        }
        select {
          background-color: rgba(0, 0, 0, 0.7);
          color: #999;
          font-size: 1rem;
          border: none;
          padding: 5px;
          outline: none;
        }
      }
      .footer-country {
        margin-top: 24px;
        font-size: 13px;
      }
    }
  }
`;
