// Revised May 27, 2024

const popup = document.getElementById('popup');
const popupServices = document.getElementById('popup-services');
const popupOthers = document.getElementById('popup-others');

const certHtml = document.getElementById('html');
const certCss = document.getElementById('css');
const certJavascript = document.getElementById('javascript');
const certReact = document.getElementById('react');

document.getElementById('trigger1').addEventListener('click', () => {
       popup.style.display = 'block';
});
document.getElementById('trigger2').addEventListener('click', () => {
       popupServices.style.display = 'block';
});
document.getElementById('trigger3').addEventListener('click', () => {
       popupOthers.style.display = 'block';
});
document.getElementById('triggerA').addEventListener('click', () => {
       certHtml.style.display = 'block';
});
document.getElementById('triggerB').addEventListener('click', () => {
       certCss.style.display = 'block';
});
document.getElementById('triggerC').addEventListener('click', () => {
       certJavascript.style.display = 'block';
});
document.getElementById('triggerD').addEventListener('click', () => {
       certReact.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if(event.target !== document.getElementById('trigger1')) {
    popup.style.display = 'none';
  }
  if (event.target !== document.getElementById('trigger2')) {
     popupServices.style.display = 'none';
  }
  if (event.target !== document.getElementById('trigger3')) {
    popupOthers.style.display = 'none';
  }
  if (event.target !== document.getElementById('triggerA')) {
    certHtml.style.display = 'none';
  }
  if (event.target !== document.getElementById('triggerB')) {
    certCss.style.display = 'none';
  }
  if (event.target !== document.getElementById('triggerC')) {
    certJavascript.style.display = 'none';
  }
  if (event.target !== document.getElementById('triggerD')) {
    certReact.style.display = 'none';
  }
});

// ---- typing effect

var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],
  
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
})

// // ----scroll animation

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
  original: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
})

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
  original: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
})

srRight.reveal(".skill", { delay: 100});
srRight.reveal(".skill-box", { delay: 100});




// var icon = document.getElementById('icon');

// icon.onclick = function(){
//   document.body.classList.toggle("dark-theme");
//   if(document.body.classList.contains("dark-them")){
//     icon.src = "image"
//   }
// }

// active link original
// const sections = document.querySelectorAll(".section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,

//        sectionTop = current.offsetTop - 50,
//        sectionId = current.getAttribute("id");

//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//       .querySelector(".nav-menu a[href*=" + sectionId + "]")
//       .classList.remove("active-link");
//     } 
      
//   });
// }

// window.addEventListener("scroll", scrollActive);











 