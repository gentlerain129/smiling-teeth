import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-12">
            <h3 class="display-4 text-center">Contact Us</h3>
          </div>
        </div>

        <div class="col-12 text-center">
          <h2>You are just a step away from Smile!</h2>
          <br></br>
          <h4>
            Phone:{" "}
            <a
              href="tel://+15555555555"
              class="btn btn-outline-light btn-lg contact"
            >
              555-555-5555
            </a>
          </h4>
          <h4>
            Email:{" "}
            <a
              href="mailto:smiledentale@email.com"
              target="_blank"
              class="btn btn-outline-light btn-lg contact"
            >
              smiledental@gmail.com
            </a>
          </h4>
          <br></br>
          <h4>Address: 1000 Street Name,City, State, 11111</h4>
        </div>
        <hr></hr>
        <div class="container-fluid padding">
          <div class="row text-center padding">
            <div class="col-12">
              <h2>Connect with Somang's Smile</h2>
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
    </div>
  );
};

export default Contact;
