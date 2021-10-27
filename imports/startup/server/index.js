import { Sample } from "../../api/sample/sample";
import "./register-api.js";

Meteor.startup(() => {
  //   Sample.remove({});
  if (Sample.find({}).count() < 1) {
    Sample.insert({
      ukeleleId: 1,
      playcount: 2,
      likes: 23457,
    });
    Sample.insert({
      ukeleleId: 2,
      playcount: 3944,
      likes: 7,
    });
  }
});
