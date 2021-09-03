
var select = document.getElementById('gender');



var btn = document.getElementById('btn');



btn.addEventListener('click', function(){
    
    var option = select[select.selectedIndex].text;
    //console.log(option)
     if(option == "Male"){
         //console.log('male')
     }else{
         //console.log('female')
     }
});

