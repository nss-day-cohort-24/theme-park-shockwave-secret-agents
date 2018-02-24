"use strict";

// footer date
var todaysDate = new Date();
var dd = todaysDate.getDate();
var mm = todaysDate.getMonth()+1; //January is 0!
var yyyy = todaysDate.getFullYear();

if(dd<10) {
    dd = '0'+ dd;
} 

if(mm<10) {
    mm = '0'+ mm;
} 

todaysDate = mm + '/' + dd + '/' + yyyy;
let copyright = "&copy; 2018. Designed by Shockwave Secret Agents. ";
document.getElementById("todaysDate").innerHTML = `<p>${copyright}: ${todaysDate}</p>`;

// End date code for footer

// Load the areas with information


// create an empty function

let attractionItem = [];
var themeParkAreas = {};

        // let allAreas = document.getElementsByClassName("theme-map");
        // console.log("What does allAreas have?", allAreas); // has a collection of all the divs named theme-map

function secretWorld (areasPark) {
    let keys = Object.keys(areasPark);
    keys.forEach((item) => {

        //add the firebaseID to the object
        areasPark[item].firebaseID = item;
        attractionItem.push(areasPark[item]);
    });


}

    // load themePark Areas xhr
    themeParkAreas.loadThemeParkAreas = () => {
        let id = 1;
        return new Promise ( function (resolve, reject){
            let themeParkLoader = new XMLHttpRequest();

            themeParkLoader.open("GET", `https://theme-park-secret-agents.firebaseio.com/areas.json`);
       
            themeParkLoader.send();
            themeParkLoader.addEventListener("load", function(){
                let areasPark = JSON.parse(this.responseText);

            resolve(areasPark);
		
			console.log("What is areasPark showing? ", areasPark);
        }); 
        
    });
    
};

console.log("what is in themeParkAreas? ", themeParkAreas.loadThemeParkAreas());


// Test to see if this works to put in the dom
let themePark = themeParkAreas; 
console.log("what is in themePark? ", themePark); //Here themeParkAreas show a Promise Value with 8 Array



//TO DO: 
//get the areaArray items out of the array. 
//Then display them to each div id in DOM
// Ask.


module.exports = themePark;
//module.exports = getAttractions;
