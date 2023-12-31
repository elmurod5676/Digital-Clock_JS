function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let data = dateTime.getDate();
    let sessions = document.getElementById(`session`);

    if(hrs >= 12){
        sessions.innerHTML = `PM`;
    }else{
        sessions.innerHTML = `AM`;
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById(`hour`).innerHTML = hrs;
    document.getElementById(`minutes`).innerHTML = min;
    document.getElementById(`seconds`).innerHTML = sec;
    document.getElementById(`data`).innerHTML = data;

}
setInterval(displayTime, 10)