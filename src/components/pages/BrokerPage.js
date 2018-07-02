import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import BrokerForm from "../forms/BrokerForm";
import { createBroker } from "../../actions/broker";

class NewBrokerPage extends React.Component {
  state = {
    broker: null
  };

  onBrokerSelect = broker => {
    this.setState({ broker });
    axios
      .get(`/api/broker/fetchPages?goodreadsId=${broker.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({ broker: { ...broker, pages } }));
  };

  addBroker = broker =>
    this.props
      .createBroker(broker)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h1>Add new broker</h1>

        {this.state.broker && (
          <BrokerForm submit={this.addBroker} broker={this.state.broker} />
        )}
      </Segment>
    );
  }
}

NewBrokerPage.propTypes = {
  createBroker: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createBroker })(NewBrokerPage);