Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: '/WinSApp1bbbbbb.png',
      backgroundColor: '#FA8C06',
      loadingHtml: message + spinner
    });

    var loading = this.loading;
    Meteor.setTimeout(function () {
      loading.finish();
    }, 6000);
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Welcome to WinSApp! Your one-stop resource platform for WASH in Schools.</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';