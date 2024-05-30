//  nav function
let sections = document.querySelectorAll('.section');
let navbarLink = document.querySelectorAll('.nav-menu .nav_menu_list .nav_list .nav-link');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navbarLink.forEach(links => {
              links.classList.remove('active');
              document.querySelector('.nav-menu .nav_menu_list .nav_list .nav-link[href*=' + id + ']').classList.add('active');    
          });
      };
  });
};

//  dark and light mode



const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
})






//  lead to my messenger
const messageOwnerBtn = document.getElementById('messageOwner');

messageOwnerBtn.addEventListener('click', () => {
  window.open('https://m.me/owen.saavedra.3', '_blank');
  // window.location.href = 'https://m.me/owen.saavedra.3';
});

// Send Message Inquery To Whatsapp

function sendwhatsapp(){
  var phonenumber = "+639167522487";

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var url = "https://wa.me/" + phonenumber + "?text="
  +"*Name :* " +name+"%0a"
  +"*Email :* " +email+"%0a"
  +"*Subject :* " +subject+"%0a"
  +"*Message :* " +message+"%0a%0a"
  +"This is message from Inquery";

  window.open(url, '_blank').focus();

}

document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        document.getElementById('myForm').reset();
});
 
let thankYou = document.getElementById("thanks-content");

function openThanks() {
  thankYou.classList.add("open-thanks");
}
function closeThanks() {
  thankYou.classList.remove("open-thanks");
}