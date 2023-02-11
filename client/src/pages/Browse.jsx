import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BrowseByLanguage from "../components/BrowseByLanguage";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchBrowseData, getGenres } from "../store/netflixSlice";

const Browse = () => {
  const data = useSelector((state) => state.netflix.data);
  const genresLoded = useSelector((state) => state.netflix.genresLoded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoded) dispatch(fetchBrowseData({ movie_id: 76600 }));
    // eslint-disable-next-line
  }, [genresLoded]);

  return (
    <SearchByLanguage>
      <Navbar />
      <BrowseByLanguage />
      <div className="container">
        {data?.map((moviesData, index) => {
          return (
            <Card moviesData={moviesData} index={index} key={moviesData.id} />
          );
        })}
      </div>
      <Footer />
    </SearchByLanguage>
  );
};

export default Browse;

const SearchByLanguage = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    & > div {
      margin: 20px 5px 20px;
    }
    & > * .cardImg {
      width: 255px;
      height: 150px;
    }
  }
`;
