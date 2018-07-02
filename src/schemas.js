import { schema } from "normalizr";

export const brokerSchema = new schema.Entity(
  "broker",
  {},
  { idAttribute: "_id" }
);