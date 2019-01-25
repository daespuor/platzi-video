function leftPad(number){
    const pad="00";
    return pad.substring(0,pad.length-number.length)+number;
}

function formattedTime(sec){
    const minutes= parseInt(sec/60,10);
    const seconds= parseInt(sec%60,10);
    return `${minutes}:${leftPad(seconds.toString())}`;
}

function inFullScreen(){
   return  document.fullscreen || document.webkitIsFullScreen 
   || document.mozFullScreen;
}

function requestFullScreen(elem){
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
}

function closeFullScreen(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
}

module.exports={
    formattedTime,
    closeFullScreen,
    requestFullScreen,
    inFullScreen
}