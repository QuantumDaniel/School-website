let checkEmail = document.querySelector('.js-email');
let submitButton = document.querySelector('.js-submit');

submitButton.addEventListener('click',()=>{
    document.querySelector('.log-in-container').innerHTML = `
    <div class = "reset"> We sent a verification message to ${checkEmail.value} <br> <p>Check your email address and activate your account within 24h</p></div>`;

});

function check(){
    document.querySelector
    if (checkEmail.value  === ''){
        submitButton.disabled = true;

    }
    else if(checkEmail.value !== ''){
        submitButton.disabled = false;
    }
}
check();