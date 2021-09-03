var maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

var colors  = ['red', 'green', 'yellow'];

var button = document.getElementById('btn');

button.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];

console.log(maleName[randomNumber]);
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
