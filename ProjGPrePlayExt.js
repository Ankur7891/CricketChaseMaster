var userName=sessionStorage.getItem("UserN");
function showMtch() {
    if (userName!=null) {
        alert("Welcome "+userName+" . . .");
    }
    document.getElementById("img1").style="display:100%";
    document.getElementById("img2").style="display:100%";
    document.getElementById("img3").style="display:100%";
    document.getElementById("pBtn").style="display:100%";
}
function rul() {
    document.getElementById("img2").style="display:none";
    document.getElementById("img3").style="display:none";
    document.getElementById("pBtn").style="display:none";
    document.getElementById("aTab").style="display:100%";
    document.getElementById("proBtn").style="display:100%";
}
var click=Number(0);
function proc1() {
    click++;
    if (click==1) {
        document.getElementById("rulhead").innerText="How to Play?";
        document.getElementById("pt1").innerText="You will be Given the Target on the Previous Page of the GamePlay Page. Take Note of it as only After Playing the First Ball, Runs and Balls Remaining will be Visible.";
        document.getElementById("pt2").innerHTML="The Runs will be Visible on the Screen, You have to Select an Option and then Click on Play Shot.<br>Note: You can't Get OUT Defending the Ball, but You can Get OUT More Frequently if You choose FOUR or SIX.";
        document.getElementById("pt3").innerHTML="If You are Not Playing in the EXPERT Mode, The Bowler's Input will be Shown on the White Ball on the Center of the Pitch, Try to understand its Algorithm for Better Results.<br>Note: It's a Luck Based Game, so if this Algorithm Reading doesn't Work, then Kindly Blame Your Own Luck.";
    } else if (click==2) {
        document.getElementById("olrl").start="4";
        document.getElementById("pt1").innerHTML="Keyboard Shortcuts for Playing the Game: <ul><li>Select - Defend the Ball (0 Runs -> Always NOTOUT) - 'W'</li> <li>Select - Take a Single (1 Run) - 'A'</li> <li>Select - Take a Double (2 Runs) - 'Z'</li> <li>Select - Take a Triple (3 Runs) - 'X'</li> <li>Select - Hit a FOUR! (4 Runs -> High Risk, High Reward) - 'D'</li> <li>Select - Hit a SIX! (6 Runs -> High Risk, High Reward) - 'E'</li> <li>Click - Play Shot Button - 'S' (or) 'Space Bar'</li></ul>";
        document.getElementById("pt2").innerText="During the GamePlay, Usual Keyboard Shortcuts won't Work.";
        document.getElementById("pt3").style.display="none";
    } else if (click==3) {
        sel();
    }
}

function sel() {
    alert("You will be given a Target to Chase based on the Difficulty Level . . .");
    document.getElementById("img2").style="display:none";
    document.getElementById("img3").style="display:none";
    document.getElementById("pBtn").style="display:none";
    document.getElementById("aTab").style="display:none";
    document.getElementById("bTab").style="display:100%";
    document.getElementById("btn-cid").style="display:100%";
    lvl();
}

var level=Number(0);
var expert=Number(0);
function lvl() {
    var bl;
    document.getElementById("l1").addEventListener("click",function (){
        bl=confirm("Are You Sure about the Difficulty Level?");
        if (bl==true) {
            level=1;
            expert=0;
            target(level);
            sessionStorage.setItem("ExPert",expert);
        } else {}
    });
    document.getElementById("l2").addEventListener("click",function (){
        bl=confirm("Are You Sure about the Difficulty Level?");
        if (bl==true) {
            level=2;
            expert=0;
            target(level);
            sessionStorage.setItem("ExPert",expert);
        } else {}
    });
    document.getElementById("l3").addEventListener("click",function (){
        bl=confirm("Are You Sure about the Difficulty Level?");
        if (bl==true) {
            level=3;
            expert=0;
            target(level);
            sessionStorage.setItem("ExPert",expert);
        } else {}
    });
    document.getElementById("l4").addEventListener("click",function (){
        bl=confirm("Are You Sure about the Difficulty Level?");
        if (bl==true) {
            level=3;
            expert=1;
            target(level);
            sessionStorage.setItem("ExPert",expert);
        } else {}
    });
}

var tgt=Number(0);
function target(l) {
    switch(l) {
        case 1: {
            tgt=120+Math.ceil(Math.random()*30);
            break;
        }
        case 2: {
            tgt=160+Math.ceil(Math.random()*40);
            break;
        }
        case 3: {
            tgt=225+Math.ceil(Math.random()*50);
            break;
        }
    }
    sessionStorage.setItem("TarGet",tgt);
    preInt();
}

function preInt() {
    alert("Click on the Images to Continue");
    document.getElementById("bTab").style="display:none";
    document.getElementById("cTab").style="display:100%";
    document.getElementById("inni1").style="display:100%";
}
function inn12() {
    document.getElementById("inni1").style="display:none";
    document.getElementById("inni2").style="display:100%";
}
function inn23() {
    document.getElementById("inni2").style="display:none";
    document.getElementById("inni3").style="display:100%";
}
function inn34() {
    document.getElementById("inni3").style="display:none";
    document.getElementById("inni4").style="display:100%";
}
var pakW=Number();
function inn45() {
    document.getElementById("inni4").style="display:none";
    document.getElementById("inni5").style="display:100%";
    var x=10*Math.random();
    if (x<=2) {
        pakW=4;
        sessionStorage.setItem("PaKWiC",pakW);
    } else if (x<=4) {
        pakW=5;
        sessionStorage.setItem("PaKWiC",pakW);
    } else if (x<=6) {
        pakW=6;
        sessionStorage.setItem("PaKWiC",pakW);
    } else if (x<=8) {
        pakW=7;
        sessionStorage.setItem("PaKWiC",pakW);
    } else if (x<=10) {
        pakW=8;
        sessionStorage.setItem("PaKWiC",pakW);
    }
    document.getElementById("InnCh").innerText="End of First Innings!";
    document.getElementById("pakTR").innerHTML=(tgt-1)+"-"+(pakW);
    sessionStorage.setItem("PakTotalRuns",(tgt-1));

    document.getElementById("pakTR").style="display:100%";
    document.getElementById("pakOv").style="display:100%";

    document.getElementById("indTR").style="display:100%";
    document.getElementById("indOv").style="display:100%";
    
    var rpo=(Math.round((tgt/20)*100)/100).toFixed(2);
    document.getElementById("RPOnTgT").innerHTML="Target: "+tgt+" Runs in 20 Overs <br> &nbsp;&nbsp; at "+rpo+" R.P.O.";
    document.getElementById("RPOnTgT").style="display:100%";
}
function inn56() {
    document.getElementById("inni5").style="display:none";
    document.getElementById("pakTR").style="display:none";
    document.getElementById("pakOv").style="display:none";
    document.getElementById("indTR").style="display:none";
    document.getElementById("indOv").style="display:none";
    document.getElementById("RPOnTgT").style="display:none";
    document.getElementById("InnCh").innerText="Starting Second Innings . . .";
    document.getElementById("inni6").style="display:100%";
}

function innF() {
    var rpo=(Math.round((tgt/20)*100)/100).toFixed(2);
    alert("Your Target is "+tgt+" Runs in 120 Balls at "+rpo+" Runs Per Over!");
    location.href="ProjGPlayDoc.html";
}
document.addEventListener("keydown",function(e) {
    e.preventDefault();
});