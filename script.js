var dialogOpen = true;
var cookieCount = 0;
var cookieIncrease = 1;

window.onload = function () {    
    
}

function dissmissStartPopup(){
    var startPopup = document.getElementById("startPopup");
    // startPopup.style.display = 'none';
    startPopup.classList.add('slideOut');
    // startPopup.animate(animateclose, 1000);
    setTimeout(function() {
        startPopup.style.display = 'none';
        dialogOpen = false;
      }, 500);
}

function cookieClick(){
    // alert("event.clientX");
    var cookie = document.getElementById("cookie");
    var ripple = document.getElementById("ripple");
    var bigDot = document.getElementById("bigDot");
    var samllDot = document.getElementById("samllDot");
    var cookieCounter = document.getElementById("cookieCount");
    cookieCount += cookieIncrease;
    cookieCounter.innerText = cookieCount;
    if (cookieCount/50 % 1 == 0){
        cookieIncrease = cookieCount/50;
    }
    samllDot.classList.add("plusing");
    bigDot.classList.add("plusing");
    // ripple.style.animation = 'none';
    // ripple.offsetHeight; /* trigger reflow */
    // ripple.style.animation = null; 
    // ripple.style.top = event.clientY+'px';
    // ripple.style.left = event.clientX+'px';
}
