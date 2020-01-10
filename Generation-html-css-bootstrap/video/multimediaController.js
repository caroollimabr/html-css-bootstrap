
var videoPlayer = document.getElementById("videoPlayer");

function playVideo(){
   videoPlayer.play();

   }


function pauseVideo(){
   videoPlayer.pause();

}

function restartVideo(){
   videoPlayer.currentTime = 0;
   videoPlayer.play();

}