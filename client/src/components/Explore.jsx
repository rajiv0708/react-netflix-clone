import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { AiOutlineClose } from "react-icons/ai";

const Explore = ({
  title,
  isExplore,
  setIsExplore,
  items,
  movieTv,
  poster,
}) => {
  return (
    <Container style={{ display: !isExplore && "none" }}>
      <div className="un-hover">
        <span className="close" onClick={() => setIsExplore(false)}>
          <AiOutlineClose />
        </span>
        <h1 className="heading">{title}</h1>
      </div>
      <div className="cardContainer">
        {items?.map((moviesData, index) => {
          return (
            <Card
              moviesData={moviesData}
              index={index}
              key={moviesData.id}
              poster={poster}
            />
          );
        })}
        {movieTv?.map((moviesData, index) => {
          return (
            <Card moviesData={moviesData} index={index} key={moviesData.id} />
          );
        })}
      </div>
    </Container>
  );
};

export default Explore;

const Container = styled.div`
  width: 90%;
  height: auto;
  aspect-ratio: 1.5/1;
  overflow: auto;
  align-content: center;
  background-color: black;
  color: white;
  position: absolute;
  left: 5%;
  top: -50%;
  z-index: 100;
  .un-hover {
    width: 100%;
    height: 30%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 2rem;
      cursor: pointer;
      svg {
      }
    }
    .heading {
      font-size: 3rem;
    }
  }
  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 2rem;
    & > div {
      margin: 20px 5px 20px;
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/2;
    .un-hover {
      .heading {
        font-size: 2rem;
      }
    }
    .cardContainer {
      margin: 0;
    }
  }
`;
