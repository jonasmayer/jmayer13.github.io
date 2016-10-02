var Metalsmith = require('metalsmith');
var amrkdown = require('metalsmith-markdown');


Metalsmith(__dirname)
	.use(markdown())
	.build(function(err) {
		if (err) throw err;
	});

