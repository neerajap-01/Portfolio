$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

    // slide-up scripts
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

    // toggle menu/navbar scripts
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });

    //readmore popup
    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal-container');
    const close = document.getElementById('close');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const education = document.getElementById('education');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
      home.classList.add('blur');
      about.classList.add('blur');
      education.classList.add('blur');
      skills.classList.add('blur');
      projects.classList.add('blur');
      contact.classList.add('blur');
    });
    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
      home.classList.remove('blur');
      about.classList.remove('blur');
      education.classList.remove('blur');
      skills.classList.remove('blur');
      projects.classList.remove('blur');
      contact.classList.remove('blur');
    });

    // typing animation script
    var typed = new Typed(".typing",{
      strings: ["Developer.","Fresher.","Tester.","Student.","Learner."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    var typed = new Typed(".typing-1",{
      strings: ["Developer.","Fresher.","Tester.","Student.","Learner."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    
    // owl-carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false,
        },
        600:{
          items: 2,
          nav: false,
        },
        1000:{
          items: 3,
          nav: false,
        }
      }
    });
});

//Sharing Social Buttons in Share button and menu.

const facebookBtn = document.querySelectorAll('.facebook-btn');
const whatsappBtn = document.querySelectorAll('.whatsapp-btn');
const twitterBtn = document.querySelectorAll('.twitter-btn');
const pinterestBtn = document.querySelectorAll('.pinterest-btn');
const linkedinBtn = document.querySelectorAll('.linkedin-btn');
const mockupImg = document.querySelectorAll('.mockup');

function init() {
  let postUrl = encodeURI("https://www.neerajpal.me");
  let postTitle = encodeURI("Hi, check out this Portfolio website: ");
  let postImg = encodeURI(mockupImg.src);

  facebookBtn.forEach(fBtn => {
    fBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
  });
  whatsappBtn.forEach(wBtn => {
    wBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
  });
  twitterBtn.forEach(tBtn => {
    tBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
  });
  pinterestBtn.forEach(pBtn => {
    pBtn.setAttribute("href", `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&is_video=[is_video]&description=${postTitle}`);
  });
  linkedinBtn.forEach(lBtn => {
    lBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
  });
}

init();

// Hire me Popup menu
const section = document.querySelector('.section'),
      hireBtn = document.querySelector('#hireBtn'),
      closeBtn = document.querySelectorAll('#close_hire');
const home = document.getElementById('home');
const about = document.getElementById('about');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');      

hireBtn.addEventListener("click", () => {
  section.classList.add("show");
  home.classList.add('blur');
  about.classList.add('blur');
  education.classList.add('blur');
  skills.classList.add('blur');
  projects.classList.add('blur');
  contact.classList.add('blur');
});

closeBtn.forEach(cBtn => {
  cBtn.addEventListener("click", () => {
    section.classList.remove("show");
    home.classList.remove('blur');
    about.classList.remove('blur');
    education.classList.remove('blur');
    skills.classList.remove('blur');
    projects.classList.remove('blur');
    contact.classList.remove('blur');
  });
});

// Custom Right Click
const contextMenu = document.querySelector(".wrapper1",".about"),
shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener("contextmenu", e => {
  e.preventDefault(); // prevent default context menu of the browser

  let x = e.pageX, y = e.pageY,
  winWidth = window.innerWidth
  winHeight = window.offsetHeight,
  cmWidth = contextMenu.offsetWidth,
  cmHeight = contextMenu.offsetHeight;

  // if x is greater than window width - contextMenu width - shareMenu width
  // then show the share menu to the left else show it to the right
  if(x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
    shareMenu.style.left ="-200px";
  } else {
    shareMenu.style.left ="";
    shareMenu.style.right ="-200px";
  }

  // if x is greater than window width - contextMenu width then set the x value
  // to window width - contextMenu width else set x to the offsetX. Similarly, to y.
  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

//hide the context menu on click
document.addEventListener("click", () => contextMenu.style.visibility = "hidden");

//Custom Cursor
const cursor = document.querySelector(".cursor");
var timeout;

//follow the cursor on mousemove
document.addEventListener("mousemove", (e)=>{
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});

//cursor effects on mouseout
document.addEventListener("mouseout", ()=>{
  cursor.style.display = "none";

  //cursor effects on mouse stop
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

