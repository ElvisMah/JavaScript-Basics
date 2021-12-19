 const display = document.getElementById('clock');

 function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    let min = formatTime(date.getMinutes());
    let sec = formatTime(date.getSeconds());

    display.innerText= `${hour} : ${min} : ${sec}`
 }

 function formatTime(time) {
    if(time < 10) {
        return '0' + time;
    }
    return time
 }

 setInterval(updateTime,1000)