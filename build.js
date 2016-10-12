var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var watch = require('metalsmith-watch');
var sass = require('metalsmith-sass');
var collections = require('metalsmith-collections');


Metalsmith(__dirname)
	.use(collections({
		pages: '*.md'
	}))
	.use(
		watch({
			paths: {
				"${source}/**/*": true,
				"${source}/**/**/*": true,
			},
			livereload: true,
		})
	)
	.use(markdown())
	.use(layouts({
		"engine" : "handlebars",
		"directory" : "layouts",
		"partials": "layouts/partials"
	}))
	.use(sass({		
		outputDir: 'css/',
		outputStyle: "compressed"
	}))
	.build(function(err) {
		if (err) throw err;
		console.log("DONE!");
	});

