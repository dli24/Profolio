function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.querySelector('.time').innerHTML = ("(EST): " + h + ":" + m + ":" + s);
}

setInterval(time,1000);