var app = app || {};

app.ControlsView = Backbone.View.extend({

	el: $('.controls'),

	events: {
		'click #addOsc': 'addOsc',
	},

	addOsc: function(e) {

		e.preventDefault();
		app._vent.trigger('controls:addOsc', this);

	}

});