import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import NotAvailable from "../components/NotAvailable";
import { getListData } from "../store/netflixSlice";

const MyList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);
  const mylist = useSelector((state) => state.netflix.mylist);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });
  }, [navigate]);

  useEffect(() => {
    if (email) {
      dispatch(getListData(email));
    }
  }, [email, dispatch]);

  return (
    <LikedList>
      <Navbar />
      <div className="content flex fd-column">
        <h1>My list</h1>
        <div className="grid flex">
          {mylist?.length > 0 ? (
            mylist?.map((moviesData, index) => {
              return (
                <Card
                  moviesData={moviesData}
                  index={index}
                  key={moviesData.id}
                />
              );
            })
          ) : (
            <NotAvailable isList={true} />
          )}
        </div>
      </div>
    </LikedList>
  );
};

export default MyList;

const LikedList = styled.div`
  .content {
    margin: 4.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
