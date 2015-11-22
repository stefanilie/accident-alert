Meteor.publish('people', function () {
  return people.find();
});
