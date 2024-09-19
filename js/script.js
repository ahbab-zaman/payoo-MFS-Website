document.getElementById('login-btn')
     .addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;
    if (inputNumber === '01739255837' && inputPin === '1234') {
       window.location.href = "home.html";
    } else{
        alert("Sorry!! Invalid number and pin")
    }
})