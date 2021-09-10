window.onscroll = function () {
    const getHeader = document.getElementById('header')
    const getLi = document.getElementById('navbar-nav').getElementsByTagName("li")        
    
    if(window.pageYOffset > 0){
        getHeader.style.backgroundColor = 'hsla(0, 5%, 75%, 0.825)';
        for(var i = 0; i < getLi.length; i++){
            getLi[i].style.padding = "2em 2em"
        }
    }else{
        getHeader.style.backgroundColor = 'hsla(0, 5%, 85%, 0.525)';
        for(var i = 0; i < getLi.length; i++){
            getLi[i].style.padding = "3em 3em"
        }
    }
    

}