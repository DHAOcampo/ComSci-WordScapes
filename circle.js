var counter = 10;

function timeremain() {
if(counter > 10){
    counter = 10;
}
    counter--
    document.getElementById('footer').style.transform =`scaleX(${counter})`;
    if (counter == 0){
        document.getElementById("header").innerHTML = "GAME OVER";
    }
}


function circle0(){

var element = document.createElement("div");
var ring = document.createElement("div");
ring.setAttribute('class','ring');
        element.setAttribute('id','element');
        element.setAttribute('class','circle');
        document.getElementById("body").appendChild(element);
        element.appendChild(ring);
       element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1000);
 element.addEventListener("click",element.remove);
 yes = setTimeout(boxdeath, 2000);

 function score_perfect(){
element.removeEventListener("click", scoregood);
element.addEventListener("click", scoreperfect);
}

function boxdeath(){
    element.remove();
}

function scoregood(){
    document.getElementById("header").innerHTML = "GOOD"
counter = counter + 5;
}
function scoreperfect(){
    document.getElementById("header").innerHTML = "PERFECT"
    counter = counter + 10;
}
}









