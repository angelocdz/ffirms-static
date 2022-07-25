// HEADER OPEN CLOSE
const body = document.querySelector('body'),
  navMenu = body.querySelector('.header__menu'),
  navOpenBtn = body.querySelector('.header__open'),
  navCloseBtn = navMenu.querySelector('.header__close');

if(navMenu && navOpenBtn) {
  navOpenBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
    body.style.overflowY = "scroll";
  })
}

// CHANGE HEADER BG COLOR
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5) {
    document.querySelector("header").classList.add("header__active")
  } else {
    document.querySelector("header").classList.remove("header__active")
  }

  // SCROLL UP BUTTON
  const scrollUpBtn = document.querySelector('.scrollUp-btn');
  if(scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
})

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.images__title, .images__txt, .images__box, .footer__link-container, .footer__socials, .footer__copy-r, .affirmation, .motivation, .snippet, .about, .contact, .privacy, .terms`, { interval:100, origin:'bottom'})

VanillaTilt.init(document.querySelectorAll(".affir__moti-img-container"), {
  max: 25,
  speed: 400,
});
