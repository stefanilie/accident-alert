Meteor.publish('samples', function () {
  return samples.find();
});
