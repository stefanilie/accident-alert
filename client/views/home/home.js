Template.home.onRendered(function(){
  if (Session.get('monitor') === 'off' || Session.get('monitor') === undefined) {
    $('.round-button-spinning').addClass('hidden');
    $('.round-button').removeClass('hidden');
    }
  else {
    $('.round-button').addClass('hidden');
    $('.round-button-spinning').removeClass('hidden');
  }
});
Template.home.events({
  'click .round-button': function() {
    $('.round-button').addClass('hidden');
    $('.round-button-spinning').removeClass('hidden');
    Session.set('monitor','on');
  },
  'click .round-button-spinning': function() {
    $('.round-button-spinning').addClass('hidden');
    $('.round-button').removeClass('hidden');
    Session.set('monitor','off');
  }
});

