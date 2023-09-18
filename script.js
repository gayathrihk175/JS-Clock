function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var amPm = document.querySelector("#am-pm");

    if(hours >= 12){
        amPm.innerText = "PM";
    }else{
        amPm.innerText = "AM";
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(seconds < 10){
        seconds.innerText = `0${seconds}`;
    }


    document.querySelector("#hours").innerText = hours;
    document.querySelector("#minutes").innerText = minutes;
    document.querySelector("#seconds").innerText = seconds;
}
setInterval(displayTime,10);