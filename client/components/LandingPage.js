import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div id="home">
      {/* carousel */}
      <div id="slides" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#slides" data-slide-to="0"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            <div class="carousel-caption">
              <h3 class="display-3">A Smiling Dental Experience</h3>
              <br></br>
              <h4>
                This is not your typical dental office. We bring latest
                technologies and skills to give you the best dental experience.
              </h4>
              <br></br>
              <button
                type="button"
                className="btn btn-outline-light btn-lg btn-appt"
              >
                Book Appointment
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1553691158-91a7f9183156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <div class="carousel-caption">
              <h3 class="display-3">From the Basics</h3>
              <br></br>
              <h4>
                Guiding patients to have healthy daily routine to manage one's
                dental health.
              </h4>
              <br></br>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            <div class="carousel-caption">
              <h3 class="display-3">Accurate diagnosis and Procedures</h3>
              <br></br>
              <h4>
                You will be only treated for what you need. We care about you.
              </h4>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* jumbotron */}
      {/* <div class="container-fluid">
        <div class="row jumbotron">
          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p class="lead">Dental Services</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="/">
              <button type="button" class="btn btn-outline-secondary btn-lg">
                Procedures
              </button>
            </a>
          </div>
        </div>
      </div> */}
      {/* Welcome Section */}
      <div class="container-fluid padding">
        <div class="row welcome text-center">
          <div class="col-12">
            <h1 class="display-4">We make you Smile.</h1>
          </div>
          <hr></hr>
          <div class="col-12">
            <p class="lead">
              Welcome to Smiling Teeth Dental! We bring brightest smile to you
              with no pain. Top-tier technologies and skills are here to give
              you the best dental experience.
            </p>
          </div>
        </div>
      </div>
      {/* Three column section */}
      <div class="container-fluid padding">
        <div class="row text-center padding">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fa-solid fa-tooth landing-tooth"></i>
            <h5>Healthy Teeth</h5>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fa-solid fa-face-smile"></i>
            <h5>Smile</h5>
          </div>
          <div class="col-sm-12 col-md-4">
            <i class="fa-solid fa-teeth"></i>
            <h5>Clean</h5>
          </div>
        </div>
        <hr class="my-4"></hr>
      </div>
      {/* Two Column Section */}
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-lg-6">
            <h2>If you build it ...</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <br></br>
            <a href="/" class="btn btn-primary">
              Learn More
            </a>
          </div>
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              class="img-fluid"
            ></img>
          </div>
        </div>
      </div>
      <hr class="my-4"></hr>
      {/* Fixed background */}
      <figure>
        <div class="fixed-wrap">
          <div id="fixed"></div>
        </div>
      </figure>
      {/* hidden section */}
      <button
        class="fun btn-outline-light btn-lg"
        data-toggle="collapse"
        data-target="#emoji"
      >
        Fun Dental Gif
      </button>
      <div id="emoji" class="collapse">
        <div class="container-fluid padding">
          <div class="row text-center">
            <div class="col-sm-6 col-md-3">
              <iframe
                src="https://giphy.com/embed/gLxFsED6Id9C20MGwN"
                frameBorder="0"
                class="gif"
              ></iframe>
            </div>
            <div class="col-sm-6 col-md-3">
              <iframe
                src="https://giphy.com/embed/JQ4Inb5sgI6XbAj03i"
                frameBorder="0"
                class="gif"
              ></iframe>
            </div>
            <div class="col-sm-6 col-md-3">
              <iframe
                src="https://giphy.com/embed/LRa7So1FwjIDmGtBB4"
                frameBorder="0"
                class="gif"
              ></iframe>
            </div>
            <div class="col-sm-6 col-md-3">
              <iframe
                src="https://giphy.com/embed/26BRMNZa0mmBNUaaY"
                frameBorder="0"
                class="gif"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* Meet the Team */}
      <div class="container-fluid padding">
        <div class="row welcome text-center">
          <div class="col-12">
            <h1 class="display-4">Meet the Team</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      {/* Cards */}
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              ></img>
              <div class="card-body">
                <h4 class="card-title">Doctor 1</h4>
                <p class="card-text">Doctor is the best dentist ever</p>
                <a href="/" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              ></img>
              <div class="card-body">
                <h4 class="card-title">Doctor 2</h4>
                <p class="card-text">Doctor is the best dentist ever</p>
                <a href="/" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              ></img>
              <div class="card-body">
                <h4 class="card-title">Doctor 3</h4>
                <p class="card-text">Doctor is the best dentist ever</p>
                <a href="/" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* two column section */}
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-lg-6">
            <h2>Our Philosophy</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <br></br>
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1612736777093-461fb48101d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              class="img-fluid"
            ></img>
          </div>
        </div>
        <hr class="my-4"></hr>
      </div>
      {/* COnnect */}
      <div class="container-fluid padding">
        <div class="row text-center padding">
          <div class="col-12">
            <h2>Connect</h2>
          </div>
          <div class="col-12 social padding">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
