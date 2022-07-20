// NAV OPEN CLOSE
const body = document.querySelector('body'),
  navMenu = body.querySelector('.menu-content'),
  navOpenBtn = body.querySelector('.navOpen-btn'),
  navCloseBtn = navMenu.querySelector('.navClose-btn');

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
    document.querySelector("header").classList.add("header-active")
  } else {
    document.querySelector("header").classList.remove("header-active")
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

sr.reveal(`.image-box, .footer__link-container, .footer__socials, .footer__copy-r, .affirmation, .motivation, .snippet, .about, .contact, .privacy, .terms`, { interval:100, origin:'bottom'})
