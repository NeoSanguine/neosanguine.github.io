// Checks for the music type (raining, snowing, etc)
// if raining is checked, snowing is not and vice versa
// if either are checked, then we add a flag in the updateTime.js 
// to play from their respective tracks if supported

function makeItSnow(){

    var isRaining = sessionStorage.getItem("global_raining");
    var isSnowing = sessionStorage.getItem("global_snowing");

    // rain always overrides snow
    if(JSON.parse(isRaining) === true){
        //isRaining = false;
        sessionStorage.setItem("global_raining",false);
    }

    if(JSON.parse(isSnowing) === false){
        //global_snowing = true;
        sessionStorage.setItem("global_snowing",true);
    }
    else{
        sessionStorage.setItem("global_snowing",false);
    }

    // update colors
   // var rainColorStyle = document.getElementById('rain_button_color').style;
   // var snowColorStyle = document.getElementById('snow_button').style;
    

    console.log("IT IS SNOWING");
}

function makeItRain(){
    // get the remote

    //get globals
    var isRaining = sessionStorage.getItem("global_raining");
    var isSnowing = sessionStorage.getItem("global_snowing");

    if(JSON.parse(isSnowing) === true){
        //global_snowing = false;
        sessionStorage.setItem("global_snowing",false);
    }


    if(JSON.parse(isRaining) === false){
        //global_raining = true;
        sessionStorage.setItem("global_raining",true);
    }else{
       // global_raining = false;
       sessionStorage.setItem("global_raining",false);
    }

   

    console.log("IT IS RAINING");
}

// change the color of the text if active
function updateColors(){

     var rainColorStyle = document.getElementById('rain_button_color').style;
     var snowColorStyle = document.getElementById('snow_button_color').style;

     var isRaining = sessionStorage.getItem("global_raining");
     var isSnowing = sessionStorage.getItem("global_snowing");
 
     if(JSON.parse(isRaining) === true){
         //make it green I guess
         document.getElementById('rain_button_color').style = "color:#00ff00;";
     }
     else{
         document.getElementById('rain_button_color').style = "color:#ffff00";
     }

     if(JSON.parse(isSnowing) === true){
        //make it green I guess
        document.getElementById('snow_button_color').style = "color:#00ff00;";
    }
    else{
        document.getElementById('snow_button_color').style = "color:#ffff00;";
    }
}

// check if our buttons have been clicked
var snowButton = document.getElementById('snow_button');
snowButton.onclick = makeItSnow;

var rainButton = document.getElementById('rain_button');
rainButton.onclick = makeItRain;

var t = setInterval(updateColors, 1000); // every second we call getColor()