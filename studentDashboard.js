
localStorage.getItem("studentDetails");
window.onload = function () {
  const user = JSON.parse(localStorage.getItem("studentDetails"));
  if (user) {
    document.querySelector(".name").textContent = user.name;
    document.querySelector(".class").textContent = user.class.className;
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
const user = JSON.parse(localStorage.getItem("studentDetails"));
result.addEventListener('click', () => {
  title.innerHTML = " Results"
  sections.innerHTML = `
 
  <div class="dashboard">
    <div><div class="logo-container"><img src="images/telescope logo.png" alt="call"></div><h1 class = "result-school-name">TELESCOPE INTERNATIONAL SCHOOLS FIRST TERM RESULT</h1></div>

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
      <div class="info-card"><span>Name</span><strong>${user.name}</strong></div>
      <div class="info-card"><span>Admission No</span><strong>${user.admissionNumber}</strong></div>
      <div class="info-card"><span>Class</span><strong>${user.class.className} ${user.department}</strong></div>
      <div class="info-card"><span>Class Teacher</span><strong>${user.class.classTeacher}</strong></div>
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
        <button class = "download-button">Download PDF</button>
      </div>
    </div>

  </div>


  `;

});

//Assignment
let assignment = document.querySelector('.assignment');
assignment.addEventListener('click', () => {
  title.innerHTML = " Assignments"
  sections.innerHTML = `
  <section class="assignments">

    <!-- Header -->
    <div class="header">
      <h2>My Assignments</h2>
      <p>Track, submit, and review your school assignments</p>
    </div>

    <!-- Overview Cards -->
    <div class="overview">
      <div class="card">
        <h3>8</h3>
        <span>Total</span>
      </div>
      <div class="card pending">
        <h3>3</h3>
        <span>Pending</span>
      </div>
      <div class="card submitted">
        <h3>4</h3>
        <span>Submitted</span>
      </div>
      <div class="card overdue">
        <h3>1</h3>
        <span>Overdue</span>
      </div>
    </div>

    <!-- Assignment List -->
    <div class="assignment-list">

      <div class="assignment">
        <div class="info">
          <h4>Mathematics</h4>
          <p>Algebra Homework</p>
          <small>Due: 25 Sept 2025</small>
        </div>
        <span class="status pending">Pending</span>
        <button>View</button>
      </div>

      <div class="assignment">
        <div class="info">
          <h4>English</h4>
          <p>Essay Writing</p>
          <small>Due: 20 Sept 2025</small>
        </div>
        <span class="status submitted">Submitted</span>
        <button>View</button>
      </div>

      <div class="assignment">
        <div class="info">
          <h4>Physics</h4>
          <p>Motion & Forces</p>
          <small>Due: 18 Sept 2025</small>
        </div>
        <span class="status overdue">Overdue</span>
        <button>View</button>
      </div>

    </div>

  </section>

  `;
});

//Attendance

let attendance = document.querySelector('.attendance');
attendance.addEventListener('click', () => {
  title.innerHTML = " Attendance";
  sections.innerHTML = `
  <section class="attendance">

    <!-- Header -->
    <div class="header">
      <h2>Attendance</h2>
      <p>Monitor your school attendance record</p>
    </div>

    <!-- Summary Cards -->
    <div class="summary">
      <div class="card">
        <h3>120</h3>
        <span>Total Days</span>
      </div>
      <div class="card present">
        <h3>110</h3>
        <span>Present</span>
      </div>
      <div class="card absent">
        <h3>7</h3>
        <span>Absent</span>
      </div>
      <div class="card late">
        <h3>3</h3>
        <span>Late</span>
      </div>
    </div>

    <!-- Attendance Percentage -->
    <div class="percentage-box">
      <h4>Attendance Percentage</h4>
      <div class="progress">
        <div class="progress-bar">92%</div>
      </div>
      <p class="remark good">Good Standing</p>
    </div>

    <!-- Attendance Records -->
    <div class="records">
      <h3>Daily Records</h3>

      <div class="record present">
        <span>18 Sept 2025</span>
        <span>Present</span>
      </div>

      <div class="record absent">
        <span>17 Sept 2025</span>
        <span>Absent</span>
      </div>

      <div class="record late">
        <span>16 Sept 2025</span>
        <span>Late</span>
      </div>

      <div class="record present">
        <span>15 Sept 2025</span>
        <span>Present</span>
      </div>

    </div>

  </section>

  `
});

//Fees
let fees = document.querySelector('.fees');
fees.addEventListener('click', () => {
  title.innerHTML = " Fees";
  sections.innerHTML = `
  <section class="fees">

    <!-- Header -->
    <div class="header">
      <h2>School Fees</h2>
      <p>View your payment status and fee breakdown</p>
    </div>

    <!-- Fee Summary -->
    <div class="summary">
      <div class="card total">
        <h3>₦150,000</h3>
        <span>Total Fees</span>
      </div>
      <div class="card paid">
        <h3>₦100,000</h3>
        <span>Paid</span>
      </div>
      <div class="card balance">
        <h3>₦50,000</h3>
        <span>Outstanding</span>
      </div>
    </div>

    <!-- Payment Progress -->
    <div class="progress-box">
      <h4>Payment Progress</h4>
      <div class="progress">
        <div class="progress-bar">67%</div>
      </div>
      <p class="remark warning">Partially Paid</p>
    </div>

    <!-- Fee Breakdown -->
    <div class="breakdown">
      <h3>Fee Breakdown</h3>

      <div class="item">
        <span>Tuition Fee</span>
        <span>₦80,000</span>
      </div>

      <div class="item">
        <span>Development Fee</span>
        <span>₦30,000</span>
      </div>

      <div class="item">
        <span>Laboratory Fee</span>
        <span>₦20,000</span>
      </div>

      <div class="item">
        <span>Sports & Activities</span>
        <span>₦20,000</span>
      </div>
    </div>

    <!-- Payment History -->
    <div class="history">
      <h3>Payment History</h3>

      <div class="payment">
        <span>10 Sept 2025</span>
        <span>₦50,000</span>
        <span class="status success">Successful</span>
      </div>

      <div class="payment">
        <span>15 Aug 2025</span>
        <span>₦50,000</span>
        <span class="status success">Successful</span>
      </div>

    </div>

  </section>

  `
});

//Notices

let notice = document.querySelector('.notice');
notice.addEventListener('click', () => {
  title.innerHTML = " Notices";
  sections.innerHTML = `
  <section class="notices">

    <!-- Header -->
    <div class="header">
      <h2>School Notices</h2>
      <p>Important announcements and updates</p>
    </div>

    <!-- Notice Categories -->
    <div class="categories">
      <button class="active">All</button>
      <button>Academic</button>
      <button>Exams</button>
      <button>Events</button>
      <button>General</button>
    </div>

    <!-- Notice List -->
    <div class="notice-list">

      <div class="notice important">
        <div class="notice-header">
          <h4>Mid-Term Test Schedule</h4>
          <span class="tag exam">Exam</span>
        </div>
        <p>
          The mid-term test will begin on Monday, 23rd September 2025.
          Students are advised to prepare adequately.
        </p>
        <small>Posted: 18 Sept 2025</small>
      </div>

      <div class="notice">
        <div class="notice-header">
          <h4>Inter-House Sports</h4>
          <span class="tag event">Event</span>
        </div>
        <p>
          Inter-house sports competition will hold on Friday.
          All students are expected to participate.
        </p>
        <small>Posted: 15 Sept 2025</small>
      </div>

      <div class="notice">
        <div class="notice-header">
          <h4>School Fees Reminder</h4>
          <span class="tag general">General</span>
        </div>
        <p>
          Parents are reminded to complete outstanding school fees
          before the end of the term.
        </p>
        <small>Posted: 12 Sept 2025</small>
      </div>

    </div>

  </section>
  
  `
});

//Profile

let profile = document.querySelector('.profile');
profile.addEventListener('click', () => {
  title.innerHTML = " Profile";
  sections.innerHTML = `
  <section class="profile">

    <!-- Header -->
    <div class="header">
      <h2>Student Profile</h2>
      <p>Personal information and biodata</p>
    </div>

    <!-- Profile Card -->
    <div class="profile-card">
      <div class="avatar">
        <img src="avatar.png" alt="Student Photo">
      </div>

      <div class="basic-info">
        <h3>John Daniel</h3>
        <p>Student ID: STD-2025-014</p>
        <span class="class">SS2 – Science</span>
      </div>
    </div>

    <!-- Biodata Section -->
    <div class="biodata">

      <h3>Biodata</h3>

      <div class="data-grid">
        <div class="item">
          <span>Gender</span>
          <p>Male</p>
        </div>

        <div class="item">
          <span>Date of Birth</span>
          <p>15 March 2009</p>
        </div>

        <div class="item">
          <span>Nationality</span>
          <p>Nigerian</p>
        </div>

        <div class="item">
          <span>State of Origin</span>
          <p>Benue State</p>
        </div>

        <div class="item">
          <span>Religion</span>
          <p>Christianity</p>
        </div>

        <div class="item">
          <span>Blood Group</span>
          <p>O+</p>
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="contact">

      <h3>Contact Information</h3>

      <div class="data-grid">
        <div class="item">
          <span>Home Address</span>
          <p>Makurdi, Benue State</p>
        </div>

        <div class="item">
          <span>Parent / Guardian</span>
          <p>Mr. Daniel Abur</p>
        </div>

        <div class="item">
          <span>Phone Number</span>
          <p>0803 000 0000</p>
        </div>

        <div class="item">
          <span>Email</span>
          <p>parent@email.com</p>
        </div>
      </div>
    </div>

  </section>

  `
});
let modal = document.querySelector('.modal');
let sideBar = document.querySelector('.sidebar');
let mainContent = document.querySelector('.main-content');
document.querySelector('.logout').addEventListener('click',()=>{
  modal.style.display = "block";
  sideBar.classList.add('dim-target');
  mainContent.classList.add('dim-target');
  document.querySelector('.no-button').addEventListener('click',()=>{
  modal.style.display = "none";
  sideBar.classList.remove('dim-target');
  mainContent.classList.remove('dim-target');
  });

  document.querySelector('.yes-button').addEventListener('click',()=>{
    modal.style.display = "none";
    window.location.href = "student-login.html";
  
  });

});


      
       
      user.forEach((user)=>{
            console.log(user);
      });
      
  

