
localStorage.getItem("studentDetails")
window.onload = function () {
  const user = JSON.parse(localStorage.getItem("studentDetails"));
  if (user) {
    document.querySelector(".name").textContent = user.name;
    document.querySelector(".class").textContent = user.class;
    document.querySelector(".admission-number").textContent = user.admissionNumber;
    document.querySelector(".profile-image").src = user.src;
  } else {
    document.body.innerHTML = "<h2>No user data found. Please log in.</h2>";
  }
};

//getting inner content of menu
let result = document.querySelector('.result');
let title = document.querySelector('.title');
let sections = document.querySelector('.dashboard-sections');
result.addEventListener('click', () => {
  title.innerHTML = " Results"
  sections.innerHTML = `
  <div class = "result-main">
    Welcome!
  </div>
  
  `;

});

//Assignment
let assignment = document.querySelector('.assignment');
assignment.addEventListener('click', () => {
  title.innerHTML = " Assignments"
});

//Attendance

let attendance = document.querySelector('.attendance');
attendance.addEventListener('click', () => {
  title.innerHTML = " Attendance"
});

//Fees
let fees = document.querySelector('.fees');
fees.addEventListener('click', () => {
  title.innerHTML = " Fees"
});

//Notices

let notice = document.querySelector('.notice');
notice.addEventListener('click', () => {
  title.innerHTML = " Notices"
});

//Profile

let profile = document.querySelector('.profile');
profile.addEventListener('click', () => {
  title.innerHTML = " Profile"
});
let modal = document.querySelector('.modal');
document.querySelector('.logout').addEventListener('click',()=>{
  modal.style.display = "block";
  document.querySelector('.no-button').addEventListener('click',()=>{
  modal.style.display = "none";
  });

  document.querySelector('.yes-button').addEventListener('click',()=>{
    modal.style.display = "none";
    window.location.href = "student-login.html";
  window
  });

});


      
        
      
  




