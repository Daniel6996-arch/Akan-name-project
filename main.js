var maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleName = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa', 'Afua', 'Ama'];
var btn = document.getElementById('btn');
var select = document.getElementById('gender');


btn.addEventListener('click', function(){
    var CC = document.getElementById('year').value.slice(0,2);
    var YY = document.getElementById('year').value.slice(2,4);
    var MM = document.getElementById('month').value;
    var DD = document.getElementById('day').value; 

    var dayOfWeek = Math.floor((((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM+1)/10)+DD)%7);
        if(DD>31 || DD<=0){
            alert("Invalid date");
        }
        if(MM<=0 || MM>12){
            IsEmpty();
        };
    var option = select[select.selectedIndex].text;
        //console.log(option)
            if(option == "Male"){
                //console.log('male')
                //console.log(maleName[dayOfWeek]);
                var ans = maleName[dayOfWeek];
                //console.log(ans)
            }
            if(option == "Female"){
                //console.log('female')
                //console.log(femaleName[dayOfWeek]);
                var ans = femaleName[dayOfWeek];
                //console.log(ans);
     }
   
      document.getElementById('name').textContent = ans;
      document.getElementById('output').style.background = 'green';
      document.getElementById('year').value= '';
      document.getElementById('month').value= '';
      document.getElementById('day').value= '';
});
function IsEmpty() {
      alert("Invalid month");
      location.reload()
  }

 

  

   


 