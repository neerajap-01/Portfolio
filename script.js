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

//Sharing Social Buttons

const facebookBtn = document.querySelector('.facebook-btn');
const whatsappBtn = document.querySelector('.whatsapp-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const pinterestBtn = document.querySelector('.pinterest-btn');
const linkedinBtn = document.querySelector('.linkedin-btn');

function init() {
  let postUrl = encodeURI("https://www.neerajpal.me");
  let postTitle = encodeURI("Hi, check out this Portfolio website: ");

  facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
  whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
  twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}&hashtags=[hashtags]`);
  pinterestBtn.setAttribute("href", `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&is_video=[is_video]&description=${postTitle}`);
  linkedinBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
}

init();