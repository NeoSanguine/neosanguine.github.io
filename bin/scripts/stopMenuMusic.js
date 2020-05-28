 // just lowers the volume to 20% of max
 window.onload = function(){ 
    var WWbutton = document.getElementById("wild_world_button");

    if (WWbutton != null){
        WWbutton.onclick = function() {// error
            var audio = document.getElementById("menu_music");
            audio.pause();
        };
    }


    // DONT STOP THE MUSIC FOR THE OPTIONS MENU
    var optionsButton = document.getElementById("options_button");
    if(optionsButton != null){
        optionsButton.onclick = function() {// error
            var audio = document.getElementById("in_game_music");
            audio.pause();
        };
    }

    var menuButton = document.getElementById("menu_button");
    if(menuButton != null){
        menuButton.onclick = function() {// error
            var audio = document.getElementById("in_game_music");
            audio.pause();
        };
    }



}





