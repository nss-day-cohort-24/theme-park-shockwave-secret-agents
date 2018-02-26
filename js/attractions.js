const themepark = require("./area")
const moment = require("moment")


function getHour(time){
    const indexOfColon = time.indexOf(":")
    const hour = time.substring(0, indexOfColon)
    return hour
}


function formatTimeShow(h_24) {
    var h = h_24 % 12;
    if (h === 0) h = 12;
    return (h < 10 ? '0' : '') + h + ':00' + (h_24 < 12 ? 'am' : 'pm');
}


//1. store the button for use later
const currentEventsButton = document.getElementById("current-events");

//2. create a function that runs when the click events happens.
// make sure you add an event argument because when the click event 
//happens you will receieve an event object.  

function pullCurrentEvents(){
   const allEvents = themepark.getAttractions()
    
   allEvents.then(function(attractions){
        var attractionsWithTimes = []

        attractions.forEach(function(attraction){
            if(attraction.hasOwnProperty("times")){
                attractionsWithTimes.push(attraction)
            }
        })

        console.log(attractionsWithTimes)

        var currentTimeEvents = []

        attractionsWithTimes.forEach(function(attraction){
            attraction.times.forEach(function(attractionTime){
                const currentTime = new Date().getHours()
                const currentTimeAsHour = getHour(formatTimeShow(currentTime))
               

                if(getHour(formatTimeShow(currentTime)) === getHour(attractionTime)){
                    currentTimeEvents.push(attraction)
                }
                

            })
        })

        console.log("current time events: ", currentTimeEvents)


   })
}


//3.  listen for click events on the the button.

currentEventsButton.addEventListener("click", pullCurrentEvents)