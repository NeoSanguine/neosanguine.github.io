 
 // just lowers the volume to 20% of max
 var el = document.getElementById('wild_world_button');
 el.onclick = menuButtonClicked;

 function menuButtonClicked(){
    // just lowers the volume to 20% of max
    var audio = document.getElementById('menu_music'); // param is passed in as a script parameter
    audio.volume = 0.0;
 }