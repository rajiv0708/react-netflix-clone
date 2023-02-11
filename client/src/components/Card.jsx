import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";
import HoveredCard from "./HoveredCard";

const Card = ({ moviesData, poster }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else navigate("/login");
    });
  }, [navigate]);

  return (
    <CardDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {poster ? (
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original/${moviesData.poster_path}`}
          alt="poster_path"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original/${
            moviesData.backdrop_path || moviesData.poster_path
          }`}
          alt="backbrop_path"
        />
      )}
      {isHovered ? (
        <HoveredCard
          moviesData={moviesData}
          email={email}
          isHovered={isHovered}
        />
      ) : null}
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  margin-right: 5px;
  position: relative;
  border-radius: 5px;
  img {
    width: 225px;
    height: 125px;
    object-fit: cover;
    border-radius: 5px;
    &.poster {
      width: 9rem;
      height: 12rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 3px;
    img {
      width: 200px;
      height: 110px;
    }
  }
  @media (min-width: 0px) and (max-width: 576px) {
    margin-right: 3px;
    img {
      width: 9rem;
      height: 5.3rem;
      &.poster {
        height: 10rem;
      }
    }
  }
`;
