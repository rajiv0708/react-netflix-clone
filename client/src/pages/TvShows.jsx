import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import Rows from "../components/Rows";
import SelectGenre from "../components/SelectGenre";
import { fetchAllData, getGenres } from "../store/netflixSlice";

const TvShows = () => {
  const dispatch = useDispatch();
  const genresLoded = useSelector((state) => state.netflix.genresLoded);
  const data = useSelector((state) => state.netflix.data);
  const genres = useSelector((state) => state.netflix.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoded) dispatch(fetchAllData({ media_type: "tv" }));
  }, [genresLoded, dispatch]);

  return (
    <>
      {data.length > 0 && <Hero />}
      <Navbar />
      <SelectGenre genres={genres} media_type="tv" />
      <div style={{ backgroundColor: "black", color: "white" }}>
        {data.length ? (
          <Rows data={data} media_type="tv" />
        ) : (
          <NotAvailable type="movie" />
        )}
      </div>
      <Footer />
    </>
  );
};

export default TvShows;
