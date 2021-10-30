# Meteor 2.5 Bootstrap

This is a quickstart app to get you up and running with a few Meteor basics, including accounts, routing, collections and adding a library like Bootstrap. We're using good old Blaze in this example but a shiny new Svelte version will be coming soon.

### Quickstart

- Get Meteor installed: https://www.meteor.com/developers/install
- Clone this repo
- `meteor npm install`
- `meteor`

## Why Meteor?

Meteor has been making an awesome comeback over the past 18 months after the original development team moved on to new GraphQL-flavoured pastures. After being bought out by a VC firm, the project has picked up pace and as seen a renewed focus on addressing some of Meteor's roadmap.

Meteor is full stack JS framework ideally suited to realtime applications. Its early advantages were zero-config websockets and ES6 that #justWorked, but now I find that it's a great tool for prototyping and building MVPs, since we not only get to leverage the wonders of NPM but also the framework lets you bring your own frontend. Blaze, React, Angular and now Svelte are all options.

Like any framework, Meteor's benefits come at a price, in that you need to buy in to Meteor's highly opinionated structure and concepts. Fortunately these aren't too crazy and most of the rules can be broken if you want, but there are plenty of gotchas that will trip first time users up.

Hopefully that's where this bootstrap project can help, getting you from zero to... something a little faster. I'm not suggesting this is a gold standard, and I'd recommend the resources below for the authoratative take on things like application structure and best practice.

## Resources

In suggested order of reading for anyone new to the framework.

- [Meteor Guide](https://guide.meteor.com/) - Read this first!
- [Official Tutorials](https://www.meteor.com/developers/tutorials)
- [Meteor API](https://docs.meteor.com/#/full/)

Once you're up and running, why not check out the following?

- [Forums](https://forums.meteor.com/)
- [Meteor Devtools](https://chrome.google.com/webstore/detail/meteor-devtools-evolved/ibniinmoafhgbifjojidlagmggecmpgf?hl=en)
- [2021 Meteor Impact conference](https://impact.meteor.com/), with some great talks from the community and previews of upcoming features

And if you're hungry for more packages, examples and great community content, check these out:

- [Awesome Meteor](https://github.com/urigo/awesome-meteor)
- [Awesome Blaze](https://github.com/arggh/awesome-blaze)

## Packages

Over and above anything I've written below, you should check out the [Meteor Community Packages repo](https://github.com/Meteor-Community-Packages). This is a welcome new endeavour to bring awesome community-created modules under one roof.

### Styling

Ironically the first batch of packages this project depends on aren't Meteor specific, so won't be found in `.meteor/packages`. We use `meteor npm install` to add [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) and associated dependencies.

### Utility, Subscriptions

#### _underscore_

Currently only used for a simple randomise function, but I use it in most projects. Of course, you can replace this with [lodash] or any number of other helper libraries. Consider only importing the functions you use to avoid loading in the whole library (see [tree-shaking](https://javascript.info/import-export)).

#### _meteorhacks:subs-manager_

A very useful package for controlling how your application behaves based on when subscriptions are ready. I've used this package on several enterprise projects and it's well worth it.

#### _simple:reactive-method_

Meteor helpers are powerful, they allow you to reactively update your UI based on data mutations over the wire. Sometimes though, you need to listen for the result of a server-side operation. Meteor.call is not inherently reactive, meaning you'd need to continously poll the server for the result you want. Enter Reactive Methods, a neat solution to this issue. A reactive method can call any Meteor.method you've defined on the server and, if used in a Template helper, will update reactively.

### Routing & Templates

#### _ostrio:flow-router-extra_ && _mealsunite:flow-routing-extra_

You'd be forgiven for being a little confused about the state of routing in Meteor. I know I was. The catch-all community-created solution for many years was Flow Router, which was thankfully picked up by Veliov Group (https://github.com/veliovgroup). It remains my choice too, but needs a little help from sibling packages to play nice with blaze layout below.

#### _kadira:blaze-layout_

A neat way to declare and control layouts in conjunction with your routing solution, obviously for Blaze.

### Accounts

#### _useraccounts:core_ / _accounts-password@2.2.0_ / _useraccounts:bootstrap_

The combination of these packages gives us user accounts, authentication and more straight out of the box! Awesome right! It's even extensible with other packages to add oAuth login providers.

### Login splash screen

I've added an artifical loading screen, just because, by delaying the result of a subscriptions listener, you can find this in `client/main.js`. Usually logging in is pretty much instantaneous. On that note, the `accounts-password` / `useraccounts:core` packages are great, and completely extensible including social media login.

### Twilio

If you dig a little deeper I've added instructions for an SMS-based login handler using Twilio (this was the main motivation for building this project in the first place). You need to set up Twilio as noted in the comments in `/imports/api/apimethods/methods.js` and then trigger the SMS using the provided Meteor method e.g. `Meteor.call("smsLogin");`
