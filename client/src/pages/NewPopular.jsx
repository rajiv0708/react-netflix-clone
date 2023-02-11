import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardRow from "../components/CardRow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchAllData, getGenres } from "../store/netflixSlice";
import { request } from "../utils/request";

const NewPopular = () => {
  const dispatch = useDispatch();
  const genresLoded = useSelector((state) => state.netflix.genresLoded);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoded) {
      dispatch(fetchAllData({ media_type: "all" }));
    }
  }, [genresLoded, dispatch]);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Navbar />
        <CardRow
          media_type="tv"
          title="Top Rated Movie"
          fetchUrl={request.topRated}
          poster={true}
        />
        <CardRow
          media_type="tv"
          title="TV On The Air"
          fetchUrl={request.tvOnTheAir}
        />
        <CardRow
          media_type="tv"
          title="Top Rated Tv"
          fetchUrl={request.topRatedTv}
          poster={true}
        />
        <CardRow
          media_type="movie"
          title="Popular Movie"
          fetchUrl={request.popularMovie}
        />
        <CardRow
          media_type="movie"
          title="New on netflix"
          fetchUrl={request.new}
        />
        <CardRow
          media_type="movie"
          title="Coming up"
          fetchUrl={request.comingupMovie}
        />
      </div>
      <Footer />
    </>
  );
};

export default NewPopular;
