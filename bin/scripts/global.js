//sessionStorage.clear();

// check if the session has changed from its default value, if so return a different value

if(localStorage.getItem("global_volume") === null){
    localStorage.setItem("global_volume", 0.1);
}

if(localStorage.getItem("global_raining") === null){
    localStorage.setItem("global_raining", false);
}

if(localStorage.getItem("global_snowing") === null){
    localStorage.setItem("global_snowing", false);
}

if(localStorage.getItem("global_paused") === null){
    localStorage.setItem("global_paused", false);
}

if(localStorage.getItem("global_rainbowText") === null){
    localStorage.setItem("global_rainbowText", true);
}


