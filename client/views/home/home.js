Template.home.onRendered(function() {
  if (Session.get('monitor') === 'off' || Session.get('monitor') === undefined) {
    $('.round-button-spinning').addClass('hidden');
    $('.round-button').removeClass('hidden');
  } else {
    $('.round-button').addClass('hidden');
    $('.round-button-spinning').removeClass('hidden');
  }
});
Template.home.events({
  'click .round-button': function() {
    $('.round-button').addClass('hidden');
    $('.round-button-spinning').removeClass('hidden');
    Session.set('monitor', 'on');
  },
  'click .round-button-spinning': function() {
    $('.round-button-spinning').addClass('hidden');
    $('.round-button').removeClass('hidden');
    Session.set('monitor', 'off');
  },
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
    getData();
  }
});


function getData() {
  var timestamp = 0;
  var sampless = [];
  var shouldGetData = false;


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
      sample.qoef = Math.abs(sample.x) + Math.abs(sample.y) + Math.abs(sample.z)
      if (sample.qoef > 45) {
        swal({title:'Confirmation required', text:'Possible accident may have occured!', type:'warning', confirmButtonColor: '#dd6b55',
          confirmButtonText: 'Yes, I am fine',
          closeOnConfirm: false});
      }
      sample.t = t;

      //
      // var 30secsAgo = t -
      // //setinterval are you ok?
      // setInterval(function(){
      //   Samples.
      // }, 5000);

      // Every 20 samples save record in mongoDB.
      // sampless.push(sample);
      // if (sampless.length > 20) {
      //   // console.log(samples);
      //   // alert(samples);
      //   // created_at = new Date().getTime();
      //   created_at = new Date();
      //   Meteor.call('insertSample', sampless, created_at, function(err, response) {
      // 	});
      //   sampless = [];
      //
      //   var testSamples = samples.find({sort: {$createdAt : -1}, limit: 50 });
      //
      //   console.log(testSamples);
      // }
    }
  }
}
