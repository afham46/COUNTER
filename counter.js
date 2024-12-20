var num = 0;
var ans = document.getElementById("ans");


function updateCounter() {
  ans.innerHTML = num;
}
function setRandomBackgroundColor() {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
function Inre(){
    num++;
    ans.innerHTML = num
    setRandomBackgroundColor();
}

function Decre(){
    if(num < 1){
        num = 0;
        ans.innerHTML = num
    }
    else{
        num--;
        ans.innerHTML = num
        setRandomBackgroundColor();
    }
}
function Reset() {
  num = 0;
  updateCounter();
  setRandomBackgroundColor();  
}
