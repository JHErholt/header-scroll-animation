window.onscroll = function () {
    const getHeader = document.getElementById('header')
    const getLi = document.getElementById('navbar-nav').getElementsByTagName("li")        
    
    if(window.pageYOffset > 0){
        getHeader.style.backgroundColor = 'hsla(0, 5%, 85%, 0.115)';
        for(var i = 0; i < getLi.length; i++){
            getLi[i].style.padding = "2em 2em"
        }
    }else{
        getHeader.style.backgroundColor = 'hsla(0, 5%, 85%, 0.515)';
        for(var i = 0; i < getLi.length; i++){
            getLi[i].style.padding = "3em 3em"
        }
    }
}