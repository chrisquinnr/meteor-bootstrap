import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import "./account.html";

Template.account.onRendered(function () {
  if (
    Meteor.user() &&
    Meteor.user().profile &&
    Meteor.user().profile.darkMode
  ) {
    $("#darkMode").prop("checked", true);
  }
});

Template.account.events({
  "change #darkMode": function (e, t) {
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.darkMode": !Meteor.user().profile.darkMode } }
    );
  },
});
