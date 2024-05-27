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



let sections = document.querySelectorAll('.section');

let navbarLink = document.querySelectorAll('.nav_menu_list .nav_list .nav-link');






// const certHtml = document.querySelector('.html');
// const certCss = document.querySelector('.css');
// const certJavascript = document.querySelector('.javascript');
// const certReact = document.querySelector('.react');

// let certHolder = document.getElementById('.cert-holder')

// let contentForm = document.querySelectorAll('.certificate');

// // const scrollToAboutBtn = document.querySelectorAll('.close-cert');

// const aboutSection = document.getElementById('about');

// document.querySelector('.close-cert').onclick = () => {
//     certHtml.classList.remove('active');
//     certCss.classList.remove('active');
//     certJavascript.classList.remove('active');
//   certReact.classList.remove('active');
  

// };




// document.querySelector('#html').onclick = () =>{
//   certHtml.classList.toggle('active');

// };
// document.querySelector('#css').onclick = () =>{
//      certCss.classList.toggle('active');
// };
// document.querySelector('#javascript').onclick = () =>{
//      certJavascript.classList.toggle('active');
// };
// document.querySelector('#react').onclick = () =>{
//      certReact.classList.toggle('active');
// };

// window.onscroll = () => {
  
   
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navbarLink.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.nav_menu_list .nav_list .nav-link[href*=' + id + ']').classList.add('active');    
//             });
//         };
//     });
// };


// function myMenuFunction() {
//   var menuBth = document.getElementById("myNavMenu");

//   if (menuBth.className === "nav-menu") {
//       menuBth.className += "responsive";
//   } else {
//     menuBth.className = "nav-menu";
//   }
// }

// // dark mode

// const body = document.querySelector("body"),
//   toggleSwitch = document.getElementById("toggle -switch");

// toggleSwitch.addEventListener("click", () => {
//   body.classList.toggle("dark");
// })
  
// // ---- typing effect

// var typingEffect = new Typed(".typedText", {
//   string: ["Designer", "Coder", "Developer"],
  
//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 2000,
// })

// // ----scroll animation

// const sr = scrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(".featured-name", { delay: 1000 });
// sr.reveal(".text-info", { delay: 200 });





// let sections = document.querySelectorAll('.section');

// let navbarLink = document.querySelectorAll('.nav_menu_list .nav_list .nav-link');







 