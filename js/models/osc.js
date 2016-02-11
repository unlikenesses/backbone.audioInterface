var app = app || {};

app.Osc = Backbone.Model.extend({

	initialize: function(obj) {

		this.create(obj.frequency);
		this.on('change:frequency', function() { this.setFrequency(); });
		this.on('change:detune', function() { this.setDetune(); });
		this.on('change:type', function() { this.setType(); });

	},

	defaults: {
		name: '',
		frequency: 0,
		detune: 0,
		playing: false,
		type: 'sine'
	},

	create: function(freq) {

		this.node = app.audioCx.createOscillator();
		this.node.frequency.value = freq;
		this.node.detune.value = 0;
		this.node.type = this.get('type');
		this.node.connect(app.audioCx.destination);

	},

	start: function() {

		this.node.start();

	},

	stop: function() {

		this.node.stop();

	},

	setFrequency: function() {

		this.node.frequency.value = this.get('frequency');

	},

	setDetune: function() {

		this.node.detune.value = this.get('detune');

	},

	setType: function() {

		this.node.type = this.get('type');

	},

	toggleStart: function() {

		var playing = this.get('playing');
		if (playing) {
			this.stop();
		} else {
			this.create(this.get('frequency'));
			this.start();
		}
		this.set('playing', ! playing);

	}

});