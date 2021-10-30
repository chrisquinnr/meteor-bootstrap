# Meteor 2.5 Bootstrap

This is a quickstart app to get you up and running with a few Meteor basics, including accounts, routing, collections and adding a library like Bootstrap. We're using good old Blaze in this example but a shiny new Svelte version will be coming soon.

### Quickstart

- Get Meteor installed: https://www.meteor.com/developers/install
- Clone this repo
- `meteor npm install`
- `meteor`

## Why Meteor?

Meteor has been making an awesome comeback over the past 18 months after the original development team moved on to new GraphQL-flavoured pastures. After being bought out by a VC firm, the project has picked up pace and as seen a renewed focus on addressing some of Meteor's roadmap.

Meteor is full stack JS framework ideally suited to realtime applications. Its early advantages were zero-config websockets and ES6 that #justWored, but now I find that it's a great tool for prototyping and building MVPs, since we not only get to leverage the wonders of NPM but also the framework lets you bring your own frontend. Blaze, React, Angular and now Svelte are all options.

Like any framework, Meteor's benefits come at a price, in that you need to buy in to Meteor's highly opinionated structure and concepts. Fortunately these aren't too crazy and most of the rules can be broken if you want, but there are plenty of gotchas that will trip first time users up.

Hopefully that's where this bootstrap project can help, getting you from zero to... something a little faster. I'm not suggesting this is a gold standard, and I'd recommend the resources below for the authoratative take on things like application structure and best practice.

## Resources

In suggested order of reading for anyone new to the framework.

- [Meteor Guide](https://guide.meteor.com/) - Read this first!
- [Official Tutorials](https://www.meteor.com/developers/tutorials)
- [Meteor API](https://docs.meteor.com/#/full/)
- [Forums] (https://forums.meteor.com/)
- [Meteor Devtools](https://chrome.google.com/webstore/detail/meteor-devtools-evolved/ibniinmoafhgbifjojidlagmggecmpgf?hl=en)
- [2021 Meteor Impact conference](https://impact.meteor.com/), with some great talks from the community and previews of upcoming features

## Notes on this demo

### Login splash screen

I've added an artifical loading screen, just because, by delaying the result of a subscriptions listener, you can find this in `client/main.js`. Usually logging in is pretty much instantaneous. On that note, the `accounts-password` / `useraccounts:core` packages are great, and completely extensible including social media login.

### Twilio

If you dig a little deeper I've added instructions for an SMS-based login handler using Twilio (this was the main motivation for building this project in the first place). You need to set up Twilio as noted in the comments in `/imports/api/apimethods/methods.js` and then trigger the SMS using the provided Meteor method e.g. `Meteor.call("smsLogin");`
