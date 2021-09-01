//declare variables
var year = document.getElementById('year').value;
var month = document.getElementById('month').value;
var day = document.getElementById('day').value; 
var btn = document.getElementById('btn');

//logic
/** var year = 1978;
var yr = year.toString()
var y = yr.slice(0,2)
var CC = parseInt(y);
console.log(CC); */

//deriving value of MM
var MM = parseInt(month);
//deriving value of DD
var DD = parseInt(day);

btn.addEventListener('click', function(){
years()
});

function years(){
    var year = document.getElementById('year').value;
    var yr = year.toString();
    var y = yr.slice(0,2);
    var CC = parseInt(y);

    var yr = year.toString();
    var y = yr.slice(2,4);
    var YY = parseInt(y);

    

}