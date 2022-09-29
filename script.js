var vid = document.getElementById("bgvideo");
function setPlaySpeed() { 
    vid.playbackRate = 0.1;
  } 

var pop = document.getElementsByClassName("popup")[0];
var content = document.getElementsByClassName("content")[0];

function overlayw() {
    content.style.display = "none"
    popup.style.display = "grid";
    popup.style.transition = "all 2s";
}
