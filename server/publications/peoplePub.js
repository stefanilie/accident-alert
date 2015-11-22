Meteor.publish('peoplePublication', function () {
  return People.find({});
});
