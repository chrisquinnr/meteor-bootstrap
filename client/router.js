import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { AccountsTemplates } from "meteor/useraccounts:core";
import { subs } from "./lib";

AccountsTemplates.configure({
  defaultLayout: "myLayout",
  forbidClientAccountCreation: true,
});
AccountsTemplates.configureRoute("signIn", {
  name: "login",
  path: "/sign-in",
  layoutTemplate: "myLayout",
  redirect: "/",
  contentRegion: "main",
});
var public = FlowRouter.group({});
var private = FlowRouter.group({
  triggersEnter: [AccountsTemplates.ensureSignedIn],
});
private.route("/", {
  name: "home",
  action() {
    BlazeLayout.render("myLayout", { main: "home" });
  },
});
private.route("/logout", {
  name: "logout",
  triggersEnter: [
    function (context, redirect) {
      Meteor.logout();
      subs.clear();
      redirect("/");
    },
  ],
});
public.route("/sign-in", {
  action: function (params, queryParams) {
    BlazeLayout.render("myLayout", { main: "login" });
  },
  name: "SignIn",
});
// sms login test
public.route("/gateway", {
  action: function (params, queryParams) {
    console.log(queryParams);
    Meteor.loginWithPassword(queryParams.id, queryParams.token, () => {
      FlowRouter.go("/");
    });
  },
  name: "gateway",
});
