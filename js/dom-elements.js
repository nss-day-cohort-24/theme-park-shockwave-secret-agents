"use strict";
let parkAreas = require("./area");


parkAreas.loadThemeParkAreas()
.then((results) => {
    let keys = Object.keys(results);
    keys.forEach((item) => {
        console.log(results[item]);
        document.getElementById("main-area").innerHTML += `<div class="theme-map" id="${results[item].id}"><h1>${results[item].name}</h1>${results[item].description}</div>`;
    });
});