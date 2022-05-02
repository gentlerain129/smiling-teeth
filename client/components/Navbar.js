import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, username }) => {
  console.log("username", username);
  console.log("isloggedin", isLoggedIn);
  return (
    <div id="navbar-full sticky-top">
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {/* <img src="images/logo.png" /> */}
            Somang's Smile <i class="fa-solid fa-tooth navbar-tooth"></i>
          </a>

          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav lg-auto">
                  <li class="nav-item">
                    <a class="nav-link">Welcome, {username}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/appointment">
                      Appointment
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={handleClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // {/* <Link to="/about">About</Link> */}
            // <Link to="/appointments">Appointments</Link>
            // <Link to="/contact">Contact Us</Link>

            <div>
              {/* The navbar will show these links before you log in */}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link">Welcome, Happy Smile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/services">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/appointment">
                      Appointment
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">
                      Patient Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* <Link to="/about">About</Link> */}
              {/* <Link to="/appointments">Appointments</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/contact">Contact Us</Link> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
