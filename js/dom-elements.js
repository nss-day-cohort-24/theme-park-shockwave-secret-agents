"use strict";
let parkAreas = require("./area");


parkAreas.loadThemeParkAreas()// loading all areas
.then((results) => {
    let keys = Object.keys(results);
    keys.forEach((item) => {
        console.log(results[item]);
        document.getElementById("map-area").innerHTML += 
        
        // `<div class="theme-map card" id="${results[item].id}"><h1>${results[item].name}</h1>${results[item].description}</div>
        
       `<div class="col-4">
        <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <p class="card-text">${results[item].name}</p>
  </div>
  </div>
</div>`;
        
        //  call the attraction here and put it main area id
        
        document.getElementById("area1").addEventListener("click", area1);
        function area1() {
        document.getElementById("main-area").innerHTML +=
        `<div id="area--${results[item].id}"><h2>${results[item].name}</h2><p>${results[item].description}</p></div>`;
        }

        // document.getElementById("area1").innerHTML = `<div><p>001</p>${results[item].name}</div>`;

        //document.getElementById(`${results[item].id}`).style.background = `#${results[item].colorTheme}`;


    });
});

