function drumPageConstructor()
{
  for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
  {
    var btn = document.querySelectorAll(".drum")[i];
    btn.addEventListener("click",function(){
        drumKeySound(this.innerHTML);
        buttonAnimation(this.innerHTML)
    });
  }

  document.addEventListener("keypress",function(event){

        drumKeySound(event.key);
        buttonAnimation(event.key)

      });

}

function drumKeySound(key)
{

  switch (key) {
    case "W":
    case "w":
      var aud1 = new Audio("sounds/crash.mp3");
      aud1.play();
    break;
    case "a":
    case "A":
      var aud1 = new Audio("sounds/kick-bass.mp3");
      aud1.play();
    break;
    case "s":
    case "S":
    var aud1 = new Audio("sounds/snare.mp3");
    aud1.play();
    break;
    case "d":
    case "D":
    var aud1 = new Audio("sounds/tom-1.mp3");
    aud1.play();
    break;
    case "j":
    case "J":
    var aud1 = new Audio("sounds/tom-2.mp3");
    aud1.play();
    break;
    case "k":
    case "K":
    var aud1 = new Audio("sounds/tom-3.mp3");
    aud1.play();
    break;
    case "l":
    case "L":
    var aud1 = new Audio("sounds/tom-4.mp3");
    aud1.play();
    break;
    default:

  }

}

function buttonAnimation(key){

  var activeButton = document.querySelector("."+key);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
//
// function playAudio(var path){
//   var audio = new Audio(path);
//   audio.play();
// }
