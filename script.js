function realtimeClock(){
var rtc = new Date();
var h= rtc.getHours();
var m= rtc.getMinutes();
var s= rtc.getSeconds();
 h=(h>12)?  h-12:h;
 var amPm=(h<12)?"AM":"PM";
 h=("0"+h).slice(-2);
 m=("0"+m).slice(-2);
 s=("0"+s).slice(-2);
 document.getElementById("clock").innerHTML = h+":"+m+ ":"+s+ " "+ amPm;
 var t=setTimeout(realtimeClock);
}
