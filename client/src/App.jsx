import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegForm from "./pages/RegForm";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import Netflix from "./pages/Netflix";
import NewPopular from "./pages/NewPopular";
import Registration from "./pages/Registration";
import Signup from "./pages/Signup";
import TvShows from "./pages/TvShows";
import { Offline } from "react-detect-offline";
import styled from "styled-components";
import { BiError } from "react-icons/bi";

const App = () => {
  return (
    <>
      <Connection>
        <div className="message">
          <Offline>
            <BiError />
            <span>You are not connected to the internet.</span>
          </Offline>
        </div>
      </Connection>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/registration" element={<Registration />} />
          <Route path="/signup/regform" element={<RegForm />} />
          <Route path="/" element={<Netflix />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new" element={<NewPopular />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const Connection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10%;
  z-index: 5;
  .message {
    padding: 0.4rem 0;
    font-size: 0.8rem;
    background-color: #eab000;
    color: white;
    span {
      display: flex;
      align-items: center;
      svg {
        font-size: 1.1rem;
        margin-right: 0.2rem;
      }
      span {
        font-size: 0.9rem;
      }
    }
  }
`;
