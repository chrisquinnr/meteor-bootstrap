import { Template } from "meteor/templating";
import { Tracker } from "meteor/tracker";
import { _ } from "meteor/underscore";

import { subs, setBgImage } from "./lib";
import "./router";
import "./helpers";
import "./main.html";

import "./templates/initial/initial";
import "./templates/login/login";
import "./templates/account/account";
import "../imports/startup/client/index";

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./stylesheets/darktheme.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import { read } from "@popperjs/core";

let ready = new ReactiveVar(false);

Tracker.autorun(function () {
  if (Meteor.user()) {
    const { profile } = Meteor.user();
    if (profile && profile.darkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }
});

Template.home.helpers({
  ready() {
    return ready.get() || false;
  },
  getLoadingTip() {
    return _.sample([
      "Did you know that X is X?",
      "Did you know that X is Y?",
      "Did you know that X is Z?",
    ]);
  },
});

Template.home.events({});

Template.home.onCreated(function () {
  subs.subscribe("sample");
});

Template.home.onRendered(function () {
  setBgImage();
  Tracker.autorun(function () {
    if (subs.ready()) {
      setTimeout(function () {
        ready.set(true);
      }, 5000);
    } else {
      ready.set(false);
    }
  });
});

Template.smsLoggedIn.onRendered(function () {
  console.log("SMS Login");
});
