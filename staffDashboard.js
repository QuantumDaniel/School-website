const result = document.querySelector('.result');
const assignment = document.querySelector('.assignment');
const attendance = document.querySelector('.attendance');
const profile = document.querySelector('.profile');
const main = document.querySelector('.main');
const home = document.querySelector('.home');

//Home

home.addEventListener('click',()=>{
   main.innerHTML = `
   <div id="staff-home">

    <h2>Welcome, John 👋</h2>
    <p class="subtitle">Here’s an overview of your activities today.</p>

    <!-- Summary Cards -->
    <div class="stats-grid">

        <div class="stat-card">
            <h3>Classes</h3>
            <p>3</p>
        </div>

        <div class="stat-card">
            <h3>Subjects</h3>
            <p>5</p>
        </div>

        <div class="stat-card">
            <h3>Assignments Posted</h3>
            <p>12</p>
        </div>

        <div class="stat-card">
            <h3>Attendance Taken</h3>
            <p>8</p>
        </div>

    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
        <h3>Quick Actions</h3>

        <div class="actions">
            <button>Upload Results</button>
            <button>Post Assignment</button>
            <button>Mark Attendance</button>
        </div>
    </div>

    <!-- Recent Activities -->
    <div class="recent-activities">
        <h3>Recent Activities</h3>

        <ul>
            <li>✔ Attendance marked for JSS 2 – 5 Feb</li>
            <li>✔ Assignment posted for SS 1 Physics</li>
            <li>✔ Results uploaded for JSS 1 Mathematics</li>
        </ul>
    </div>

</div>

   `;
});
//result
result.addEventListener('click',()=>{
   main.innerHTML = `
   <div id="result-view">

    <h2>Upload Student Result</h2>
    <p>All results entered here will be available for students to view on their dashboard.</p>

    <!-- Step 1: Select Class -->
    <div class="step">
        <label>Select Class</label>
        <select id="result-class">
            <option value="">--Select Class--</option>
            <option value="jss1">JSS 1</option>
            <option value="jss2">JSS 2</option>
            <option value="ss1">SS 1</option>
        </select>
    </div>

    <!-- Step 2: Select Subject -->
    <div class="step">
        <label>Select Subject</label>
        <select id="result-subject">
            <option value="">--Select Subject--</option>
            <option value="math">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
        </select>
    </div>

    <!-- Step 3: Select Student -->
    <div class="step">
        <label>Select Student</label>
        <select id="result-student">
            <option value="">--Select Student--</option>
            <option value="daniel">Daniel Abur</option>
            <option value="john">John Doe</option>
        </select>
    </div>

    <!-- Step 4: Enter Scores -->
    <form class="grid">
        <input type="number" placeholder="Assessment / CA (30)" id="ca-score">
        <input type="number" placeholder="Exam Score (70)" id="exam-score">

        <input type="text" placeholder="Total Score (Auto)" id="total-score" readonly>
        <input type="text" placeholder="Grade (Auto)" id="grade" readonly>
        <input type="text" placeholder="Remark (Auto)" id="remark" readonly>

        <button type="button" id="save-result">Save Result</button>
    </form>

    <small>* Total, Grade, and Remark are automatically calculated and stored for student access.</small>

</div>

   `;
});


//asssginment
assignment.addEventListener('click',()=>{
  main.innerHTML = ` 
  <div id="assignment-view">

    <h2>Post Assignment</h2>
    <p>Assignments posted here will be visible to students on their dashboard.</p>

    <form class="assignment-form">

        <!-- Step 1: Select Class -->
        <div class="step">
            <label>Select Class</label>
            <select id="assignment-class">
                <option value="">--Select Class--</option>
                <option value="jss1">JSS 1</option>
                <option value="jss2">JSS 2</option>
                <option value="ss1">SS 1</option>
            </select>
        </div>

        <!-- Step 2: Select Subject -->
        <div class="step">
            <label>Select Subject</label>
            <select id="assignment-subject">
                <option value="">--Select Subject--</option>
                <option value="math">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
            </select>
        </div>

        <!-- Step 3: Deadline -->
        <div class="step">
            <label>Deadline</label>
            <input type="date" id="assignment-deadline">
        </div>

        <!-- Step 4: Assignment Instructions -->
        <div class="step">
            <label>Assignment Instructions</label>
            <textarea id="assignment-instructions" placeholder="Enter assignment instructions here..."></textarea>
        </div>

        <!-- Step 5: Total Marks -->
        <div class="step">
            <label>Total Marks</label>
            <input type="number" id="assignment-marks" placeholder="e.g., 100">
        </div>

        <!-- Submit -->
        <button type="button" id="post-assignment">Post Assignment</button>

    </form>

    <small>* Students will see the assignment immediately after posting.</small>

</div>

  
  `;
});

//attendance

attendance.addEventListener('click',()=>{
   main.innerHTML = `
  <div id="attendance-view">

    <h2>Mark Attendance</h2>
    <p>Select a class and date to mark student attendance.</p>

    <!-- Step 1: Select Class -->
    <div class="step">
        <label>Select Class</label>
        <select id="attendance-class">
            <option value="">--Select Class--</option>
            <option value="jss1">JSS 1</option>
            <option value="jss2">JSS 2</option>
            <option value="ss1">SS 1</option>
        </select>
    </div>

    <!-- Step 2: Select Date -->
    <div class="step">
        <label>Select Date</label>
        <input type="date" id="attendance-date">
    </div>

    <!-- Step 3: Student List -->
    <ul id="student-list" class="student-list-ul">
        <!-- Example student items -->
        <li class="student-item">
            <span class="student-name">Daniel Abur</span>
            <select class="attendance-status">
                <option value="present">Present</option>
                <option value="absent">Absent</option>
            </select>
        </li>

        <li class="student-item">
            <span class="student-name">John Doe</span>
            <select class="attendance-status">
                <option value="present">Present</option>
                <option value="absent">Absent</option>
            </select>
        </li>
        <!-- More students dynamically added here -->
    </ul>

    <button id="save-attendance">Save Attendance</button>
    <small>* Attendance percentage will be calculated for students based on records per date.</small>

</div>



  
  `;
});




profile.addEventListener('click',()=>{
   main.innerHTML = `
   <div id="profile-view">

    <h2>Staff Profile</h2>
    <p>Your personal and professional information.</p>

    <div class="profile-header">
        <img src="images/IMG_0535.jpeg" alt="students" class="profile-img">

        <div class="profile-basic">
            <h3>John Doe</h3>
            <span>Subject Teacher</span>
        </div>
    </div>

    <div class="profile-card">

        <div class="profile-row">
            <span class="label">Staff ID</span>
            <span class="value">STF-1023</span>
        </div>

        <div class="profile-row">
            <span class="label">Email</span>
            <span class="value">john.doe@school.com</span>
        </div>

        <div class="profile-row">
            <span class="label">Department</span>
            <span class="value">Science</span>
        </div>

        <div class="profile-row">
            <span class="label">Assigned Classes</span>
            <span class="value">JSS 1, SS 1</span>
        </div>

        <div class="profile-row">
            <span class="label">Subjects</span>
            <span class="value">Mathematics, Physics</span>
        </div>

    </div>

    <button class="edit-profile-btn">Edit Profile</button>

</div>

   `;
});

