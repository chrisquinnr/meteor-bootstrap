export const createUserLoginFromSMS = Meteor.bindEnvironment((message) => {
  Accounts.createUser({
    username: message.id,
    password: message.token,
    profile: {
      number: message.to,
      sid: message.sid,
      created: message.dateCreated,
    },
  });
});
