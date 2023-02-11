import React from "react";
import styled from "styled-components";

const BrowseByLanguage = () => {
  return (
    <HeaderContent>
      <div className="headerWrapper">
        <h1>Browse By Language</h1>
        <div className="dropdownsContainer">
          <div className="language">
            <div className="syp">
              <span>Select Your Preferences</span>
            </div>
            <div className="dropdowns">
              <div className="categoryDropDown">
                <select>
                  <option value="">Original Language</option>
                  <option value="">Dubbing</option>
                  <option value="">Subtitles</option>
                </select>
              </div>
              <div className="languageDropDown">
                <select>
                  <option value="">English</option>
                  <option value="">Korean</option>
                  <option value="">Hindi</option>
                  <option value="">Spanish</option>
                  <option value="">French</option>
                  <option value="">Japanese</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sortGallery">
            <span>Sort By</span>
            <select name="" id="">
              <option value="">Seggestions For You</option>
              <option value="">Year Released</option>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </HeaderContent>
  );
};

export default BrowseByLanguage;

const HeaderContent = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0.5rem 3rem;
  position: sticky;
  top: 50px;
  z-index: 5;
  background-color: black;
  color: white;
  .headerWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    h1 {
      width: 30%;
      font-size: 1.7rem;
      font-weight: 400;
    }
    .dropdownsContainer {
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1rem;
      & * select {
        width: 100%;
        padding: 0 0.2rem;
        background-color: black;
        color: white;
        border: 1px solid hsla(0, 0%, 100%, 0.9);
        cursor: pointer;
        outline: none;
        height: 1.5rem;
        &:hover {
          background-color: #482020;
        }
        option {
          margin: 5px 10px;
        }
      }
      .language {
        width: 70%;
        display: flex;
        gap: 1rem;
        .syp {
          width: 35%;
          span {
            font-size: 1rem;
          }
        }
        .dropdowns {
          width: 65%;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          .categoryDropDown {
            width: 40%;
          }
          .languageDropDown {
            width: 60%;
          }
        }
      }
      .sortGallery {
        width: 30%;
        display: flex;
        align-items: center;
        span {
          width: 30%;
          font-size: 1rem;
          text-align: center;
        }
        select {
          width: 70%;
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    /* height: 3.5rem; */
    padding: 0.5rem 0.5rem;
    .headerWrapper {
      h1 {
        width: 25%;
        font-size: 1.3rem;
      }
      .dropdownsContainer {
        width: 75%;
        .syp {
          width: 25%;
          span {
            width: 100%;
            font-size: 0.9rem;
          }
        }
        .dropdowns {
          width: 40%;
          .categoryDropDown {
            width: 40%;
          }
          .languageDropDown {
            width: 60%;
          }
        }
        .sortGallery {
          width: 35%;
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    top: 40px;
    /* height: 5rem; */
    padding: 0.5rem 0.5rem;
    .headerWrapper {
      h1 {
        width: 30%;
        font-size: 1.3rem;
      }
      .dropdownsContainer {
        width: 70%;
        .language {
          flex-direction: column;
          gap: 0.2rem;
          .syp {
            width: 100%;
            padding: 0.2rem 0rem;
            span {
              font-size: 0.8rem;
            }
          }
          .dropdowns {
            width: 100%;
          }
        }
        .sortGallery {
          flex-direction: column;
          gap: 0.2rem;
          span {
            width: 100%;
            padding: 0.2rem 0rem;
            text-align: start;
            font-size: 0.8rem;
          }
          select {
            width: 100%;
          }
        }
      }
    }
  }
`;
