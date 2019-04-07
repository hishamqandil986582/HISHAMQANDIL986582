

let timerr=null;
window.onload=function () {
    document.getElementById("clickbtn").onclick=function () {
        if (timerr==null)
        {
            timerr=setInterval(function () {
                document.getElementById("output").innerText+="Rudy!";
            },10);
        }
        else
        {
            clearInterval(timerr);
            timerr=null;
        }
    }
}
