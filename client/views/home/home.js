if(Meteor.isCordova){
  Meteor.startup(function(){
    navigator.contacts.find(["*"], function(contacts){
      alert('Found ' + contacts.length + ' contacts.');
      console.log(contacts);
    })
  })
}