"use strict";
let parkAreas = require("./area");




// loading all areas
parkAreas.themeParkAreas()
.then((results) => {
    let keys = Object.keys(results);
    keys.forEach((item) => {
        //console.log("resultsItem", results[item]);
        let attractionDetails = results[item].description;

        console.log("What's showing in attractionDetails? ", attractionDetails);

        document.getElementById("map-area").innerHTML += 
                
            `<div id="${results[item].id}" class="col-4">
                <div class="card">
                    <img class="card-img-top" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text" id="main-area"><a href="#main-area">${results[item].name}</a></p>
                    </div>
                </div>
            </div>`;
        // button element
        document.getElementById(`${results[item].id}`).addEventListener("click", function(){
            document.getElementById("main-area").innerHTML +=
            `<div id="area--${results[item].id}"><h2>${results[item].name}</h2><p>${results[item].description}</p>p>${results[item].times}</p></div>`;
            });


        

       
        //make call to firebase to on attractions and pass ID through url
           // document.getElementById("main-area").innerHTML += ``;
        });
    });

        //  call the attraction here and put it main area id

    parkAreas.getAttractions()
    .then((results) => {
        let attractionKey = Object.keys(results);
        attractionKey.forEach((attracItem) => {

            // add a button here on click instead of showing the innerHTMl to work.
            document.getElementById("main-area").innerHTML +=
            `<div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne${results[attracItem].id}" aria-expanded="false" aria-controls="collapseOne${results[attracItem].id}">
                  (${results[attracItem].name}) &nbsp;  ${results[attracItem].area_id}
                  </button>
                </h5>
              </div>
          
              <div id="collapseOne${results[attracItem].id}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">${results[attracItem].description}<p>${results[attracItem].times}</p>
                </div>
              </div>
            </div>`;


            // function attracToggle() {
            //     var displayInfo = results[attracItem].description;
            //     var displayMain = displayInfo;
            //     console.log("What does displayMain show? ", displayMain);
            //     displayMain = document.getElementById("main-attra");
            //     if (displayMain.style.display === "none") {
            //         displayMain.style.display = "block";
            //     } else {
            //         displayMain.style.display = "none";
            //     }
            // }
        });
    });

    // get both parkAreas.themeParkAreas() and parkAreas.getAtttractions() here to create a click button<p id="main-attra">${results[attracItem].description}</p>

    let buttonArea = parkAreas.themeParkAreas();
    let displayArea = parkAreas.getAttractions();
    console.log("What's in buttonArea? ", buttonArea);
    console.log("What's in displayArea? ", displayArea);



 
        // <p>${results[attracItem].description}</p> `<div class="theme-map card" id="${results[item].id}"><h1>${results[item].name}</h1>${results[item].description}</div>
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
        // };

        // document.getElementById("area1").innerHTML = `<div><p>001</p>${results[item].name}</div>`;

        //document.getElementById(`${results[item].id}`).style.background = `#${results[item].colorTheme}`;



