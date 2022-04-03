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
      timeout = setTimeout(circle2, 9320);
      timeout = setTimeout(circle3, 9760);
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
          timeout = setTimeout(score_perfect, 8440);
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
          timeout = setTimeout(score_perfect, 8880);
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
          timeout = setTimeout(score_perfect, 9760);
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

function circle3(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element3');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
          timeout = setTimeout(score_perfect, 10200);
  element.addEventListener("click",element.remove);
  yes = setTimeout(boxdeath, 10200);

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



