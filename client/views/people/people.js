Template.people.rendered = function () {
    var emtyContactsList = [];
    if(Meteor.isCordova){
      function onSuccess(contacts){
        Session.set("contacts",contacts);
      };
      function onError(contactError){
        Session.set("contacts","");
      };
      var options = new ContactFindOptions();
      options.multiple = true;
      var fields  = ["displayName", "phoneNumbers"];
      var contacts = navigator.contacts.find(fields, onSuccess, onError, options);
    }else{
      Session.set("contacts", emtyContactsList);
    }
};

Template.people.helpers({

  favContacts: function () {
  	console.log(JSON.stringify(people.find({}).count()));
  	return People.find().fetch();
  },

  phoneContacts: function () {
    return Session.get("contacts");
  } 
});
