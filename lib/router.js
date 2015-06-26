Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

Router.route('/', {name: 'home'});
Router.route('/topics', {name: 'topics'});
Router.route('/waterQuality', {name: 'waterQuality'});
Router.route('/wash-in-schools', {name: 'wash-in-schools'});
Router.route('/menstrual-hygiene-management', {name: 'menstrual-hygiene-management'});


/*Router.route('/', {name: 'topics'});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'loading'});
Router.onBeforeAction(requireLogin, {only: 'topics'});*/