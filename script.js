// Preloader
let preloader=document.querySelector(".preloader");

window.addEventListener("load",()=>{
    preloader.style.display="none";
})

// No - button mover
let yes=document.querySelector(".yes");
let noBtn=document.querySelector('.no');
let notification=document.querySelector(".notification");

// When no clicked
noBtn.addEventListener("click",()=>{
    document.querySelector('h3').innerText="Theek h....Bye";
    document.querySelector('h3').style.fontSize="22px";
    document.querySelector('footer').style.display="none";
    for(let i of document.getElementsByClassName('btn')){
        i.style.display="none";
    }
    setInterval(()=>{
        window.location.href = 'https://google.com/';
    },500)
})





// When clicked Yes
yes.addEventListener('click',()=>{
    document.querySelector('h3').innerText="Naah hi kaho, jaa ab yha se";
    document.querySelector('h3').style.fontSize="22px";
    document.querySelector('footer').style.display="none";
    for(let i of document.getElementsByClassName('btn')){
        i.style.display="none";
    }
    setInterval(()=>{
        window.location.href = 'https://google.com/';
    },900)
})

