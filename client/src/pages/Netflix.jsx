import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData, getGenres } from "../store/netflixSlice";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";

const Netflix = () => {
  const [isUser, setIsUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genresLoded = useSelector((state) => state.netflix.genresLoded);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setIsUser(false);
        navigate("/login");
      } else {
        setIsUser(true);
        dispatch(getGenres());
        if (genresLoded) {
          dispatch(fetchAllData({ media_type: "all" }));
        }
      }
    });
  });

  return (
    <>
      {isUser ? (
        <div style={{ overflow: "hidden" }}>
          <Navbar />
          <Hero />
          <Slider />
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Netflix;
