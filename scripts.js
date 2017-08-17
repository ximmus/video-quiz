  ///////////
 // VIDEO //
///////////

// Get the video
var vid = document.getElementById("video"); 

// Play
function playVid() { 
    vid.play(); 
} 

// Pause
function pauseVid() { 
    vid.pause(); 
}

  ///////////
 // MODAL //
///////////

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that closes the modal
var close = document.getElementById("questionOne");

// Get the answer
var answer = document.getElementById("questionOne1");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    pauseVid();
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
    playVid();
    console.log(answer);
}