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