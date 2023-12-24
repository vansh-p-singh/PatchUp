// Preloader
let preloader=document.querySelector(".preloader");

window.addEventListener("load",()=>{
    preloader.style.display="none";
})

// No - button mover
let noBtn=document.querySelector('.no');
let notification=document.querySelector(".notification");
noBtn.addEventListener("mouseover",()=>{
    let randomTop = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    let randomRight = Math.floor(Math.random() * (200 - (-200) + 1)) + (-200);
    noBtn.style.top=`${randomTop}px`;
    noBtn.style.right=`${randomRight}px`;
    notify();
})


// Notification function
let notifies=["Naa yaar, na ni karni","Mene Kaha na, Please Naa nhi", "Le Krti Reh Koshish - Naah ni kar skti Chah kar bhi"];
let notifyNumber=0;
let notify=()=>{
    if(notifyNumber<=1){
        notification.innerText=notifies[notifyNumber];
        notifyNumber++;
    }
    else{
        notification.innerText=notifies[2];
    }
    notification.style.display="flex";
    var x1=setInterval(()=>{
        notification.style.display="none"
    },4000)
}


// When clicked Yes
let yes=document.querySelector(".yes");
let yesBox=document.querySelector(".yesBox");
let head=document.getElementsByTagName("h3")[0];
let bear=document.querySelector(".bunny>img")
yes.addEventListener("click",()=>{
    let btns=document.getElementsByClassName("btn");
    for(let i=0;i<btns.length;i++){
        btns[i].style.display="none";
    }
    notification.style.display="none";
    head.innerText="Thank uhhh !!! Ab se Bss Gussa na krio,, Luv uhh too :)";
    head.style.display="none";
    bear.src="bear2.gif";
    bear.style.display="none";
    yesBox.style.display="flex";
})

// When yesBox dismissed
let boxBtn=document.querySelector('#boxBtn');
let lastNote=document.querySelector('.lastNote');
boxBtn.addEventListener('click',()=>{
    head.style.display="block";
    bear.style.display="block";
    yesBox.style.display="none";
    lastNote.style.display="flex";
    setInterval(()=>{
        lastNote.style.display="none";
    },15000)
})