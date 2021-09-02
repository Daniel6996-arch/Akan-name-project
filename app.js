const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleName = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa', 'Afua', 'Ama'];



const randomNumber = getRandomNumber();
function getRandomNumber(){
if(maleSelection = true){
    return Math.floor(Math.random() * maleName.length)
}
if(femaleSelection = true){
    return Math.floor(Math.random() * femaleName.length)
}
};
console.log(femaleName[randomNumber]);
