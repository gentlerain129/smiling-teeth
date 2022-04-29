import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div id="container fluid-padding">
      <div class="d-md-flex justify-content-md-center">
        <form onSubmit={handleSubmit} name={name}>
          <div class="form-group p-2">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" class="form-control mb-2" />
          </div>

          <div class="form-group p-2">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" class="form-control mb-2" />
          </div>
          <div class="d-flex justify-content-md-center">
            <button type="submit" class="btn btn-outline-warning">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>{" "}
      <div class="container fluid-padding ">
        <div class="d-md-flex justify-content-md-center">
          <div class="col-lg-6">
            <p>New Patient?</p>
            <br></br>
            <p>Sign up to be the new Smiling Teeth at Somang's Smile!</p>
            <a href="/signup" class="btn btn-primary align-self-center">
              New Patient
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
