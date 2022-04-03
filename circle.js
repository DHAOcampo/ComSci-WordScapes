var counter = 10;
var endscore = 0;
function timeremain() {
if(counter > 10){
    counter = 10;
}
    counter--
    document.getElementById('footer').style.transform =`scaleX(${counter})`;
    if (counter<0){
      counter = 0;
    }
    
    if(counter == 5){
  document.getElementById('footer').style.backgroundColor = "yellow";
}

if(counter == 3){
  document.getElementById('footer').style.backgroundColor = "red";
}

    if (counter == 0){
        document.getElementById('footer').remove();
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
          timeout = setTimeout(circle1, 8440);
          timeout = setTimeout(circle2, 8880);
          timeout = setTimeout(circle3, 9320);
          timeout = setTimeout(circle4, 9760);
          timeout = setTimeout(circle5, 9980);
          timeout = setTimeout(circle6, 10420);
          timeout = setTimeout(circle7, 10860);
          timeout = setTimeout(circle8, 11300);
          timeout = setTimeout(circle9, 11520);
          timeout = setTimeout(circle10, 11740);
          timeout = setTimeout(circle11, 11960);
          timeout = setTimeout(circle12, 12840);
          timeout = setTimeout(circle13, 13280);
          timeout = setTimeout(circle14, 14600);
          timeout = setTimeout(circle15, 14820);
          timeout = setTimeout(circle16, 15260);
          timeout = setTimeout(circle17, 15480);
          timeout = setTimeout(circle18, 15920);
          timeout = setTimeout(circle19, 16360);
          timeout = setTimeout(circle20, 16580);
          timeout = setTimeout(circle21, 17020);
          timeout = setTimeout(circle22, 17460);
          timeout = setTimeout(circle23, 17680);
          timeout = setTimeout(circle24, 17790);
          timeout = setTimeout(circle25, 18340);
          timeout = setTimeout(circle26, 18780);
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
          timeout = setTimeout(score_perfect, 8200);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 8440);

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
          timeout = setTimeout(score_perfect, 8600);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 8880);

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
          timeout = setTimeout(score_perfect, 9100);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 9320);

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
          timeout = setTimeout(score_perfect, 9500);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 9760);

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
          timeout = setTimeout(score_perfect, 9700);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 9980);

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
          timeout = setTimeout(score_perfect, 10200);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 10420);

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
          timeout = setTimeout(score_perfect, 10600);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 10860);

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
          timeout = setTimeout(score_perfect, 11100);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 11300);

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
          timeout = setTimeout(score_perfect, 11500);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 11740);

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
          timeout = setTimeout(score_perfect, 11600);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 11740);

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
          timeout = setTimeout(score_perfect, 11800);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 11960);

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
          timeout = setTimeout(score_perfect, 12400);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 12200);

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
        timeout = setTimeout(score_perfect, 13100);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 13280);

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
          timeout = setTimeout(score_perfect, 13500);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 13720);

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
          timeout = setTimeout(score_perfect, 14700);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 14820);

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
          timeout = setTimeout(score_perfect, 14900);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 15040);

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
          timeout = setTimeout(score_perfect, 15300);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 15480);

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
          timeout = setTimeout(score_perfect, 15700);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 15920);

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
          timeout = setTimeout(score_perfect, 16100);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 16360);

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
          timeout = setTimeout(score_perfect, 16400);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 16580);

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
          timeout = setTimeout(score_perfect, 16800);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 17020);

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
          timeout = setTimeout(score_perfect, 17200);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 17460);

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
          timeout = setTimeout(score_perfect, 17500);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 17680);

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
          timeout = setTimeout(score_perfect, 17750);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 17790);

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
          timeout = setTimeout(score_perfect, 17850);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 17900);

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
          timeout = setTimeout(score_perfect, 18500);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 18780);

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
          timeout = setTimeout(score_perfect, 19000);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 19220);

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

