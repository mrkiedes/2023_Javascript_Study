// Gain Access to form elements
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    alert("It is hooked up!");
}