// Nav open close
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

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5) {
    document.querySelector("header").classList.add("header-active")
  } else {
    document.querySelector("header").classList.remove("header-active")
  }
  // console.log(scrollY)

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');
  if(scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }

  // Nav link indicator
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 60;
    let navId = document.querySelector(`.menu-content a[href*= '${section.id}']`);
    // console.log(navId)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink")
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  })
  // console.log(sections)
})

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.image-box, .affirmation, .motivation, .snippet, .about, .contact, .privacy, .terms`, { interval:100, origin:'bottom'})
sr.reveal(`.footer-btns, .footer-socials, .footer-copyRight`, {origin: 'top'})
