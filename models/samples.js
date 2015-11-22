samples = new Mongo.Collection('samples');

// samples.attachSchema(
//     new SimpleSchema({
//     samples: {
//       type: Object
//     },
//     createdAt: {
//       type: Date,
//       denyUpdate: true
//     }
//   })
// );

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  samples.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("samples");
}
