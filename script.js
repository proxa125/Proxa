"use strict";

/* ===========================
   PROXA | script.js
=========================== */

document.addEventListener("DOMContentLoaded",()=>{

const header=document.querySelector(".header");

const links=document.querySelectorAll(".nav-link");

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.style.background="rgba(5,8,22,.82)";
        header.style.boxShadow="0 15px 40px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(8,12,28,.55)";
        header.style.boxShadow="none";

    }

});

/* ===========================
ACTIVE MENU
=========================== */

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===========================
SMOOTH
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
3D CARD
=========================== */

const cards=document.querySelectorAll(

".glass-card,.about-card,.service-card,.portfolio-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*-10;

const rotateY=((x/rect.width)-0.5)*10;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});
/* ===========================
FADE IN
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".service-card,.portfolio-card,.about-card,.contact,.hero-content,.hero-visual"

).forEach(el=>observer.observe(el));

});
/* ===========================
PARALLAX
=========================== */

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

const card=document.querySelector(".glass-card");

if(card){

card.style.transform=

`perspective(1000px)
rotateY(${x}deg)
rotateX(${-y}deg)
translateY(-8px)`;

}

});

/* ===========================
SCROLL REVEAL
=========================== */

const revealItems=document.querySelectorAll(

".service-card,.portfolio-card,.feature,.about-card,.footer-top"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".7s ease";

revealObserver.observe(item);

});

/* ===========================
COPYRIGHT YEAR
=========================== */

const year=document.querySelector(".footer-bottom p");

if(year){

year.innerHTML=

`© ${new Date().getFullYear()} PROXA Creative Studio — تمامی حقوق محفوظ است.`;

}

/* ===========================
PREVENT IMAGE DRAG
=========================== */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

/* ===========================
END
=========================== */
/* ===========================
MOBILE MENU
=========================== */

const menuBtn=document.createElement("button");



menuBtn.addEventListener("click",()=>{

nav.classList.toggle("mobile-active");

menuBtn.innerHTML=nav.classList.contains("mobile-active")

?'<i class="fa-solid fa-xmark"></i>'

:'<i class="fa-solid fa-bars"></i>';

});

/* ===========================
CLOSE MENU
=========================== */

document.querySelectorAll(".nav-link").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("mobile-active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

/* ===========================
BACK TO TOP
=========================== */

const topBtn=document.createElement("button");

topBtn.className="back-top";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.classList.toggle(

"show",

window.scrollY>450

);

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ===========================
DISABLE RIGHT CLICK
=========================== */

document.addEventListener(

"contextmenu",

e=>e.preventDefault()

);

/* ===========================
END PROXA
=========================== */
/* ===========================
BUTTON RIPPLE EFFECT
=========================== */

document.querySelectorAll(

".btn-primary,.btn-secondary,.contact-btn,.header-btn"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================
LOADING IMAGES
=========================== */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("load",()=>{

img.classList.add("loaded");

});

});

/* ===========================
CURRENT PAGE HASH
=========================== */

window.addEventListener("load",()=>{

if(location.hash){

const target=document.querySelector(location.hash);

if(target){

setTimeout(()=>{

target.scrollIntoView({

behavior:"smooth"

});

},300);

}

}

});

/* ===========================
END
=========================== */
