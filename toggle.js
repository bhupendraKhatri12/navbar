var toggle = document.getElementsByClassName('toggle')[0];
var bar = document.getElementsByClassName('bars')[0];
var close = document.getElementsByTagName('i')[0];

bar.addEventListener('click',()=>{

toggle.classList.toggle('active');

});


close.addEventListener('click',()=>{

    toggle.classList.toggle('active');
    
    });
    
    






