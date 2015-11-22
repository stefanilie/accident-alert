people = new Mongo.Collection('people');

//
// people.attachSchema(
//     new SimpleSchema({
//     title: {
//       type: String
//     },
//     content: {
//       type: String
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
  people.allow({
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
  Meteor.subscribe("people");
}
