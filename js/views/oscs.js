var app = app || {};

app.OscsView = Backbone.View.extend({

	el: $('.canvas'),

	initialize: function() {
		this.collection = new app.Oscs();
		app._vent.on('controls:addOsc', this.addOsc, this);
	},

	render: function() {
		this.collection.each(function(item) {
			this.renderOsc(item);
		}, this);
	},

	renderOsc: function(item){
		var oscView = new app.OscView({
			model: item
		});
		this.$el.append(oscView.render().el);
	},

	addOsc: function() {
		var length = this.collection.length;
		var num = length + 1;
		var newOsc = new app.Osc({name: 'Osc ' + num, frequency: 500, detune: 0});
		this.collection.add(newOsc);
		this.renderOsc(newOsc);
	}

});