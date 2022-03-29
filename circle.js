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
    var good = document.createElement("div");
}
function scoreperfect(){
    var ring = document.createElement("div");
}

}

function circle1(){
 
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
    
    }








