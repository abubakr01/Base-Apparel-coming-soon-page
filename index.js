var emailCheckBtn = document.querySelector('button')
var errorIcon = document.querySelector('.error-div')
var inputValue = document.querySelector('input')

emailCheckBtn.addEventListener('click', function(e){
    e.preventDefault();
    emailValidity()
})

function emailValidity(){
    if( !emailTest(inputValue.value.trim())){
        wrngEmail()
    }
    else{
        coretEmail()
    }

}

function coretEmail(){
    errorIcon.style.visibility = 'hidden'
    input.style.border = 'solid 1px black'
}
function wrngEmail(){
    errorIcon.style.visibility = 'visible'
    emailCheckBtn.style.backgroundColor = 'hsl(0, 93%, 68%)'
    emailCheckBtn.style.height ='44px'
}

function emailTest(email){
 return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
