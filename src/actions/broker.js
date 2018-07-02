import { normalize } from "normalizr";
import { BROKER_FETCHED, BROKER_CREATED } from "../types";
import api from "../api";
import { brokerSchema } from "../schemas";

// data.entities.broker
const brokerFetched = data => ({
  type: BROKER_FETCHED,
  data
});

const brokerCreated = data => ({
  type: BROKER_CREATED,
  data
});

export const fetchBroker = () => dispatch =>
  api.broker
    .fetchAll()
    .then(broker => dispatch(brokerFetched(normalize(broker, [brokerSchema]))));

export const createBroker = data => dispatch =>
  api.broker
    .create(data)
    .then(broker => dispatch(brokerCreated(normalize(broker, brokerSchema))));