function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";
    
    if(hour >= 12){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + min + ":" + second + " " + session;

    document.getElementById("digitalClock").innerText = time;

    setTimeout(showTime, 1000)
}

showTime();