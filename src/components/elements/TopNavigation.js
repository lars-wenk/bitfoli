import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Menu,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";

const TopNavigation = ({ user, logout, isAuthenticated }) => (
  <div>

  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      Dashboard
    </Menu.Item>
    <Menu.Menu position="right">

    { isAuthenticated ? (
      <Menu.Item onClick={() => logout()} to="/">
        Logout
      </Menu.Item>
    ) : (
      [
        <Menu.Item name='signup' as={Link} to="/signup">
          <Button primary>Sign up</Button>
        </Menu.Item>,
        <Menu.Item name='login' as={Link} to="/login">
          <Button>Log-in</Button>
        </Menu.Item>
      ]
    )}

    </Menu.Menu>

  </Menu>
  </div>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
