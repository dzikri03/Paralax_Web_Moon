let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountaints_behind = document.getElementById('mountaints_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountaints_front = document.getElementById('mountaints_front')
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountaints_behind.style.top = value * 0.5 + 'px';
    mountaints_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 4 + 'px';
    header.style.top = value * 0.5 + 'px';            
})