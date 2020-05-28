let myHeading = document.querySelectorAll('p');

if(myHeading === null){
    console.log("myHeading is null");
}
else{
    //myHeading.textContent = "HELLO WORLD";

    console.log("myHeading is not null");
}

function rgbToHex(red, green, blue){

    return "#" + red.toString(16) + green.toString(16) + blue.toString(16);
}

function changeColor(){
    if(myHeading !== null){
            // get a randon color
        let randomR = Math.floor(Math.random() * 255);
        let randomG = Math.floor(Math.random() * 255);
        let randomB = Math.floor(Math.random() * 255);

        let newColor = rgbToHex(randomR,randomG,randomB);

        myHeading.forEach(Element => Element.style = "color:" + newColor);
        //myHeading.style = "color:" + newColor;
        //console.log(newColor);
    }
    else{
        console.log("ERROR: myHeading is null");
    }
    
}

setInterval(changeColor,600);