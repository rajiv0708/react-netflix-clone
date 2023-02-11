import React, { useEffect, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlineDownCircle, AiOutlinePlus } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteFromList, getListData, getTrailer } from "../store/netflixSlice";
import styled from "styled-components";
import YouTube from "react-youtube";

const HoveredCard = ({ moviesData, email, isHovered }) => {
  const genres = useSelector((state) => state.netflix.genres);
  const mylist = useSelector((state) => state.netflix.mylist);
  const videoData = useSelector((state) => state.netflix.videoData);
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(false);
  const [imgVid, setImgVid] = useState(false);

  const getId = () => {
    const id = mylist?.find(({ id }) => id === moviesData.id);
    if (id) {
      setToggleBtn(true);
    } else {
      setToggleBtn(false);
    }
  };

  useEffect(() => {
    if (moviesData.id) {
      dispatch(
        getTrailer({
          movieId: moviesData.id,
          media_type: moviesData.media_type,
        })
      );
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getId();
    // eslint-disable-next-line
  }, [isHovered]);

  const addToList = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/v1/add`, {
        email,
        data: moviesData,
      });
    } catch (error) {
      console.log(error);
    }
    if (email) {
      dispatch(getListData(email));
    }
    setToggleBtn(true);
  };

  const deleteCardItem = () => {
    dispatch(
      deleteFromList({
        email: email,
        movieId: moviesData.id,
      })
    );
    if (email) {
      dispatch(getListData(email));
    }
    setToggleBtn(false);
  };

  setTimeout(() => {
    setImgVid(true);
  }, 1500);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
    },
  };

  return (
    <CardContainer>
      {imgVid ? (
        <YouTube
          className="video"
          videoId={videoData?.key}
          opts={videoOptions}
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original/${
            moviesData.backdrop_path || moviesData.poster_path
          }`}
          alt="poster"
        />
      )}

      <div className="cardInfo">
        <div className="infoIcons">
          <div className="icon-left">
            <IoPlayCircleSharp />
            {toggleBtn ? (
              <MdDone onClick={deleteCardItem} />
            ) : (
              <AiOutlinePlus onClick={addToList} />
            )}
            <FiThumbsUp />
            <FiThumbsDown />
          </div>
          <div className="icon-right">
            <AiOutlineDownCircle />
          </div>
        </div>
        <div className="details">
          <span className="first">99% Match</span>
          <span className="second">U/A 13+</span>
          <span className="third">8 Episods</span>
          <span className="forth">HD</span>
        </div>
        <div className="genre">
          <ul>
            {moviesData.genre_ids.map((genreId, index) => {
              const name = genres.find(({ id }) => id === genreId);
              return <li key={index}>{name?.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </CardContainer>
  );
};

export default HoveredCard;

const CardContainer = styled.div`
  width: 350px;
  height: 275px;
  position: absolute;
  background-color: #181818;
  color: white;
  border-radius: 5px;
  top: -50px;
  bottom: 0px;
  left: -60px;
  margin: auto;
  transition: all 2s ease-in;
  z-index: 10;
  box-shadow: 0px 0px 16px 1px rgba(255, 255, 255, 0.22);
  img {
    width: 100% !important;
    height: 65% !important;
    object-fit: cover !important;
    border-radius: 5px;
  }
  .video {
    border-radius: 5px;
    iframe {
      width: 100% !important;
      height: auto;
      aspect-ratio: 16/9;
    }
  }
  .cardInfo {
    width: 100%;
    height: 35%;
    padding: 0 0.8rem;
    .infoIcons {
      display: flex;
      justify-content: space-between;
      .icon-left,
      .icon-right {
        svg {
          cursor: pointer;
          font-size: 30px;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .icon-left {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        svg {
          padding: 4px;
          border: 2px solid grey;
          border-radius: 50% 50%;
          &:first-child {
            padding: 0px;
            border: none;
          }
        }
      }
    }
    .details {
      margin-bottom: 0.4rem;
      span {
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0 0.2rem;
        &.first {
          color: #35eb35;
        }
        &.second,
        &.forth {
          border: 1px solid gray;
        }
      }
    }
    .genre {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        li {
          font-size: 0.9rem;
          margin-right: 1.2rem;
          &::marker {
            color: white;
          }
          &:first-child {
            list-style: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 275px;
    img {
      width: 100% !important;
      height: 50% !important;
    }
    .genre {
      ul {
        flex-wrap: wrap;
      }
    }
  }
  @media screen and (max-width: 415px) {
    left: 0;
    top: -3rem;
  }
`;
