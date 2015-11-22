Meteor.startup(function () {
  Meteor.methods({
    insertSample: function (samplesParam, created_at) {
      console.log(samples);
      samples.insert({
        samples: samplesParam,
        createdAt: created_at
      });
    }
  });
});
