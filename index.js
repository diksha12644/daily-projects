function displayGreeting(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ":" + m + ":" + s + "";
document.getElementById("MyClock").innerText = time;
setTimeout(showTime,1000);
}
showTime();