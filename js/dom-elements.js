"use strict";
let parkAreas = require("./area");

parkAreas.loadThemeParkAreas()// loading all areas
.then((results) => {
    let keys = Object.keys(results);
    keys.forEach((item) => {
        //console.log("resultsItem", results[item]);
        document.getElementById("map-area").innerHTML += 
        
       `<div id="${results[item].id}" class="col-4">
        <div class="card">
        <img class="card-img-top" alt="Card image cap">
        <div class="card-body">
        <p class="card-text">${results[item].name}</p>
  </div>
  </div>
</div>`
;
       
        //make call to firebase to on attractions and pass ID through url
           // document.getElementById("main-area").innerHTML += ``;
        });
    });


    let getAttractions = function(id) {
        return new Promise (function (resolve, reject){
            let attractionLoader = new XMLHttpRequest();
            attractionLoader.open("GET", 'https://theme-park-secret-agents.firebaseio.com/attractions.json');
    
            attractionLoader.send();
            attractionLoader.addEventListener("load", function(){
                let attractionArray = JSON.parse(this.responseText);
                resolve(attractionArray);
                console.log("what's in attractionArray", attractionArray);

                //.then()
            });
        });
    };


//});


 
        //  call the attraction here and put it main area id
        
        // `<div class="theme-map card" id="${results[item].id}"><h1>${results[item].name}</h1>${results[item].description}</div>
//  .then((atrractionResult)  => {
//             let attractionKeys = Object.keys(attractionResult);
//             attractionKeys.forEach((areaKey) => {
//                 console.log("atrractionDetails", results[item]);
//                 document.getElementById("main-area").innerHTML += ``;
//             });
//         });
        // document.getElementById(`${results[item].id}`).addEventListener("click", function(){

        
        // document.getElementById("main-area").innerHTML +=
        // `<div id="area--${results[item].id}"><h2>${results[item].name}</h2><p>${results[item].description}</p></div>`;
        // }

        // document.getElementById("area1").innerHTML = `<div><p>001</p>${results[item].name}</div>`;

        //document.getElementById(`${results[item].id}`).style.background = `#${results[item].colorTheme}`;

