import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Doctor from "./components/Doctor";
import Services from "./components/Services";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log("ROutes is logged in", isLoggedIn);
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/about" exact component={About} />
            <Route path="/appointment" exact component={Appointment} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/doctor" exact component={Doctor} />
            <Route path="/services" exact component={Services} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" exact component={About} />
            <Route path="/appointment" exact component={Appointment} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/doctor" exact component={Doctor} />
            <Route path="/services" exact component={Services} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
