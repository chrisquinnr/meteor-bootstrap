import { Template } from "meteor/templating";

Template.registerHelper("isSelected", function (a, b) {
  return a === b ? "selected" : "";
});
