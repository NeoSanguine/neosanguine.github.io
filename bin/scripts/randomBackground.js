
// randomize the background on load

window.onload = function(){ 
    
    var image = document.getElementById("background_image");
    var image_override = "";

    var max = 1;
    var min = 0

    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomInt == 0){
        image_override = "background-image: url('../../background/ac_background.png');";
    }
    else{
        image_override = "background-image: url('../../background/ac_background2.png');";
    }

    //this.console.log(randomInt);

    image.style = image_override;

}