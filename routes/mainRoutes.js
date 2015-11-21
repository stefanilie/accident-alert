// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/settings', {
  name: 'settings',
  action: function () {
    this.render('settings');
    SEO.set({ title: 'Settings - ' + Meteor.App.NAME });
  }
});

Router.route('/profile', {
  name: 'profile',
  action: function () {
    this.render('profile');
    SEO.set({ title: 'Profile - ' + Meteor.App.NAME });
  }
});
