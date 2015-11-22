Template.header.created = function() {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['header'].helpers({
  showLogin: function() {
    return Session.get('showLogin');
  },
  isActive: function() {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function() {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function() {
    return Meteor.user() ? 'user' : 'sign in';
  }
});

Template['header'].events({
  'click .resize.button': function() {
    var showLogin = Session.get('showLogin');

    Session.set('isActive', !Session.get('isActive'));

    setTimeout(function() {
      Session.set('showLogin', !Session.get('showLogin'));
    }, 600);
  },
  'click .log-out.button': function() {
    Meteor.logout();
  },
  'click #monitor': function() {
    alert("ai apasat butonul");
    getData();
  }
});

function getData() {
  var timestamp = 0;
  var sampless = [];


  if (window.DeviceMotionEvent != undefined) {

    // Device motion event service routine!
    // setInterval(function() {
    window.ondevicemotion = function(e) {
      // Measure sample interval and siplay on page
      //
      var t = Date.now();
      timestamp = t

      // Create the sample

      var sample = {};
      sample.x = e.accelerationIncludingGravity.x;
      sample.y = e.accelerationIncludingGravity.y;
      sample.z = e.accelerationIncludingGravity.z;
      $("#accx").html(sample.x);
      $("#accy").html(sample.y);
      $("#accz").html(sample.z);
      sample.t = t;
      //
      // var 30secsAgo = t -
      // //setinterval are you ok?
      // setInterval(function(){
      //   Samples.
      // }, 5000);

      // Every 20 samples save record in mongoDB.

      sampless.push(sample);
      if (sampless.length > 20) {
        console.log(samples);
        alert(samples);
        created_at = new Date().getTime();
        Samples.insert({
          samples: samples,
          created_at: created_at
        });
        sampless = [];
      }
    }
  }
}
