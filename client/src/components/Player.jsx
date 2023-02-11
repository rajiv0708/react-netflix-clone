import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

const Player = ({ setToggleBtn }) => {
  const videoData = useSelector((state) => state.netflix.videoData);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      enablejsapi: 1,
    },
  };

  return (
    <VideoContainer>
      <button className="backBtn" onClick={() => setToggleBtn(false)}>
        <BsArrowLeft />
      </button>
      <YouTube className="video" videoId={videoData?.key} opts={videoOptions} />
    </VideoContainer>
  );
};

export default Player;

const VideoContainer = styled.div`
  position: relative;
  z-index: 15;
  .backBtn {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    padding: 0 0.5rem;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    z-index: 16;
    cursor: pointer;
  }
  .video {
    width: 100vw;
    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }
  }

  /* .player {
    width: 100vw;
    height: 100vh;
    button {
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size: 2rem;
      padding: 0 0.5rem;
      cursor: pointer;
      font-weight: bold;
      background-color: transparent;
      color: #fff;
      border: none;
      z-index: 1;
    }
    .video {
      width: 100%;
      height: 100%;
      iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  } */
`;
