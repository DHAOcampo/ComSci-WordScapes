var counter = 10;

function timeremain() {
if(counter > 10){
    counter = 10;
}
    counter--
    document.getElementById('footer').style.transform =`scaleX(${counter})`;
    if (counter == 0){
        document.getElementById('footer').remove();
        var game = document.createElement("div");
   game.setAttribute('class','end');
        document.getElementById("body").appendChild(game);
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

var head =  document.getElementById("header");
function scoregood(){

   head.innerHTML = "GOOD";
   head.classList.remove('animation'); 
  void head.offsetWidth;
  head.classList.add('animation');
counter = counter + 5;
}
function scoreperfect(){
    head.innerHTML = "PERFECT";
head.classList.remove('animation'); 
  void head.offsetWidth;
  head.classList.add('animation');
    counter = counter + 10;
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
    
    var head =  document.getElementById("header");
    function scoregood(){
    
       head.innerHTML = "GOOD";
       head.classList.remove('animation'); 
      void head.offsetWidth;
      head.classList.add('animation');
    counter = counter + 5;
    }
    function scoreperfect(){
        head.innerHTML = "PERFECT";
    head.classList.remove('animation'); 
      void head.offsetWidth;
      head.classList.add('animation');
        counter = counter + 10;
    }
    }
    function slider(){
    var head =  document.getElementById("header");
        var element = document.createElement("div");
        var ball = document.createElement("div");
        ball.setAttribute('class','ball');
                element.setAttribute('id','slide');
                document.getElementById("body").appendChild(element);
                element.appendChild(ball);
               ball.addEventListener("mousedown", moving);
               ball.addEventListener("mouseup",scoreok);
               
        yes = setTimeout(element.remove, 3000);

      function moving(){
        timeout = setTimeout(stoptheleave, 1800);
        ball.addEventListener("mouseleave", boxdeath);
        ball.style.transform = "translateX(500px)";
        timeout = setTimeout(score_perfect, 2000);
      }

      function stoptheleave(){
        element.removeEventListener("mouseleave", boxdeath);
      }
      function score_perfect(){
        element.removeEventListener("mouseup",boxdeath);
        element.addEventListener("mouseup",scoring);
      }

      function scoring(){
        head.innerHTML = "PERFECT";
        head.classList.remove('animation'); 
          void head.offsetWidth;
          head.classList.add('animation');
            counter = counter + 10;
            ball.remove();
            element.remove();
      }

      function scoreok(){
        ball.remove();
        element.remove();
     head.innerHTML = "Ok?";
     head.classList.remove('animation'); 
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 1;
      }

      function boxdeath(){
          ball.remove();
          element.remove();
       head.innerHTML = "BAD";
       head.classList.remove('animation'); 
      void head.offsetWidth;
      head.classList.add('animation');
    counter = counter - 1;

      }
        }

        function slider1(){
            var head =  document.getElementById("header");
                var element = document.createElement("div");
                var ball = document.createElement("div");
                ball.setAttribute('class','ball1');
                        element.setAttribute('id','slide1');
                        document.getElementById("body").appendChild(element);
                        element.appendChild(ball);
                       ball.addEventListener("mousedown", moving);
                       ball.addEventListener("mouseup",scoreok);
                       
                yes = setTimeout(element.remove, 3000);
        
              function moving(){
                timeout = setTimeout(stoptheleave, 1800);
                ball.addEventListener("mouseleave", boxdeath);
                ball.style.transform = "translateX(500px)";
                timeout = setTimeout(score_perfect, 2000);
              }
        
              function stoptheleave(){
                element.removeEventListener("mouseleave", boxdeath);
              }
              function score_perfect(){
                element.removeEventListener("mouseup",boxdeath);
                element.addEventListener("mouseup",scoring);
              }
        
              function scoring(){
                head.innerHTML = "PERFECT";
                head.classList.remove('animation'); 
                  void head.offsetWidth;
                  head.classList.add('animation');
                    counter = counter + 10;
                    ball.remove();
                    element.remove();
              }
        
              function scoreok(){
                ball.remove();
                element.remove();
             head.innerHTML = "Ok?";
             head.classList.remove('animation'); 
            void head.offsetWidth;
            head.classList.add('animation');
          counter = counter + 1;
              }
        
              function boxdeath(){
                  ball.remove();
                  element.remove();
               head.innerHTML = "BAD";
               head.classList.remove('animation'); 
              void head.offsetWidth;
              head.classList.add('animation');
            counter = counter - 1;
        
              }
                }
    





