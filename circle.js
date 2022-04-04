var counter = 10;
var endscore = 0;
function timeremain() {
if(counter > 10){
    counter = 10;
}
   if(counter>0){
       counter--
    document.getElementById("footer").style.transform =`scaleX(${counter})`;
   }
    if (counter<0){
      counter = 0;
    }

    if(counter == 5){
  document.getElementById("footer").style.backgroundColor = "yellow";
}

if(counter == 3){
  document.getElementById("footer").style.backgroundColor = "red";
}

    if (counter == 0){
      document.getElementById("footer").remove();
        document.getElementById("Unravel").pause();
        var game = document.createElement("div");
   game.setAttribute('class','end');
        document.getElementById("body").appendChild(game);
        var game2 = document.createElement("div");
        game2.setAttribute('class','end2');
             document.getElementById("body").appendChild(game2);
        timeout = setTimeout(endscreen, 1000);
        window.alert(endscore);

        function endscreen(){
  var restart = document.createElement("div");
  restart.setAttribute('class','restart');
  game.appendChild(restart);
  restart.addEventListener("click", restartbutton);
  restart.innerHTML = "RESTART";
  var done = document.createElement("div");
  done.setAttribute('class','gameover');
  game.appendChild(done);
  done.innerHTML = "GAMEOVER";
}
        
        function restartbutton(){
  document.location.reload(true);
}
    }
}

function gameBegin(){
document.getElementById("starto").style.display = "none";
document.getElementById("Unravel").play();
setInterval(timeremain, 1000);
          timeout = setTimeout(circle0, 8000);
          timeout = setTimeout(circle1, 8880);
          timeout = setTimeout(circle2, 9760);
          timeout = setTimeout(circle3, 10420);
          timeout = setTimeout(circle4, 11300);
          timeout = setTimeout(circle5, 11740);
          timeout = setTimeout(circle6, 12840);
          timeout = setTimeout(circle7, 13720);
          timeout = setTimeout(circle8, 14820);
          timeout = setTimeout(circle9, 15480);
          timeout = setTimeout(circle10, 16360);
          timeout = setTimeout(circle11, 17460);
          timeout = setTimeout(circle12, 18340);
          timeout = setTimeout(circle13, 19220);
          timeout = setTimeout(circle14, 20100);
          timeout = setTimeout(circle15, 20980);
          timeout = setTimeout(circle16, 21640);
          timeout = setTimeout(circle17, 22520);
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
          timeout = setTimeout(score_perfect, 2250);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}



function circle1(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element1');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle2(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element2');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle3(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element3');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle4(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element4');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle5(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element5');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle6(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element6');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle7(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element7');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle8(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element8');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle9(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element9');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle10(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element10');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle11(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element11');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle12(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element12');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle13(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element13');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle14(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element14');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle15(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element15');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle16(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element16');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle17(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element17');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 2250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 2200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle18(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element18');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle19(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element19');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
  element.timeout = setTimeout(score_perfect, 1250);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle20(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element20');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle21(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element21');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle22(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element22');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle23(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element23');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle24(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element24');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle25(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element25');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle26(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element26');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle27(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element27');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle28(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element28');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle29(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element29');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle30(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element30');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle31(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element31');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle32(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element32');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}
function circle33(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element33');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle34(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element34');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle35(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element35');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle36(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element35');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        timeout = setTimeout(score_perfect, 1250);
        element.addEventListener("click",element.remove);
        yes = setTimeout(boxdeath, 1200);
        
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD"; 
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

