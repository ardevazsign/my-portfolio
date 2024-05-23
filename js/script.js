const certHtml = document.querySelector('.html');
const certCss = document.querySelector('.css');
const certJavascript = document.querySelector('.javascript');
const certReact = document.querySelector('.react');

// const closeCert = document.getElementById('close-cert');

// closeCert.addEventListener('click', () =>{
//     certHtml.classList.remove('active');
//     certCss.classList.remove('active');
//     certJavascript.classList.remove('active');
//     certReact.classList.remove('active');

// });



document.querySelector('#html').onclick = () =>{
     certHtml.classList.toggle('active');
};
document.querySelector('#css').onclick = () =>{
     certCss.classList.toggle('active');
};
document.querySelector('#javascript').onclick = () =>{
     certJavascript.classList.toggle('active');
};
document.querySelector('#react').onclick = () =>{
     certReact.classList.toggle('active');
};

window.onscroll = () => {

    certHtml.classList.remove('active');
    certCss.classList.remove('active');
    certJavascript.classList.remove('active');
    certReact.classList.remove('active');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navbarLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav_menu_list .nav_list .nav-link[href*=' + id + ']').classList.add('active');    
            });
        };
    });
};
























function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");

  if (menuBth.className === "nav-menu") {
      menuBth.className += "responsive";
  } else {
    menuBth.className = "nav-menu";
  }
}

// dark mode

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle -switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
})
  
// ---- typing effect

var typingEffect = new Typed(".typedText", {
  string: ["Designer", "Coder", "Developer"],
  
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
})

// ----scroll animation

const sr = scrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 1000 });
sr.reveal(".text-info", { delay: 200 });





let sections = document.querySelectorAll('.section');

let navbarLink = document.querySelectorAll('.nav_menu_list .nav_list .nav-link');


// for certification




 