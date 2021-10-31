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

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
    });
    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    });

    // typing animation script
    var typed = new Typed(".typing",{
      strings: ["Developer.","Freelancer.","Tester.","Designer.","Learner."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    var typed = new Typed(".typing-1",{
      strings: ["Developer.","Freelancer.","Tester.","Designer.","Learner."],
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