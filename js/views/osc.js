var app = app || {};

app.OscView = Backbone.View.extend({

	tagName: 'div',
	className: 'oscContainer',
	template: _.template($('#oscTemplate').html()),

	events: {
		'click a' : 'toggleStart',
		'input .frequency': 'updateFrequency',
		'input .detune' : 'updateDetune',
		'change .oscType': 'changeType'
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	toggleStart: function(e) {

		e.preventDefault();
		var btnState = $(this.$el).find('.toggleStart > a');
		if (btnState.html() == 'Start') {
			btnState.html('Stop');
		} else {
			btnState.html('Start');
		}
		this.model.toggleStart();	
	},

	updateFrequency: function(e) {
		var frequency = e.target.value;
		this.model.set('frequency', frequency);
		$(this.$el).find('.frequencyOutput').html(frequency + ' HZ');
	},

	updateDetune: function(e) {
		var detune = e.target.value;
		this.model.set('detune', detune);
		$(this.$el).find('.detuneOutput').html(detune + ' cents');
	},

	changeType: function(e) {
		this.model.set('type', e.target.value);
	}

});