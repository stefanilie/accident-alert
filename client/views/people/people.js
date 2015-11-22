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
      var fields       = ["displayName", "name"];
      var contacts = navigator.contacts.find(fields, onSuccess, onError, options);
    }else{
      Session.set("contacts", emtyContactsList);
    }
};

Template.home.helpers({
  contacts: function () {
    return Session.get("contacts");
  } 
});
