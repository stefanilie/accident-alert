Meteor.publish('samples', function () {
  return samples.find();
});

if (Meteor.isClient) {
  Meteor.subscribe("samples");
}
