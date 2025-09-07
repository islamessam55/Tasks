$(document).ready(function(){
  $(".carousel-five").owlCarousel(
    {
        items : 5,
        nav : true,
        loop: true,
        navText : ['<i class="fa-solid fa-chevron-left bg-light position-absolute top-50 start-0 translate-middle-y py-3 arr-right"></i>' , '<i class="fa-solid fa-chevron-right arr-left position-absolute top-50 end-0 translate-middle-y bg-light py-3"></i>'],
        responsive:{
        0:{ items:1 },
        320:{ items:2},
        768:{ items:3 },
        992:{ items:5 }
      }
    }
  );
});

$(document).ready(function(){
  $(".carousel-three").owlCarousel({
    items: 3,
    nav : true,
    loop: true,
    margin: 35,
    navText : ['<i class="fa-solid fa-chevron-left bg-light position-absolute top-50 start-0 translate-middle-y py-3 arr-right"></i>' , '<i class="fa-solid fa-chevron-right arr-left position-absolute top-50 end-0 translate-middle-y bg-light py-3"></i>'],
    responsive:{
      0:{ items:1 },
      576:{ items:2},
      992:{ items:3 }
    }
  });
});


$(document).ready(function(){
  $(".my-carousel").owlCarousel({
      items: 8,
      margin: 15,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive:{
        0:{ items:2 },
        320:{ items:3},
        576:{ items:4 },
        768:{ items:5 },
        992:{ items:6 },
        1200:{ items:8 }
      }
    });
});


// Show/hide button on scroll
window.addEventListener('scroll', (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    let topBtn = document.getElementById('topBtn');

    // check screen size
    if (window.innerWidth >= 768) { // only md and larger
        if (scrollTop > 600) {
            topBtn.classList.remove('d-none');
        } else {
            topBtn.classList.add('d-none');
        }
    } else {
        // always hide on small screens
        topBtn.classList.add('d-none');
    }
});

// Scroll to top on click
document.getElementById('topBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // makes it smooth instead of instant
    });
});




  // Create a future "end time" (24 hours from now)
let now = new Date();
let endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);

function updateTimer() {
let d = new Date(); // current time

// Difference in milliseconds
let diff = endTime - d;

if (diff <= 0) {
  document.getElementById("timer").textContent = "00:00:00";
  clearInterval(timerInterval);
  return;
}

// Convert ms → hours, minutes, seconds
let hours = Math.floor(diff / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);

// Format to 2 digits
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");

document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;}

updateTimer(); // run once immediately
let timerInterval = setInterval(updateTimer, 1000);


let contactForm = document.getElementById('contactForm');

// Input validation in real-time
contactForm.addEventListener('input', function (e) {
  const input = e.target;

  if (input.id === "name") {
    nameValidation(input);
  } else if (input.id === "email") {
    emailValidation(input);
  } else if (input.id === "subject") {
    subjectValidation(input);
  } else if (input.id === "message") {
    messageValidation(input);
  }
});

// Submit validation — prevents form from submitting if invalid
contactForm.addEventListener('submit', function (e) {
  let isValid = true;

  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let subjectInput = document.getElementById('subject');
  let messageInput = document.getElementById('message');

  if (!nameValidation(nameInput)) isValid = false;
  if (!emailValidation(emailInput)) isValid = false;
  if (!subjectValidation(subjectInput)) isValid = false;
  if (!messageValidation(messageInput)) isValid = false;

  if (!isValid) {
    e.preventDefault(); // Stop submission if any field is invalid
  }
});

// === Validation Functions ===

function nameValidation(input) {
  const value = input.value.trim();
  if (value.length < 3) {
    handleError(input, "Name must be at least 3 characters.");
    return false;
  }
  handleError(input);
  return true;
}

function emailValidation(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = input.value.trim();
  if (!emailRegex.test(value)) {
    handleError(input, "Please enter a valid email.");
    return false;
  }
  handleError(input);
  return true;
}

function subjectValidation(input) {
  const value = input.value.trim();
  if (value.length < 3) {
    handleError(input, "Subject must be at least 3 characters.");
    return false;
  }
  handleError(input);
  return true;
}

function messageValidation(input) {
  const value = input.value.trim();
  if (value.length < 5) {
    handleError(input, "Message must be at least 5 characters.");
    return false;
  }
  handleError(input);
  return true;
}

// === Error Message Display Handler ===

function handleError(input, message = "") {
  const small = input.nextElementSibling;
  if (small && small.tagName.toLowerCase() === 'small') {
    small.textContent = message;
  }
}
