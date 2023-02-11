import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import Explore from "./Explore";

const Title = ({ title, items, movieTv, poster }) => {
  const [isExplore, setIsExplore] = useState(false);

  return (
    <TitleContainer>
      <div className="title">
        <h3>{title}</h3>
        <div className="showHide">
          <div className="explore">
            <span onClick={() => setIsExplore(true)}>Explore All</span>
            <BiChevronRight />
          </div>
        </div>
      </div>
      <Explore
        title={title}
        isExplore={isExplore}
        setIsExplore={setIsExplore}
        items={items}
        movieTv={movieTv}
        poster={poster}
      />
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  display: flex;
  margin: 0.7rem 3rem;
  position: relative;
  .title {
    width: 15rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0;
    h3 {
      font-weight: 500;
    }
    .showHide {
      display: none;
      .explore {
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          font-size: 0.7rem;
          color: #54b9c5;
        }
      }
    }
  }
  &:hover {
    .showHide {
      display: block;
    }
  }
  @media (min-width: 416px) and (max-width: 576px) {
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 0px) and (max-width: 415px) {
    margin: 0;
    h3 {
      margin: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
`;
