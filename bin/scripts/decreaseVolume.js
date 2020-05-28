function decreaseVolume()
 {

   // just lowers the volume to 20% of max

    var currentVolume = parseFloat(sessionStorage.getItem("global_volume"));

   if( currentVolume - 0.1 <= 0.0 ||  currentVolume === null){

    //global_volume = 0.0;
    localStorage.setItem("global_volume",0.0)

   }
   else{

    //global_volume = global_volume - 0.1;

    var newVolume = currentVolume - 0.1;

    localStorage.setItem("global_volume",newVolume)

   }

   var volume = parseFloat(localStorage.getItem("global_volume"));
   console.log("New Volume: " + volume);


   // update the volume so the user can hear 
   var menuAudio = document.getElementById("menu_music");
   if(menuAudio != null){
        menuAudio.volume = volume;
   }

   var inGameAudio = document.getElementById("in_game_music");
   if(inGameAudio != null){
      inGameAudio.volume = volume;
   }

 }


 var el = document.getElementById('volume_button_decrease');
 el.onclick = decreaseVolume;