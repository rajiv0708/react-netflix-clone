import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { TMBD_BASE_URL } from "../utils/constants";
import styled from "styled-components";
import Card from "./Card";
import CardSlider from "./CardSlider";
import Title from "./Title";

const CardRow = ({ media_type, title, fetchUrl, movieTv, poster }) => {
  const [items, setItems] = useState([]);
  const effect = useRef(false);
  const listRef = useRef();

  const fetchData = async () => {
    const arr = [];
    const {
      data: { results },
    } = await axios.get(`${TMBD_BASE_URL}${fetchUrl}`);
    results.filter((ele) => {
      return arr.push({ ...ele, media_type: media_type });
    });
    setItems(arr);
  };

  useEffect(() => {
    if (effect.current === false) {
      if (fetchUrl) {
        fetchData();
      }
      return () => {
        effect.current = true;
      };
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Row>
      <Title title={title} items={items} movieTv={movieTv} poster={poster} />
      <div className="wrapper">
        <div className="container" ref={listRef}>
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
        <CardSlider listRef={listRef} />
      </div>
    </Row>
  );
};

export default CardRow;

const Row = styled.div`
  position: relative;
  .wrapper {
    position: relative;
    .container {
      margin-left: 50px;
      display: flex;
      width: max-content;
      transform: translateX(0px);
      transition: all 1s ease;
    }
    .container::-webkit-scrollbar {
      display: none;
    }
    .arrowIcon {
      width: 50px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 2;
      cursor: pointer;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
    }
    .wrapper {
      .container {
        margin-left: 10px;
        display: flex;
        overflow-x: scroll;
        width: 100%;
        transform: none;
        transition: all 1s ease;
      }
      .container::-webkit-scrollbar {
        display: none;
      }
      .arrowIcon {
        display: none;
      }
    }
  }
`;
