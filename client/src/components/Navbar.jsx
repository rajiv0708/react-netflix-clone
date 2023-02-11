import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {
  IoMdHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdOutlineAccountTree, MdOutlineEdit } from "react-icons/md";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineUser,
} from "react-icons/ai";
import userLogo from "../assets/images/userLogo.jpeg";
import profileImg from "../assets/images/profileImg.png";
import logo from "../assets/images/netflixlogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "New & Popular", link: "/new" },
    { name: "My List", link: "/mylist" },
    { name: "Browse by Languages", link: "/browse" },
  ];

  const [navBgColor, setNavBgColor] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();

  window.onscroll = () => {
    setNavBgColor(window.scrollY < 50 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      setEmail(currentUser.email);
    });
  }, [navigate]);

  return (
    <Nav>
      <div
        className={`main-nav flex jc-between ai-center ${
          navBgColor ? "scrolled" : "un-scrolled"
        }`}
      >
        <div className="left flex ai-center">
          <Link to="/" className="brand">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav-container flex ai-center">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="dropdown">
            <div className="browse">
              <span>Browse</span>
              <AiOutlineCaretDown />
            </div>
            <div className="mobile-nav">
              <div className="caretUp">
                <AiOutlineCaretUp />
              </div>
              <ul className="flex ai-center fd-column">
                {links.map(({ name, link }) => {
                  return (
                    <li key={name}>
                      <Link to={link}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="right flex ai-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Title, People Genres"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <div className="notification">
            <IoMdNotificationsOutline />
          </div>
          <div className="user">
            <img src={userLogo} alt="user" />
            <span className="userDownArrow">
              <AiOutlineCaretDown />
            </span>
            <div className="userDropdown">
              <span className="userUpArrow">
                <AiOutlineCaretUp />
              </span>
              <ul>
                <li>
                  <img src={profileImg} alt="profile" />
                  <span>{email}</span>
                </li>
                <li>
                  <span>
                    <MdOutlineEdit />
                  </span>
                  <span>Manage Profile</span>
                </li>
                <li>
                  <span>
                    <MdOutlineAccountTree />
                  </span>
                  <span>Transfer Profile</span>
                </li>
                <li>
                  <span>
                    <AiOutlineUser />
                  </span>
                  <span>Account</span>
                </li>
                <li>
                  <span>
                    <IoMdHelpCircleOutline />
                  </span>
                  <span>Help Center</span>
                </li>
                <li>
                  <button onClick={() => signOut(auth)}>
                    Sign out of Netflix
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 6;
  transition: 0.3s ease-in-out;
  .scrolled {
    background-color: #000;
    transition: 0.9s ease-in-out;
  }
  .un-scrolled {
    transition: 0.9s ease-in-out;
  }
  .main-nav {
    height: 4rem;
    padding: 0 4rem;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 2rem;
        }
      }
      .nav-container {
        list-style: none;
        justify-content: space-around;
        gap: 1rem;
        li {
          a {
            color: #fff;
          }
        }
      }
      .dropdown {
        padding: 10px 0;
        display: none;
        position: relative;
        .browse {
          width: 4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            font-size: 0.7rem;
            font-weight: 500;
          }
          svg {
            padding-top: 2px;
          }
        }
        .mobile-nav {
          display: none;
          position: absolute;
          top: 2rem;
          left: -5rem;
          .caretUp {
            height: 2rem;
            color: white;
            border-bottom: 3px solid white;
            position: relative;
            svg {
              position: absolute;
              bottom: -5px;
              left: 47%;
            }
          }
          ul {
            width: 16rem;
            background-color: rgba(0, 0, 0, 0.9);
            list-style: none;
            li {
              padding: 1rem 0;
              font-size: 0.8rem;
              a {
                color: #91918d;
              }
            }
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        align-items: center;
        height: 2rem;
        button {
          padding-left: 0.5rem;
          transition: 0.3s ease-in-out;
          svg {
            color: #fff;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          color: #fff;
          font-size: 1rem;
          border: none;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid #fff;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
      .notification {
        svg {
          font-weight: 500;
          font-size: 1.5rem;
          cursor: pointer;
        }
      }
      .user {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        position: relative;
        padding: 1rem 0;
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 5px;
        }
        .userDownArrow {
          svg {
            transition: 0.5s ease-in-out;
          }
        }
        &:hover .userDownArrow {
          svg {
            transform: rotate(180deg);
          }
        }
        .userDropdown {
          display: none;
          transition-duration: 1s;
          width: 13rem;
          aspect-ratio: 1;
          background-color: #000;
          color: #fff;
          position: absolute;
          right: -1rem;
          top: 3.9rem;
          .userUpArrow {
            position: absolute;
            top: -0.7rem;
            right: 1rem;
          }
          ul {
            list-style: none;
            font-size: 0.8rem;
            li {
              padding: 0.5rem 1rem;
              display: flex;
              align-items: center;
              gap: 1rem;
              &:first-child {
                border-bottom: 1px solid #91918d;
              }
              &:last-child {
                border-top: 1px solid #91918d;
              }
              span {
                svg {
                  font-size: 1.3rem;
                }
              }
              button {
                color: #fff;
                padding: 0.4rem 2rem;
              }
            }
          }
        }
        &:hover .userDropdown {
          display: block;
        }
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    .main-nav {
      height: 3rem;
      padding: 0 2rem;
      .left {
        gap: 2rem;
        .brand {
          img {
            height: 1.5rem;
          }
        }
        .nav-container {
          gap: 0.5rem;
          li {
            a {
              font-size: 0.9rem;
            }
          }
        }
      }
      .right {
        .user {
          padding: 0.5rem 0 !important;
          .userDropdown {
            top: 2.5rem;
          }
        }
      }
    }
  }

  /* *********Mobile Phones******** */
  @media (min-width: 0px) and (max-width: 768px) {
    .main-nav {
      height: 2.5rem;
      padding: 0 2rem;
      .left {
        gap: 2rem;
        .brand {
          img {
            height: 20px;
          }
        }
      }
      .nav-container {
        display: none;
      }
      .dropdown {
        display: block !important;
        cursor: pointer;
        &:hover .mobile-nav {
          display: block;
        }
      }
    }
    .right {
      .user {
        padding: 0.2rem 0 !important;
        .userDropdown {
          top: 2.2rem !important;
        }
      }
    }
  }
`;
