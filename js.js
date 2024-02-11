function Menu(){
    var menuPanel = document.querySelector(".menu-panel");

    // if(menuPlanel.style.display === "none" || menuPlanel.style.display === ""){
    //     menuPlanel.style.display = "flex";
    // }
    // else{
    //     menuPlanel.style.display= "none";
    // }
    if(menuPanel.classList.contains("show-menu")){
        menuPanel.classList.remove("show-menu"); 
    }
    else{
        menuPanel.classList.add("show-menu");
    }
    
}

function bar(){
    var menubPanel = document.querySelector(".showbar");

    // if(menuPlanel.style.display === "none" || menuPlanel.style.display === ""){
    //     menuPlanel.style.display = "flex";
    // }
    // else{
    //     menuPlanel.style.display= "none";
    // }
    if(menubPanel.classList.contains("showbar")){
        menubPanel.classList.remove("showbar"); 
    }
    else{
        menubPanel.classList.add("showbar");
    }
    
}