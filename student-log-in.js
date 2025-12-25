let username=document.querySelector('.js-userName').value;
  let password=document.querySelector('.js-password').value;

let student=[{password2:`${password}`,
  username2:`${username}`
}];
let html='';
  student.forEach((student)=>{
  html+=`
  <div>
  <div>userName:${student.username2}</div>
  <div>password:${student.password2}/div>
</div>
`
});

function log(){
  let username=document.querySelector('.js-userName').value;
  let password=document.querySelector('.js-password').value;
  if(username === 'Quantum' && password ==='daniel'){
    document.title= 'student-portal';
    document.body.innerHTML = `
    
    <div class="js-student-portal student-portal">
        <ul>
          <li>Check exam</li>
          <li>Check current school fees</li>
          <li>View personal information</li>
        
      </ul>

  </div>
`;
  }
}
document.querySelector('.js-show').addEventListener('click',()=>{

  const show =document.querySelector('.js-password');
  setTimeout(()=>{
  
    
    if(show.type === 'password'){
      show.type='text';
      document.querySelector('.js-show').innerHTML=`
      
       <img class="password-image" src="images/2767146.png">`;


setTimeout(()=>{
  document.querySelector('.js-show').innerHTML=`<img class="password-image" src="images/download (2).png">`;
},600);
    }
    else if(show.type='text'){
      show.type='password';
      
    }

  },300);

  setTimeout(()=>{
if(show.type==='text'){
  show.type='password';
}
  },1000);

  });
 
document.querySelector('.js-submit').addEventListener('click',()=>{
  
log();

});

document.body.addEventListener('keydown',()=>{
  if(event.key === 'Enter'){
    log();
  }
});

const passwordValue = document.querySelector('.js-password');
const idValue = document.querySelector('.js-userName');

passwordValue.addEventListener('keydown',()=>{
  if(passwordValue.value.length <8 || password.Value === '' ){
    document.querySelector('.check-password').innerHTML = ' String must contain atleast 8 character(s)';
  }
  else if (passwordValue.value.length >=8  ){
    document.querySelector('.check-password').innerHTML = ' ';

  }

});

idValue.addEventListener('keydown',function(){
  if(this.value.length <10 || this.Value === '' ){
    document.querySelector('.check-id').innerHTML = 'Your ID is invalid';
  }
  else if (this.value.length >=10){
    document.querySelector('.check-id').innerHTML = ' ';

  }

});




//checking User ID for login

const details = [
   {
      userName: "daniel",
      password: '123',
      name: 'Abur Orhembaga Daniel',
      class: {
        className:'SSS3',
        classTeacher: 'Mr. Okolo'
      },
      caScore:{
        maths:24,
        english:20,
        physics:15
      },
      department:'Science',
      admissionNumber: 'STD/2023/049',
      src:'images/file_00000000a3406246ba34253b705aaafa.png',
      id: 1,
      exam:{
        maths:50,
        english:49,
        physics:55,
        remark: 'Excellent',
        grade: 'A'
      },
      subjects:['Mathematics','English','Physics']
   },

   {
      userName: "samuel",
      name: 'Stev Samuel',
      class:{
        className:'SSS1',
        classTeacher: 'Mr. Oba'
      },
      department:'Science',
      admissionNumber: 'STD/2023/040',
      password: '125',
      id: 2
   },
/*
   {
      userName: "jen",
      password: '127',
      name: 'Jeniffer Ordue Charles',
      class: 'SS2',
      department:'Art',
      admissionNumber: 'STD/2023/048',
      id: 3
   },
   */

];

details.push(
  {
  userName: "Baby",
      name: 'Anyor benedictha',
      class: {
        className:'JSS3',
        classTeacher: 'Mrs Agatha'
      },
      department:'Commercial',
      admissionNumber: 'STD/2023/045',
      src: 'images/IMG_0535.jpeg',
      password: '129',
      id:details.length +1,
       caScore:{
        maths:15,
        english:20,
        physics:19
      },
      exam:{
        maths:58,
        english:59,
        physics:57,
        remark: 'Excellent',
        grade: 'A'
      }

  }
);
//console.log(details);
details.forEach((det)=>{
console.log(det);
});

/*
details.forEach((det)=>{
document.querySelector('.js-submit').addEventListener('click',()=>{
   console.log(details);
});

});
*/
const userName = document.querySelector('.js-userName');
const password2 = document.querySelector('.js-password');
function loginFunc(){
    const check = details.find(n => n.userName === userName.value);
    localStorage.setItem('studentDetails', JSON.stringify(check));
   if (check.userName === userName.value && check.password === password2.value) {
      console.log(check);
      window.location.href = "student-dashboard.html";
      // Open a new blank page
  //const newWindow = window.open("student-dashboard.html", "_blank");
/*


  // Write your own HTML content into it
  newWindow.document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="student-dashboard.css">
    
</head>
<body>
    <div class="main">
        <div class="section">
         <div>Name: <div class="name">${check.name}</div></div>
         <div>Class: <div class="class">${check.class}</div> </div>
         <div> Admission Number: <div class="admission-number">${check.admissionNumber}</div></div>
        </div>
    </div>

    <script src="studentDashboard.js"></script>
    <script src="student-log-in.js"></script>
</body>
</html>
  `);

  // Wait for it to load, then change innerHTML
  newWindow.document.close(); // finish writing
  */
   }
   else if (userName.value === '' || password2.value === ''){
      alert( 'input User name and Password ');
   }
   else {
      alert('invalid user name or password');
   }
  }

document.querySelector('.js-submit').addEventListener('click', (event) => {
 loginFunc(); 
});

document.addEventListener('keydown',(event)=>{
  if(event.key === "Enter"){
    event.preventDefault(); // stop page reload
    loginFunc();
  }
});
//console.log(user[0]);