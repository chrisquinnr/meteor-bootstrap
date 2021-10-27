import { Meteor } from "meteor/meteor";

import "../imports/api/apimethods/methods";
import "/imports/startup/server";

Meteor.startup(() => {
  // Meteor.call("smsLogin");
  const u = Meteor.users.find().fetch();
  if (!u.length) {
    Accounts.createUser({
      username: "admin@example.com",
      email: "admin@example.com",
      password: "password",
    });
  }
});

Accounts.onCreateUser(function (options, user) {
  user.profile = {
    darkMode: 0,
  };
  return user;
});
