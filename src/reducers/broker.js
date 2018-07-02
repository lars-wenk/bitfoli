import { createSelector } from "reselect";
import { BROKER_FETCHED, BROKER_CREATED } from "../types";

export default function broker(state = {}, action = {}) {
  switch (action.type) {
    case BROKER_FETCHED:
    case BROKER_CREATED:
      return { ...state, ...action.data.entities.broker };
    default:
      return state;
  }
}

// SELECTORS

export const brokerSelector = state => state.broker;

export const allBrokerSelector = createSelector(brokerSelector, brokerHash =>
  Object.values(brokerHash)
);