import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div class="container-fluid padding">
        <div class="row padding">
          <div class="col-12">
            <h3 class="display-4 text-center">About Somang's Smile</h3>
          </div>
          <hr></hr>
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              class="img-fluid"
            />
          </div>

          <div class="col-lg-6">
            <p class="lead about text-center">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
            <div class="d-flex justify-content-center">
              {" "}
              <a href="/contact" class="btn btn-primary align-center">
                Do you have any Questions?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
