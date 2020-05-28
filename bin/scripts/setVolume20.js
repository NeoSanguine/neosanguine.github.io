 

 function setVolume()
 {

   // just lowers the volume to 20% of max
   var audio = document.getElementById(document.currentScript.getAttribute('param')); // param is passed in as a script parameter

   // get the global volume

   globalVolume = localStorage.getItem("global_volume");

   console.log("Global Volume: " + globalVolume);

   if(audio != null){
      audio.volume = globalVolume;
   }

   var inGameAudio = document.getElementById("in_game_music");
   if(inGameAudio != null){
      inGameAudio.volume = globalVolume;
   }
 }

 setVolume();