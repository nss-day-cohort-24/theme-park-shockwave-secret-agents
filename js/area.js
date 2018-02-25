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


let themeParkAreas = function(id) {
    return new Promise (function (resolve, reject){
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
// console.log("what is in themeParkAreas? ", themeParkAreas.loadThemeParkAreas());


// Test to see if this works to put in the dom
let themePark = themeParkAreas; 
console.log("what is in themePark? ", themePark); //Here themeParkAreas show a Promise Value with 8 Array



let getAttractions = function(id) {
    return new Promise (function (resolve, reject){
        let attractionLoader = new XMLHttpRequest();
        
        attractionLoader.open("GET", `https://theme-park-secret-agents.firebaseio.com/attractions.json`);

        attractionLoader.send();
        attractionLoader.addEventListener("load", function(){
            let attractionArray = JSON.parse(this.responseText);
            
            resolve(attractionArray);
            console.log("what's in attractionArray", attractionArray);

            console.log("What's in attractionLoader?", attractionLoader);
            
        });
    });
};
        console.log("What's in getAttractions?", getAttractions);


module.exports = {themeParkAreas, getAttractions};
