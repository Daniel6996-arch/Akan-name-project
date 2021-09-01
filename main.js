

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
years()
});

function years(){
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
}