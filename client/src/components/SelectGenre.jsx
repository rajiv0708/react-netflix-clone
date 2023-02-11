import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store/netflixSlice";
import { IoGridSharp } from "react-icons/io5";
import { VscListSelection } from "react-icons/vsc";

const SelectGenre = ({ genres, media_type }) => {
  const dispatch = useDispatch();

  return (
    <GenresNav>
      <div className="genresNav">
        <div className="left">
          <h1>{media_type}</h1>
          <select
            className="flex"
            onChange={(evt) =>
              dispatch(
                fetchDataByGenre({ genreId: evt.target.value, media_type })
              )
            }
          >
            {genres.map((genre) => {
              return (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="right">
          <VscListSelection />
          <IoGridSharp />
        </div>
      </div>
    </GenresNav>
  );
};

export default SelectGenre;

const GenresNav = styled.div`
  top: 4rem;
  width: 100%;
  position: sticky;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  background-color: black;
  color: white;
  z-index: 4;
  .genresNav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    h1 {
      font-weight: 500;
      text-transform: capitalize;
    }
    select {
      width: 7rem;
      height: 1.6rem;
      margin: 0 2rem;
      outline: none;
      cursor: pointer;
      font-size: 1.1rem;
      border: 1px solid white;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      &:hover {
        background-color: #2c2c2c;
      }
    }
  }
  .right {
    margin-right: 2rem;
    svg {
      width: 2.8rem;
      height: 1.7rem;
      border: 1px solid white;
      padding: 0.2rem;
    }
    svg:first-child {
      border-right: 0.5px solid white;
    }
    svg:last-child {
      border-left: 0.5px solid white;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    top: 2.9rem;
    .genresNav {
      height: 3rem;
    }
    .left {
      margin-left: 2rem;
      h1 {
        font-size: 1.8rem;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    top: 2.5rem;
    .genresNav {
      height: 2.5rem;
    }
    .left {
      margin-left: 2rem;
      h1 {
        font-size: 1.5rem;
      }
      select {
        width: 6rem;
        height: 1.4rem;
        margin: 0 2rem;
        outline: none;
        font-size: 1rem;
      }
    }
  }
`;
