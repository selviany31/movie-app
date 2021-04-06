import Logo from "../Assets/Images/logo.png";
import React from "react";
import "../Styles/NavBar.css";
import Modal from "react-modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const MODAL_SIGNUP = 1;
const MODAL_LOGIN = 2;

export default function Navbar({ search }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const handleSignin = (event) => {
    event.preventDefault();
    setModalIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <NavLink exact to="/" className="nav-link">
          <div className="logo-wrapper">
            <img alt="" src={Logo} className="laflix-logo" />
            <h3>LAFLIXTV</h3>
          </div>
        </NavLink>
        {/* <div>
				<input
					className="search-bar"
					placeholder="search movie"
				/>
			</div> */}
        <Search search={search} />
        <NavLink className="watch-list" to="/watch-list">
          <h3>Watchlist</h3>
        </NavLink>
        <div
          className="sign-in-wrapper"
          onClick={() => {
            setModalIsOpen(true);
            setWhichModal(MODAL_SIGNUP);
          }}
        >
          <h3>Sign up</h3>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="modal-container"
        >
          {renderWhichModal()}
        </Modal>
      </div>
    </div>
  );

  function renderWhichModal() {
    switch (whichModal) {
      case MODAL_SIGNUP:
        return (
          <form onSubmit={handleSignin}>
            <div className="logo-wrapper-modal">
              <img alt="" src={Logo} className="laflix-logo" />
              <h1>LAFLIXTV</h1>
            </div>
            <div className="input-container">
              <span>Full Name</span>
              <br />
              <input type="text" />
              <br />
              <span>Email</span>
              <br />
              <input type="text" />
              <br />
              <span>Password</span>
              <br />
              <input type="password" />
              <br />

              <button type="submit" className="home__login__button">
                Sign Up
              </button>
              <p>
                Already have an account?
                <span
                  className="login"
                  onClick={() => {
                    setModalIsOpen(true);
                    setWhichModal(MODAL_LOGIN);
                  }}
                >
                  {" "}
                  Log in
                </span>
              </p>
            </div>
          </form>
        );
      case MODAL_LOGIN: {
        return (
          <div>
            <form onSubmit={handleSignin}>
              <div className="logo-wrapper-modal">
                <img alt="" src={Logo} className="laflix-logo" />
                <h1>LAFLIXTV</h1>
              </div>
              <div className="input-container">
                <span>Email</span>
                <br />
                <input type="text" />
                <br />
                <span>Password</span>
                <br />
                <input type="password" />
                <br />
                <button type="submit" className="home__login__button">
                  Log In
                </button>
              </div>
            </form>
          </div>
        );
      }
      default:
        return whichModal;
    }
  }
}
