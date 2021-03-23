 const cross = document.getElementById('cross');
 const nav = document.getElementById('nav');
 const menu = document.getElementById('menu');


menu.addEventListener('click', function(){
    nav.style.transitionDuration ="1s";
    nav.style.marginLeft = "0%";
})
cross.addEventListener('click', function(){
    nav.style.transitionDuration ="1s";
    nav.style.marginLeft = "-50%";
})