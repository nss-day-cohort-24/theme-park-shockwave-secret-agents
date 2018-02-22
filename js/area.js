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

function secretWorld (attractions) {
    //console.log(attractions.target.id);
    let keys = Object.keys(attractions);
    keys.forEach((item) => {

        //add the firebaseID to the object
        attractions[item].firebaseID = item;
        attractionItem.push(attractions[item]);
    });

        console.log("Does it get all attractions? ", attractions);

}

    // get all areas
    themeParkAreas.getThemeAreas = () => {
        return attractionItem;
    };
    
    // load themePark Areas xhr
    themeParkAreas.loadThemeParkAreas = () => {
        let id = 1;
        return new Promise ( function (resolve, reject){
            let themeParkLoader = new XMLHttpRequest();

        themeParkLoader.open("GET", `https://theme-park-secret-agents.firebaseio.com/areas.json`);
       
            themeParkLoader.send();
            console.log("What's in Theme park Loader: ", themeParkLoader);

            themeParkLoader.addEventListener("load", function(){
			let attractions = JSON.parse(this.responseText);
            console.log("what's in atrractions", attractions);

            resolve(attractions);
		
			console.log("What is attractions showing? ", attractions);
        }); 
        
        // const cannotLoad = new Error("cannot load the attractions.");
        // reject(cannotLoad);
    });
    
};
// .then

console.log("what is in themeParkAreas? ", themeParkAreas.loadThemeParkAreas());
//  //resolve(attractions);
//  console.log("What is attraction showing? ", attractions);

module.exports = {themeParkAreas};
