import { Meteor } from "meteor/meteor";
import { createUserLoginFromSMS } from "./lib";
const twilio = require("twilio");

/**
 * You'll need a Twilio account with relevant credentials as below,
 * and have acquired a 'from' number capable of sending SMS messages to
 *  the target phone number (watch out for region restrictions)
 */

const targetNumber = null; // your mobile number
const accountSid = null; // Your Account SID from www.twilio.com/console
const authToken = null; // Your Auth Token from www.twilio.com/console
const hostname = null; // the hostname of this application right here.

Meteor.methods({
  smsLogin() {
    const twilio = require("twilio");
    const client = new twilio(accountSid, authToken);
    const crypto = require("crypto");
    const token = crypto.randomBytes(20).toString("hex");
    const id = Buffer.from(targetNumber).toString("base64");
    const instruction = `Welcome! Please click the following link to login: ${hostname}/gateway?id=${id}&token=${token}`;
    client.messages
      .create({
        body: instruction,
        to: targetNumber, // Text this number
        from: "0000000", // From a valid Twilio number
      })
      .then((message) => {
        createUserLoginFromSMS({ id, token, ...message });
      });
  },
});
