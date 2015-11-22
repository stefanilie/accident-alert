// Use "orion generate model" to create new models
// ...
// Also creates files in server/publications

People = new Meteor.Collection("people");

People.allow({
  insert: function (userId, doc) {
    return true;
  }
});
