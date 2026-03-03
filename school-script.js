// ======= Shared DOM Elements (with safety checks) =======
const background = document.getElementById('background');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const changeBackground = document.querySelector('.image-animation');

// ======= Grid Items (home page only) =======
const items = [
  {
    line1: '<img class="program-image" src="images/STEP-768x385.jpg" alt="pre-nursery" loading="lazy">',
    line2: 'Science and Technology',
    text: 'Focus: Physics, Chemistry, Biology, Computer Science and other STEM Subjects to prepare students for further study or technology careers',
    button: 'Learn More'
  },
  {
    line1: '<img class="program-image" src="images/STEP-768x385.jpg" alt="Primary" loading="lazy">',
    line2: 'Art and Humanities',
    text: 'Focus: Literature, History, Geography, Language, Creative and Performing Arts-for students with strengths in writing, culture, expression',
    button: 'Learn More'
  },
  {
    line1: '<img class="program-image" src="images/STEP-768x385.jpg" alt="Secondary" loading="lazy">',
    line2: 'Business and Entrepreneurship',
    text: 'Focus: Economics, Business Studies, Entrepreneurship-equiping learners for self-employment or business careers worldwide',
    button: 'Learn More'
  },
  {
    line1: '<img class="program-image" src="images/202302-NER-41-scr.webp" alt="pre-nursery" loading="lazy">',
    line2: 'Technical and Vocational',
    text: 'Focus: Technical subjects (e.g., Technical Drawing, Wood/Metalwork, Building Construction) and vocational skills like agriculture or home economics.',
    button: 'Learn More'
  },
  {
    line1: '<img class="program-image" src="images/20251028_215457.jpg" alt="Primary" loading="lazy">',
    line2: 'ICT and Digital Innovation',
    text: 'Focus: Digital literacy, programming, robotics, data science, cybersecurity-acknowledging modern curriculum expansions into these areas',
    button: 'Learn More'
  },
  {
    line1: '<img class="program-image" src="images/20251028_215457.jpg" alt="Secondary" loading="lazy">',
    line2: 'Health and Life Science',
    text: 'Focus: Biology, Human Anatomy/Physiology, Public Health, Biomedical Sciences-preparing for health-related tertiary studies and careers.',
    button: 'Learn More'
  },
];

// ======= Populate grid if it exists =======
const grid = document.querySelector('.grid');
if (grid) {
  let content = '';
  items.forEach(item => {
    content += `
      <div class="items">
        <h1 class="grid-display-item1">${item.line1}</h1>
        <div class="grid-display-item2">${item.line2}</div>
        <button class="grid-button"><a href="#">${item.button}</a></button>
      </div>
    `;
  });
  grid.innerHTML = content;
}

// ======= Sidebar & Navbar =======
const sideBar = document.querySelector(".menu-content");
const sideMenu = document.querySelector(".side-menu-div");

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".head");
  if (navbar && sideBar) {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
      sideBar.style.top = "73px";
    } else {
      navbar.classList.remove("shrink");
      sideBar.style.top = "78px";
    }
  }
});

function handleSidebarVisibility() {
  if (!sideBar) return;
  if (window.innerWidth >= 1000) {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "block";
  }
}
handleSidebarVisibility();
window.addEventListener("resize", handleSidebarVisibility);

// ======= Scroll Buttons (safe) =======
const topBtn = document.querySelector('.top-button');
if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: "smooth" }));

const mission = document.querySelector('.scroll-down');
if (mission) mission.addEventListener('click', () => window.scrollTo({ top: 2450, behavior: "smooth" }));

const bottomBtn2 = document.querySelector('.scroll-down2');
if (bottomBtn2) bottomBtn2.addEventListener('click', () => window.scrollTo({ top: 2500, behavior: "smooth" }));

const programme = document.querySelector('.programme');
if (programme) programme.addEventListener('click', () => window.scrollTo({ top: 650, behavior: "smooth" }));

// ======= Animated Text =======
const text = document.getElementById("animatedText");
if (text) {
  const letters = text.innerText.split("");
  text.innerHTML = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    text.appendChild(span);
    setTimeout(() => span.classList.add("show"), i * 200);
  });
}

// ======= Background Buttons (safe) =======
function setupBackgroundButton(btnClass, bgImage, displayText, viewText) {
  const btn = document.querySelector(btnClass);
  if (!btn || !changeBackground) return;

  btn.addEventListener('click', () => {
    changeBackground.style.backgroundImage = `url('${bgImage}')`;
    const displayName = document.querySelector('.display-name');
    const viewMore = document.querySelector('.view-more');
    if (displayName) displayName.innerHTML = displayText;
    if (viewMore) viewMore.innerHTML = viewText;
  });
}

setupBackgroundButton('.button1', 'images/Admistrative block.jpg', 'Welcome to Quantum<br> International Schools <br> ivory Karshi', 'View 👉..');
setupBackgroundButton('.button2', 'images/IMG_20240526_180109_087 (1) (1)@249234736.jpg', 'Conducive Atmospere <br> for Efficient Learning', 'Explore...');
setupBackgroundButton('.button3', 'images/IMG_0535.jpeg', 'Join Our <br> Exciting Extracurricular Activities', 'Join us...');
setupBackgroundButton('.button4', 'images/IMG_20240526_180136_107 (1) (1)@633120083.jpg', 'Experienced and <br> Dedicated Staff', 'View 👉...');

// ======= Sidebar Tooltips =======
const admission = document.querySelectorAll('.admission-side');
const admissionSideMain = document.querySelectorAll('.admission-side-main');
admissionSideMain.forEach((li, index) => {
  li.addEventListener('click', () => {
    const contents = admission[index];
    if (!contents) return;
    contents.style.display = contents.style.display === 'block' ? 'none' : 'block';
  });
});

// ======= Change Background Buttons (safe) =======
const buttons = document.querySelectorAll('.color-btn');
const container = document.querySelector('.change-background');
if (buttons.length && container) {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const bg = btn.getAttribute('data-bg');
      container.style.backgroundImage = `url('${bg}')`;
    });
  });
}

// ======= Auto Page Cycling (safe) =======
if (document.querySelector('.button1')) {
  let count = 0;
  setInterval(() => {
    count++;
    if (count === 1 && document.querySelector('.button1')) document.querySelector('.button1').click();
    if (count === 2 && document.querySelector('.button2')) document.querySelector('.button2').click();
    if (count === 3 && document.querySelector('.button3')) document.querySelector('.button3').click();
    if (count === 4 && document.querySelector('.button4')) document.querySelector('.button4').click();
    if (count === 4) count = 0;
  }, 15000);
}

// ======= Book / Page Flip (safe) =======
const book = document.getElementById('book');
if (book) {
  const totalPages = 8;
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

  let currentSpread = 0;
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
  window.nextPage = function () {
    if (currentSpread < rightPages.length) {
      rightPages[currentSpread].classList.add('flipped');
      currentSpread++;
    }
  };
  window.prevPage = function () {
    if (currentSpread > 0) {
      currentSpread--;
      rightPages[currentSpread].classList.remove('flipped');
    }
  };
}

// ======= Mission Statements Typewriter (safe) =======
document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelectorAll(".mission-list .list");
  const missionContent = document.querySelector(".mission-content");
  if (lists.length && missionContent) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lists.forEach((li, index) => {
            setTimeout(() => {
              typeWriter(li, li.textContent, 25);
            }, index * 1500);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(missionContent);
  }
});

// ======= Typewriter function =======
function typeWriter(element, text, speed = 10) {
  element.textContent = "";
  element.style.opacity = 1;
  let i = 0;
  let interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}
