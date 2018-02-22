"use strict";

let themeParkArea = require("./area.js");


themePark.loadThemeParkAreas()
.then(
	(themeAreaLoadResolve) => {
		console.log("Cake Promise", themeAreaLoadResolve);
		populatePage(themeAreaLoadResolve);
	},
	(reject) => {
		console.log("Areas are not loading");
	});

// themeParkArea.loadThemeParkAreas();


