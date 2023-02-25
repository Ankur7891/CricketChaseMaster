function chng() {
    document.getElementById("bd").style="background-image: linear-gradient(to top right,darkblue,darkviolet);"
    document.getElementById("cM").style="left:445px; top:225px";
    document.getElementById("st").style.display="none";
    document.getElementById("stimg").src="st2.jpg";
    document.getElementById("ivp").style="display:100%";
    document.getElementById("btn-cid").style="display:100%";
}
function proceedN() {
    location.href="ProjGPrePlay.html";
}
function bSIc() {
    location.replace("ProjGSignIN.html");
}
function bAc() {
    location.href="ProjGAbout.html";
}
document.addEventListener("keydown",function(e) {
    e.preventDefault();
});