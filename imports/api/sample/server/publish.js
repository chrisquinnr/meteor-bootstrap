import { Meteor } from "meteor/meteor";
import { Sample } from "../sample";

Meteor.publish("sample", function sample() {
  if (!Meteor.userId) return;
  return Sample.find({});
});
