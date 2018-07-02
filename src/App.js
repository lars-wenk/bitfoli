import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashBoardPage";
import BrokerPage from "./components/pages/BrokerPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import FAQPage from "./components/pages/FAQPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/elements/TopNavigation";
import Footer from "./components/elements/Footer";


const App = ({ location, isAuthenticated }) => (
  <div>
    <TopNavigation />
    {isAuthenticated}
    <Route location={location} path="/" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
   <GuestRoute
     location={location}
     path="/signup"
     exact
     component={SignupPage}
   />
   <GuestRoute
     location={location}
     path="/forgot_password"
     exact
     component={ForgotPasswordPage}
   />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/faq"
      exact
      component={FAQPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <UserRoute
      location={location}
      path="/broker"
      exact
      component={BrokerPage}
    />
    <Footer />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
