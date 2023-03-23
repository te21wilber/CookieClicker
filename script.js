var dialogOpen = true;
var cookieCount = 0;
var cookieIncrease = 1;
var timerCookieBonus = null;
var capacityCost = 10;

window.onload = function () {    
    var capacityBonusCost = document.getElementById("capacityBonusCost");
    capacityBonusCost.innerText = '(-' + capacityCost+ ' cookies)';
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
    var bigDot = document.getElementById("bigDot");
    var samllDot = document.getElementById("samllDot");
    increaseCookie();
    samllDot.classList.add("plusing");
    bigDot.classList.add("plusing");
}

function reset(){
    var cookieCapacity = document.getElementById("cookieCapacity");
    var cookieCounter = document.getElementById("cookieCount");
    cookieCount = 0;
    cookieIncrease = 1;
    cookieCapacity.innerText = cookieIncrease;
    cookieCounter.innerText = cookieCount;
}

function capacityBonus(){
    var cookieCapacity = document.getElementById("cookieCapacity");
    var cookieCounter = document.getElementById("cookieCount");
    var capacityBonusCost = document.getElementById("capacityBonusCost");
    if (cookieCount >= capacityCost){
        cookieIncrease++;
        cookieCount -= capacityCost;
        cookieCapacity.innerText = cookieIncrease;
        cookieCounter.innerText = cookieCount;
        capacityCost *= 1.5;
        capacityCost = Math.round(capacityCost);
        capacityBonusCost.innerText = '(-' + capacityCost+ ' cookies)';
    }
}

function timerBonus(){
    var button = document.getElementById("timerBonus");
    if (timerCookieBonus == null){
        button.classList.add("active");
        timerCookieBonus = window.setInterval(increaseCookie, 1000);
    } else {
        window.clearInterval(timerCookieBonus)
        timerCookieBonus = null;
        button.classList.remove("active");
    }
}

function increaseCookie(){
    var cookieCapacity = document.getElementById("cookieCapacity");
    var cookieCounter = document.getElementById("cookieCount");
    cookieCount += cookieIncrease;
    cookieCounter.innerText = cookieCount;
    if (cookieCount/50 % 1 == 0){
        cookieIncrease++;
        cookieCapacity.innerText = cookieIncrease;
    }
}