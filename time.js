function showTime() {
    var current = new Date();
    var div_time = document.getElementById('time');
    var content = "";
    
    var hour = current.getHours();
    if ( hour < 10 ) content += "0";
    content += hour + ":";

    var minute = current.getMinutes();
    if ( minute < 10 ) content += "0";
    content += minute + ":";

    var second = current.getSeconds();
    if ( second < 10 ) content += "0";
    content += second;

    div_time.innerText = content;

    div_time.style.fontFamily = "NanumGothic";
    div_time.style.fontWeight = "Bold"
    div_time.style.fontSize = "700%";
    
    setTimeout(showTime, 1000);
}