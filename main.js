const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleName = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa', 'Afua', 'Ama'];

const randomNumber = getRandomNumber();
function getRandomNumber(){
    return Math.floor(Math.random() * 7)
};
//maleName
function maleReply(){
    return maleName[randomNumber];
};
//femaleName
function femaleReply(){
    return femaleName[randomNumber];
};
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
 console.log(femaleName[randomNumber]);

});

var years = function(){
    var CC = document.getElementById('year').value.slice(0,2);
    var YY = document.getElementById('year').value.slice(2,4);
    var MM = document.getElementById('month').value;
    var DD = document.getElementById('day').value; 
    if(DD>31 || DD<=0 ){
        alert("Invalid date")
    }
    if(MM<=0 || MM>12){
        alert("Invalid month")
    }
  return  Math.floor((((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM+1)/10)+DD)%7);
   
};


 