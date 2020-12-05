var t = document.querySelectorAll(".drum").length;
//mouse press
for (var i = 0; i < t; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var y=this.innerHTML;
    makeSound(y);
    imgAnimation(y);
  })
   //keypress
  document.addEventListener("keydown",function(){
  
    makeSound(event.key);
    imgAnimation(event.key);
  })
  function makeSound(o){
    switch (o) {
      case "w":
        var tom1 = new Audio("sound/tom-1.mp3");
        tom1.play();
        break;

        case "a":
          var tom2 = new Audio("sound/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sound/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sound/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var snare = new Audio("sound/snare.mp3");
          snare.play();
          break;
        case "k":
          var kick_bass = new Audio("sound/kick-bass.mp3");
          kick_bass.play();
          break;
        case "l":
          var crash = new Audio("sound/crash.mp3");
          crash.play();
          break;
        default:console.log(y);
     
      }
  }
  function imgAnimation(key){
var activeButton=document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
  }
}

