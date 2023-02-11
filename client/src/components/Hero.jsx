import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { getTrailer } from "../store/netflixSlice";
import Player from "./Player";

const Hero = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.netflix.data);
  const slicedData = data.filter((ele) => ele).slice(0, 20);
  const banner = slicedData[Math.floor(Math.random() * slicedData.length - 1)];
  let media_type_var = "";

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  if (banner?.media_type === "all") {
    media_type_var = "movie";
  } else {
    media_type_var = banner?.media_type;
  }

  const handleTrailer = () => {
    if (banner?.id) {
      dispatch(getTrailer({ movieId: banner?.id, media_type: media_type_var }));
      setToggleBtn(true);
    }
  };

  return (
    <HeroConrainer>
      {toggleBtn ? (
        <Player setToggleBtn={setToggleBtn} />
      ) : (
        <div className="bg-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`}
            alt="moviebg"
            className="bg-image"
          />
          <div className="info-container">
            {banner && (
              <div className="movie-title">
                <h1>{banner?.title || banner?.original_name}</h1>
              </div>
            )}
            <div className="info-text">
              <p>{truncate(`${banner?.overview}`, 200)}</p>
            </div>
            <div className="button-layer">
              <button className="btn play-btn" onClick={handleTrailer}>
                <FaPlay />
                Play
              </button>
              <button className="btn info-btn">
                <AiOutlineInfoCircle />
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
    </HeroConrainer>
  );
};

export default Hero;

const HeroConrainer = styled.div`
  background-color: black;
  color: white;
  .bg-container {
    .bg-image {
      position: relative;
      filter: brightness(80%);
      width: 100vw;
      background-size: cover;
    }
    .info-container {
      position: absolute;
      top: 38%;
      left: 4%;
      width: 36%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1rem;
      .movie-logo {
        filter: brightness(90%);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .movie-title {
        h1 {
          font-size: 3rem;
        }
      }
      .info-text {
        color: #fff;
      }
      .button-layer {
        display: flex;
        line-height: 88%;
        gap: 1rem;
        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          border-radius: 0.3rem;
          cursor: pointer;
          border: none;
          transition: 0.2s ease-in-out;
          svg {
            font-size: 1.5rem;
          }
        }
        .play-btn {
          &:hover {
            filter: brightness(80%);
          }
        }
        .info-btn {
          background-color: rgba(109, 109, 110, 0.7);
          color: #fff;
          &:hover {
            background-color: rgba(109, 109, 110, 0.5);
          }
        }
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    .bg-container {
      .info-container {
        width: 55%;
        top: 10%;
      }
    }
  }

  @media (min-width: 416px) and (max-width: 768px) {
    .bg-container {
      .info-container {
        width: 70%;
        top: 13%;
        gap: 0.8rem;
        .movie-title {
          h1 {
            font-size: 2.5rem;
          }
        }
        .info-text {
          p {
            font-size: 1rem;
          }
        }
        .button-layer {
          .btn {
            font-size: 0.7rem;
            padding: 0.4rem 1rem;
            svg {
              font-size: 1rem;
            }
            .info-btn {
              padding: 0.2rem;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 415px) {
    .bg-container {
      .info-container {
        width: 80%;
        top: 7%;
        .movie-title {
          h1 {
            font-size: 1.5rem;
          }
        }
        .info-text {
          p {
            font-size: 0.8rem;
          }
        }
        .button-layer {
          .btn {
            padding: 0.2rem 1rem;
            svg {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
`;
