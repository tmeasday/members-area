Meteor.startup(function() {
  // when we start up, delete all pages and load them from the pages directory
  Pages.remove({}, {multi: true});
});