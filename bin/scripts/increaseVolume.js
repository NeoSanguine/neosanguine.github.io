function increaseVolume()
 {

   // just lowers the volume to 20% of max

   var currentVolume = localStorage.getItem("global_volume");

   var volume = 0.0;

   if( JSON.parse(currentVolume) + 0.1 >= 0.99){

    //global_volume = 1.0;
    localStorage.setItem("global_volume", 1.0);

   }
   else{

    //global_volume = currentVolume + 0.1;
    var newVolume = JSON.parse(currentVolume) + 0.1;
    localStorage.setItem("global_volume", newVolume);
   }

   volume = JSON.parse(localStorage.getItem("global_volume"));

   if(volume > 1.0){
     volume = 1.0;
   }

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


 var el = document.getElementById('volume_button_increase');
 el.onclick = increaseVolume;
