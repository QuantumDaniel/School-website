
let menu = document.querySelector('.side-bar');
let display = document.querySelector('.side-bar-content');
let side = document.querySelector('.menu-content');
function handleResize() {
let isLargeScreen = window.innerWidth > 1000; 
    if (isLargeScreen) {
  side.style.display = 'none';
} 
else{
    side.style.display = 'none';
}
}
handleResize();
menu.addEventListener('click', () => {
    handleResize();
    
    if (menu.innerHTML === 'Menu') {

        display.style.opacity = 1;
        menu.innerHTML = 'X';
        side.style.display = 'block';
    }
    else if (menu.innerHTML === 'X') {
        display.style.opacity = 0;
        menu.innerHTML = 'Menu';
    }
});


/*
const mediaQuery = window.matchMedia("(max-width: 1000px)");

function checkScreen(e) {
  if (e.matches) {
    alert("Screen is 1000px or smaller.");
  } else {
    alert("Screen is larger than 768px.");
  }
}

mediaQuery.addEventListener("change", checkScreen);
checkScreen(mediaQuery); // run on load

*/

