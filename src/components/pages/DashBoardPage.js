import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashBoardPage = ({ isConfirmed }) => (
  <div>
    <h1>welcome to your dashboard</h1>
    {!isConfirmed && <ConfirmEmailMessage />}

  </div>
);

DashBoardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashBoardPage)
