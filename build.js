var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var watch = require('metalsmith-watch');


Metalsmith(__dirname)
	.use(markdown())
	.use(
		watch({
			paths: {
				"${source}/**/*": true,
				"${source}/**/**/*": true,
			},
			livereload: true,
		})
	)
	.use(layouts({
		"engine" : "handlebars",
		"directory" : "layouts",
		"partials": "layouts/partials"
	}))
	.build(function(err) {
		if (err) throw err;
		console.log("DONE!");
	});

