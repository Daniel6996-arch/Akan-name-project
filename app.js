var numbers = Array(523,3452);
let counts = [0,0]

for (let i = 0; i < 100; i++) {
    let choice = numbers[Math.floor(Math.random()*numbers.length)];
    if (choice ===  523) counts[0]++
    else if (choice == 3452) counts[1]++
}

// counts should be about even


var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log(counts);

});