
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
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Student Dashboard - Results</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="dashboard">
    <h1>Student Result Dashboard</h1>

    <!-- Selectors -->
    <div class="selectors">
      <select>
        <option>2024 / 2025 Session</option>
      </select>
      <select>
        <option>First Term</option>
        <option>Second Term</option>
        <option>Third Term</option>
      </select>
    </div>

    <!-- Student Info -->
    <div class="student-info">
      <div class="info-card"><span>Name</span><strong>John Doe</strong></div>
      <div class="info-card"><span>Admission No</span><strong>STD/2023/045</strong></div>
      <div class="info-card"><span>Class</span><strong>SS 1 Science</strong></div>
      <div class="info-card"><span>Class Teacher</span><strong>Mrs. A. Daniel</strong></div>
    </div>

    <!-- Result Table -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>CA</th>
            <th>Exam</th>
            <th>Total</th>
            <th>Grade</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>18</td>
            <td>62</td>
            <td>80</td>
            <td>A</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>English Language</td>
            <td>15</td>
            <td>55</td>
            <td>70</td>
            <td>B</td>
            <td>Very Good</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>17</td>
            <td>50</td>
            <td>67</td>
            <td>B</td>
            <td>Good</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Summary -->
    <div class="summary">
      <div class="summary-card"><strong>9</strong>Total Subjects</div>
      <div class="summary-card"><strong>72%</strong>Average Score</div>
      <div class="summary-card"><strong>5th</strong>Position</div>
      <div class="summary-card"><strong>Promoted</strong>Status</div>
    </div>

    <!-- Traits -->
    <div class="traits">
      <div>
        <h3>Affective Domain</h3>
        <ul>
          <li>Punctuality: Very Good</li>
          <li>Attendance: Excellent</li>
          <li>Neatness: Good</li>
          <li>Honesty: Very Good</li>
        </ul>
      </div>
      <div>
        <h3>Psychomotor Domain</h3>
        <ul>
          <li>Handwriting: Good</li>
          <li>Sports: Very Good</li>
          <li>Practical Skills: Excellent</li>
        </ul>
      </div>
    </div>

    <!-- Remarks -->
    <div class="remarks">
      <p><strong>Class Teacher's Remark:</strong> John is hardworking and consistent.</p>
      <p><strong>Principal's Remark:</strong> Keep up the good performance.</p>
      <p><strong>Next Term Begins:</strong> 8th January 2025</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="status">Result Status: Approved</div>
      <div class="actions">
        <button>Print Result</button>
        <button>Download PDF</button>
      </div>
    </div>

  </div>

</body>
</html>

  
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


      
        
      
  




