import { Meteor } from "meteor/meteor";
import { Sample } from "../sample";

Meteor.publish("sample", function sample() {
  return Sample.find({});
});
