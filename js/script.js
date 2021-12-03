var hourHand=document.getElementById("hourHand")
var minuteHand=document.getElementById("minuteHand")
var secondHand=document.getElementById("secondHand")

function clock(){
    var date=new Date();
    var second=date.getSeconds();
    var minute=date.getMinutes();
    var hour=date.getHours()
    var secondDg=second*6;
    var minuteDg=(minute*6) + ( second*0.1);
    var hourDg=(hour*30)+(second*0.001);
    secondHand.style.transform="rotate("+ secondDg +"deg)";
    hourHand.style.transform="rotate("+ hourDg +"deg)";
    minuteHand.style.transform="rotate("+ minuteDg +"deg)"; 
    setTimeout(clock,1000);

};
clock()

