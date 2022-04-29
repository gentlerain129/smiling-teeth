import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-12">
            <h3 class="display-4 text-center">Services</h3>
          </div>
        </div>
        <div class="container-fluid padding">
          <div class="row text-center padding">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <i class="fa-solid fa-tooth landing-tooth"></i>
              <h5>General Dentistry</h5>
              <hr></hr>
              <div class="generalprocedures">
                <p>Cleanings and Exams</p>
                <p>White Fillings</p>
                <p>Sleep Apnea</p>
                <p>Porcelain Crowns</p>
                <p>Root Canal</p>
                <p>Emergency Care</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <i class="fa-solid fa-face-smile"></i>
              <h5>Cosmetic Dentistry</h5>
              <hr></hr>
              <div class="cosmeticprocedures">
                <p>Smile Makeover</p>
                <p>Veneers</p>
                <p>Botox</p>
                <p>Clear Aligners</p>
                <p>Invisalign</p>
                <p>Teeth Whitening</p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <i class="fa-solid fa-teeth"></i>
              <h5>Surgical Dentistry</h5>
              <hr></hr>
              <div class="surgicalprocedures">
                <p>Dental Implants</p>
                <p>Extractions</p>
                <p>IV Sedation</p>

                <p>Oral Sedation</p>
                <p>Wisdom Teeth</p>
                <p>3-D Imagery</p>
              </div>
            </div>
          </div>
          <hr class="my-4"></hr>
        </div>
      </div>
    </div>
  );
};

export default Services;
