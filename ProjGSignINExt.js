var uName=new String();
var allow=Number();
function SICheck() {
    var un=document.getElementById("un2").value;
    allow=1;
    if (un.length<5) {
        alert("User Name should have atleast 5 Characters!");
        allow=0;
        return false;
    }
    if (!(isNaN(un))) {
        alert("Enter a Valid User Name!");
        allow=0;
        return false;
    }
    var pw=document.getElementById("psw2").value;
    if (pw.length<8) {
        alert("Password should contain atleast 8 Characters!");
        allow=0;
        return false;
    }
    var coun=document.getElementById("sb2").value;
    if (coun==0) {
        alert("Please Select Your Country!");
        allow=0;
        return false;
    }
    if (allow==1) {
        uName=un;
        sessionStorage.setItem("UserN",uName);
        var bl=confirm("Do You Want to Play the Game Right Now?");
        if (bl==true) {
            location.href="ProjGPrePlay.html";
        } else if (bl==false) {
            alert("OOPS! You have to Play the Game Now as there is No Turning Back!");
            location.href="ProjGPrePlay.html";
        }
    }
    return false; // In Order to Proceed for the Next Game Page
}