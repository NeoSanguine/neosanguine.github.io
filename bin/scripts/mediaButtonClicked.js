
var toggle = false;
var checkbox = document.getElementById('playPauseCheckbox');

function toggleMusic(){
    
    // grab the audio tag
    var audio = document.getElementById("menu_music");
        
    if(audio !== null){
        if(checkbox.checked === false){
            audio.play();

            var globalVolume = localStorage.getItem("global_volume");
            console.log("PLAYING: Volume:" + globalVolume);
            audio.volume = parseFloat(globalVolume);
           
        }
        else{
            audio.pause();
            console.log("PAUSED");
        }
        
    }

    var ingameAudio = document.getElementById("in_game_music");
    if(ingameAudio !== null){
        if(checkbox.checked === false){
            ingameAudio.play();

            var globalVolume = localStorage.getItem("global_volume");
            console.log("PLAYING: Volume:" + globalVolume);
            ingameAudio.volume = parseFloat(globalVolume);
           
        }
        else{
            ingameAudio.pause();
            console.log("PAUSED");
        }
        
    }
    

}


  //setInterval( toggleButtonState,1000);
  checkbox.onclick = toggleMusic;