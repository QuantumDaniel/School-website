const background = document.getElementById('background');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const changeBackground = document.querySelector('.image-animation');
let count = 1;
const images = [
  'Admistrative block.jpg',
  'telescope logo.png',
  'IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
  'IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
  'IMG_20240526_182541_497 (5)@1394047752.jpg',
  'IMG_20240526_180540_199 (1) (1)@333951753.jpg',
];

const items = [
  {
    line1: '<img src = "images/IMG_20240526_182650_260 (1) (2)@-2007831903.jpg" alt= "pre-nursery" loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },
  {
    line1: '<img src = "images/IMG_20240526_180029_262 (1) (1)@1351912044.jpg" alt= "Primary" loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },
  {
    line1: '<img src = "images/IMG_20240526_181319_082 (1)@1716450734.jpg" alt= "Secondary"  loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },
  {
    line1: '<img src = "images/IMG_20240526_182650_260 (1) (2)@-2007831903.jpg" alt= "pre-nursery" loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },
  {
    line1: '<img src = "images/IMG_20240526_180029_262 (1) (1)@1351912044.jpg" alt= "Primary" loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },
  {
    line1: '<img src = "images/IMG_20240526_181319_082 (1)@1716450734.jpg" alt= "Secondary" loading = "lazy">',
    line2: 'Heading',
    text: 'This is an example',
    button: 'Learn More'
  },

]
// dynamically create grid items
let content = '';
items.forEach((item) => {
  content += `
<div class="items">
          <h1 class="grid-display-item1">${item.line1}</h1>
          <div class="grid-display-item2">${item.line2}</div>
          <p class = "text">${item.text}</p>
          <button class="grid-button">
            <a href="#">
              ${item.button}
            </a>
          </button>
        </div>

`;

});
// make head shrink on scroll
document.querySelector('.grid').innerHTML = content;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".head");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// scroll page to top



const topBtn = document.querySelector('.top-button');
const bottomBtn = document.querySelector('.scroll-down');

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

bottomBtn.addEventListener('click', () => {
  window.scrollTo({ top: 2500, behavior: "smooth" });
});
/*
//scroll to bottom
bottomBtn.addEventListener('click', () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
*/

// Animate text on page load
const text = document.getElementById("animatedText");
const letters = text.innerText.split(""); // split into letters
text.innerHTML = "";

letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter === " " ? "\u00A0" : letter; // keep spaces
  text.appendChild(span);

  // reveal each letter with delay
  setTimeout(() => {
    span.classList.add("show");
  }, i * 200); // 200ms delay per letter
});
// Function to change background image and text based on button click
function button1Animation() {
  document.querySelector('.button1').addEventListener('click', () => {
    changeBackground.style.backgroundImage = "url('images/Admistrative block.jpg')";
    document.querySelector('.display-name').innerHTML = "Welcome to Telescope<br> International Schools <br> Jeje Karshi";
    document.querySelector('.view-more').innerHTML = "view more...";
  });
}
button1Animation();
function button2Animation() {
  document.querySelector('.button2').addEventListener('click', () => {
    changeBackground.style.backgroundImage = "url('images/IMG_20240526_180109_087 (1) (1)@249234736.jpg')";
    document.querySelector('.display-name').innerHTML = "Conducive Atmospere <br> for Efficient Learning";
    document.querySelector('.view-more').innerHTML = "Explore more...";
  });
}
button2Animation();

function button3Animation() {
  document.querySelector('.button3').addEventListener('click', () => {
    changeBackground.style.backgroundImage = "url('images/IMG_0535.jpeg')";
    document.querySelector('.display-name').innerHTML = "Join Our <br> Exciting Extracurricular Activities";
    document.querySelector('.view-more').innerHTML = "Join us...";
  });
};
button3Animation();
function button4Animation() {
  document.querySelector('.button4').addEventListener('click', () => {
    changeBackground.style.backgroundImage = "url('images/IMG_20240526_180136_107 (1) (1)@633120083.jpg')";
    document.querySelector('.display-name').innerHTML = "Experienced and <br> Dedicated Staff";
    document.querySelector('.view-more').innerHTML = "Meet our staff...";
  });
};
button4Animation();

// Select all buttons and the container whose background will change
const buttons = document.querySelectorAll('.color-btn');
const container = document.querySelector('.change-background'); // parent container

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // remove active class from all buttons
    buttons.forEach(b => b.classList.remove('active'));

    // add active class to the clicked one
    btn.classList.add('active');

    // change background based on data attribute
    const bg = btn.getAttribute('data-bg');
    container.style.backgroundImage = `url('${bg}')`;
  });
});
/*
    // Optional: Auto cycle through images every 5 seconds
    setInterval(() => {
      count = (count + 1) % images.length;
      changeBackground.style.backgroundImage = `url('images/${images[count]}')`;
    }, 5000);
    */

// Auto cycle through images every 15 seconds
setInterval(() => {
  count = (count + 1);
  if (count === 1) {
    document.querySelector('.button1').click();
  }
  else if (count === 2) {
    document.querySelector('.button2').click();
  }
  else if (count === 3) {
    document.querySelector('.button3').click();
  }
  else if (count === 4) {
    document.querySelector('.button4').click();
  }
  if (count === 4) {
    count = 0;
  }
}, 15000);

const book = document.getElementById('book');
let currentSpread = 0;
const totalPages = 8; // Example: 8 pages total

// Sample random paragraph texts
const sampleTexts = [
  "Technology is reshaping the world in remarkable ways, from artificial intelligence to quantum computing, enabling breakthroughs that were once unimaginable.",
  "Reading is a journey of the mind, allowing us to explore different perspectives, cultures, and possibilities without leaving our chair.",
  "The pursuit of knowledge has always driven humanity forward, inspiring discoveries that changed history and shaped civilizations.",
  "Nature remains a constant reminder of beauty and balance, teaching us lessons of patience, adaptation, and resilience.",
  "Innovation thrives where curiosity meets persistence, and every great invention is born from countless failed attempts.",
  "Stories connect us across time and space, binding generations through the universal language of human experience.",
  "Discipline and consistency are the bridges between goals and achievements, transforming dreams into tangible reality.",
  "Every challenge we face holds within it the seed of growth, waiting to be nurtured with courage and determination."
];

// Create spreads (pairs of left + right pages)
for (let i = 0; i < totalPages / 2; i++) {
  const leftPage = document.createElement('div');
  leftPage.className = 'page left';
  leftPage.textContent = sampleTexts[i * 2 % sampleTexts.length];
  leftPage.style.zIndex = totalPages - (i * 2 + 1);

  const rightPage = document.createElement('div');
  rightPage.className = 'page right';
  rightPage.textContent = sampleTexts[(i * 2 + 1) % sampleTexts.length];
  rightPage.style.zIndex = totalPages - (i * 2 + 2);

  book.appendChild(leftPage);
  book.appendChild(rightPage);
}

const rightPages = document.querySelectorAll('.right');

function nextPage() {
  if (currentSpread < rightPages.length) {
    rightPages[currentSpread].classList.add('flipped');
    currentSpread++;
  }
}

function prevPage() {
  if (currentSpread > 0) {
    currentSpread--;
    rightPages[currentSpread].classList.remove('flipped');
  }
}

// Typewriter effect for mission statements
function typeWriter(element, text, speed = 10) {
  let i = 0;
  element.textContent = "";
  element.style.opacity = 1;
  let interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelectorAll(".mission-list .list");

  // Observer for scroll detection
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lists.forEach((li, index) => {
          setTimeout(() => {
            typeWriter(li, li.textContent, 25);
          }, index * 1500); // delay for each li
        });
        obs.disconnect(); // run only once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector(".mission-content"));
});