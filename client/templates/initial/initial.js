import { Template } from "meteor/templating";
import { Sample } from "../../../imports/api/sample/sample";
import "./initial.html";

Template.initial.onCreated(function () {
  console.log("other logged in subs could go here");
});

Template.initial.onRendered(function () {
  console.log("component did mount, bro");
});

Template.initial.events({});
Template.initial.helpers({
  data() {
    return Sample.find().fetch();
  },
});
