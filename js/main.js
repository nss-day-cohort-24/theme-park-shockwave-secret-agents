"use strict";

let parkAreas = require("./area");
let domElements = require("./dom-elements");

// themePark.loadThemeParkAreas()
// .then(
// 	(themeAreaLoadResolve) => {
// 		console.log("themeAreaLoadResolve Promise", themeAreaLoadResolve);
// 		populatePage(themeAreaLoadResolve);
// 	},
// 	(reject) => {
// 		console.log("Areas are not loading");
// 	});

// themeParkArea.loadThemeParkAreas();

// parkAreas.loadThemeParkAreas()
//     .then((results) => {
//         let keys = Object.keys(results);
//         keys.forEach((item) => {
//             console.log(results[item]);
//             document.getElementById("main-area").innerHTML += `<div class="theme-map" id="${results[item].id}"></div>`;
//         });
//     });