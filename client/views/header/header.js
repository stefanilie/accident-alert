Samples = new Meteor.Collection("samples");
Template.header.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['header'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Meteor.user() ? 'user' : 'sign in';
  }
});

Template['header'].events({
  'click .resize.button' : function () {
    var showLogin = Session.get('showLogin');

    Session.set('isActive', !Session.get('isActive'));

    setTimeout(function () {
      Session.set('showLogin', !Session.get('showLogin'));
    }, 600);
  },
  'click .log-out.button' : function () {
    Meteor.logout();
  },
  'click #monitor': function(){
    console.log("ai apasat butonul");
    getData();
  }
});

function getData()
{
    console.log("am apelat functia ciorba");
    var timestamp = 0;
    var samples = [];

    if (window.DeviceMotionEvent != undefined) {

      // Device motion event service routine!

      window.ondevicemotion = setInterval(function(e) {
        console.log("am apelat functia ciorba");

        // Measure sample interval and siplay on page

        var t = Date.now();
        $("#measured").html(t - timestamp);
        $("#interval").html(e.interval);
        timestamp = t

        // Create the sample

        var sample = {}
        sample.x = e.acceleration.x;
        sample.y = e.acceleration.y;
        sample.z = e.acceleration.z;
        $("#accx").html(sample.x);
        $("#accy").html(sample.y);
        $("#accz").html(sample.z);

        if ( e.rotationRate ) {
          sample.a = e.rotationRate.alpha;
          sample.b = e.rotationRate.beta;
          sample.c = e.rotationRate.gamma;
          $("#rota").html(sample.a);
          $("#rotb").html(sample.b);
          $("#rotc").html(sample.c);
        }
        sample.t = t;

        // Every 20 samples save record in mongoDB.

        samples.push(sample);
        if (samples.length > 20) {
          created_at = new Date().getTime();
          Samples.insert({samples: samples, created_at: created_at});
          samples = [];
        }
      }, 1000);
    }
}
