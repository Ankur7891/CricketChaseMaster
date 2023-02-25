let b=new Array();
let w=new Array();
let indBatScore=new Array();
let indBalls=new Array();
for (aa=0;aa<11;aa++) {
    indBatScore[aa]=Number(0);
}
for (aa=0;aa<11;aa++) {
    indBalls[aa]=Number(0);
}
var sum=Number();
var wicSum=Number();
var l=Number();
var runs,ball;
var r;
var level=0;
var max=Number();
var outbool;
var over=false;
var win;
var tgt=Number(sessionStorage.getItem("TarGet"));
var hCore=Number(sessionStorage.getItem("ExPert"));

function r0off() {
    document.getElementById("img0").width="240";
    document.getElementById("img0").height="160";
    document.getElementById("img0").style="border: none";
}
function r1off() {
    document.getElementById("img1").width="240";
    document.getElementById("img1").height="160";
    document.getElementById("img1").style="border: none";
}
function r2off() {
    document.getElementById("img2").width="240";
    document.getElementById("img2").height="160";
    document.getElementById("img2").style="border: none";
}
function r3off() {
    document.getElementById("img3").width="240";
    document.getElementById("img3").height="160";
    document.getElementById("img3").style="border: none";
}
function r4off() {
    document.getElementById("img4").width="240";
    document.getElementById("img4").height="160";
    document.getElementById("img4").style="border: none";
}
function r6off() {
    document.getElementById("img6").width="240";
    document.getElementById("img6").height="160";
    document.getElementById("img6").style="border: none";
}

function r0on() {
    r1off();
    r2off();
    r3off();
    r4off();
    r6off();
    document.getElementById("r0").checked=true;
    document.getElementById("img0").width="230";
    document.getElementById("img0").height="150";
    document.getElementById("img0").style="border: 5px solid #FF1A1A";
}
function r1on() {
    r0off();
    r2off();
    r3off();
    r4off();
    r6off();
    document.getElementById("r1").checked=true;
    document.getElementById("img1").width="230";
    document.getElementById("img1").height="150";
    document.getElementById("img1").style="border: 5px solid #FF1A1A";
}
function r2on() {
    r1off();
    r0off();
    r3off();
    r4off();
    r6off();
    document.getElementById("r2").checked=true;
    document.getElementById("img2").width="230";
    document.getElementById("img2").height="150";
    document.getElementById("img2").style="border: 5px solid #FF1A1A";
}
function r3on() {
    r1off();
    r2off();
    r0off();
    r4off();
    r6off();
    document.getElementById("r3").checked=true;
    document.getElementById("img3").width="230";
    document.getElementById("img3").height="150";
    document.getElementById("img3").style="border: 5px solid #FF1A1A";
}
function r4on() {
    r1off();
    r2off();
    r3off();
    r0off();
    r6off();
    document.getElementById("r4").checked=true;
    document.getElementById("img4").width="230";
    document.getElementById("img4").height="150";
    document.getElementById("img4").style="border: 5px solid #FF1A1A";
}
function r6on() {
    r1off();
    r2off();
    r3off();
    r4off();
    r0off();
    document.getElementById("r6").checked=true;
    document.getElementById("img6").width="230";
    document.getElementById("img6").height="150";
    document.getElementById("img6").style="border: 5px solid #FF1A1A";
}

function hideOut() {
    if (over==true) {
        return;
    }
    if (outbool==true) {
        document.getElementById("out1").style="display: none";
        document.getElementById("out2").style="display: none";
        document.getElementById("out3").style="display: none";
        document.getElementById("blk").style="display: none";
        outbool=false;
    }
    hideCel();
    wic();
}
function showOut() {
    if (over==true) {
        return;
    }
    var rem=Math.floor(Math.random()*3);
    outbool=true;
    switch (rem) {
        case 0: {
            document.getElementById("out3").style="display:100%";
            document.getElementById("blk").style="display:inline-block";
            break;
        }
        case 1: {
            document.getElementById("out2").style="display:100%";
            document.getElementById("blk").style="display:inline-block";
            break;
        }
        case 2: {
            document.getElementById("out1").style="display:100%";
            document.getElementById("blk").style="display:inline-block";
            break;
        }
    }
}
var r50=false;
var r100=false;
var r150=false;
var r200=false;
var r250=false;
function showCel() {
    if (over==true) {
        return;
    }
    var sumN=Number(0);
    var v;
    for (v=0;v<wicSum;v++) {
        sumN=sumN+indBatScore[v];
    }
    var rr=(sum-sumN+b[b.length-1]);
    if (r250==false && rr>=250) {
        document.getElementById("r2500").style="display:100%";
        document.getElementById("blk").style="display:inline-block";
        r250=true;
    } else if (r200==false && rr>=200) {
        document.getElementById("r2000").style="display:100%";
        document.getElementById("blk").style="display:inline-block";
        r200=true;
    } else if (r150==false && rr>=150) {
        document.getElementById("r1500").style="display:100%";
        document.getElementById("blk").style="display:inline-block";
        r150=true;
    } else if (r100==false && rr>=100) {
        document.getElementById("r1000").style="display:100%";
        document.getElementById("blk").style="display:inline-block";
        r100=true;
    } else if (r50==false && rr>=50) {
        document.getElementById("r500").style="display:100%";
        document.getElementById("blk").style="display:inline-block";
        r50=true;
    }
}
function hideCel() {
    if (over==true) {
        return;
    }
    document.getElementById("r500").style="display:none";
    document.getElementById("r1000").style="display:none";
    document.getElementById("r1500").style="display:none";
    document.getElementById("r2000").style="display:none";
    document.getElementById("r2500").style="display:none";
    document.getElementById("blk").style="display:none";
    if (w[w.length-1]==1) {
        r50=false;
        r100=false;
        r150=false;
        r200=false;
        r250=false;
    }
}

function batDef() {
    document.getElementById("indBatter").style="display:100%";
    document.getElementById("curBatScore").innerText="0*(0)";
    document.getElementById("curBatScore").style="display:100%";
}

function bowler() {
    ball=Math.ceil(Math.random()*6);
    if (ball==5) {
        ball=6;
    }
    if (ball==b[b.length-1]) {
        if (wicSum==9) {
            over=true;
        }
        r0on();
        batDef();
        document.getElementById("indBatter").style="animation:tilt-ib 0.5s ease-in-out reverse both";
        document.getElementById("curBatScore").style="animation:tilt-ib 0.5s ease-in-out reverse both";
        w[w.length-1]=Number(1);
        b[b.length-1]=Number(0);
        if (over==true) {
            return;
        }
        showOut();
    } else {
        if (sum+b[b.length-1]>=tgt) {
            over=true;
            return;
        }
        showCel();
    }
}

function calcSc() {
    var sumN=Number(0);
    var v=Number(0);
    for (v;v<wicSum;v++) {
        sumN=sumN+indBatScore[v];
    }
    indBatScore[v]=sum-sumN;
    sumN=0;
    for (v=0;v<wicSum;v++) {
        sumN=sumN+indBalls[v];
    }
    indBalls[v]=l-v-sumN;
    sumN=0;
    if (over==false) {
        console.log(indBatScore[0],indBalls[0]);
        document.getElementById("curBatScore").style="display:inline-block";
        document.getElementById("curBatScore").innerText=indBatScore[wicSum]+"*("+indBalls[wicSum]+")";
        document.getElementById("curBowlerScore").style="display:inline-block";
    }
}

function total() {
    sum=0;
    wicSum=0;
    l=w.length;
    for (a=0;a<l;a++) {
        sum=sum+b[a];
        wicSum=wicSum+w[a];
    }
    var ov=Math.floor(l/6);
    var ovd=l%6;
    document.getElementById("batScore").innerText=sum+"-"+wicSum;
    document.getElementById("overCount").innerText=ov+"."+ovd;
    if (sum==tgt-1 && l<119) {
        document.getElementById("targetData").innerText="NEED "+(tgt-sum)+" RUN IN "+(120-l)+" BALLS...";
    } else if (sum<tgt-1 && l==119) {
        document.getElementById("targetData").innerText="NEED "+(tgt-sum)+" RUNS IN "+(120-l)+" BALL...";
    } else if (tgt-sum==1 && l==119) {
        document.getElementById("targetData").innerText="NEED "+(tgt-sum)+" RUN IN "+(120-l)+" BALL...";
    } else {
        document.getElementById("targetData").innerText="NEED "+(tgt-sum)+" RUNS IN "+(120-l)+" BALLS...";
    }
    if (hCore==0) {
        document.getElementById("curBowlerScore").innerText=ball;
    } else if (hCore==1) {
        document.getElementById("curBowlerScore").innerText=null;
    }
    if (sum>=tgt) {
        if (wicSum==9) {
            document.getElementById("targetData").innerText="IND WON BY "+(10-wicSum)+" WICKET!";
        } else {
            document.getElementById("targetData").innerText="IND WON BY "+(10-wicSum)+" WICKETS!";
        }
        document.getElementById("curBowlerScore").innerText=null;
        over=true;
        win="i";

        max = indBatScore.reduce((a, b) => Math.max(a, b), -Infinity);
        var iMotM=indBatScore.lastIndexOf(max);
        sessionStorage.setItem("iPoM",iMotM);

        showIW1();
        return;
    } else if ((sum==tgt-1)&&(wicSum==10||ov==20)) {
        document.getElementById("targetData").innerText="MATCH DRAWN!";
        document.getElementById("curBowlerScore").innerText=null;
        document.getElementById("curBatScore").style="display:none";
        over=true;
        win="d";
        gameOver();
        alert("Match Tied . . . Restarting the Innings Using TIME MANIPULATION POWERS Since the FINAL can't be Done without a Proper WINNER!");
        setTimeout(function() {
            location.reload();
        },1000);
        return;
    } else if (wicSum==10||ov==20) {
        if (tgt-1-sum==1) {
            document.getElementById("targetData").innerText="PAK WON BY "+(tgt-1-sum)+" RUN!";
        } else {
            document.getElementById("targetData").innerText="PAK WON BY "+(tgt-1-sum)+" RUNS!";
        }
        document.getElementById("curBowlerScore").innerText=null;
        document.getElementById("curBatScore").style="display:none";
        over=true;
        win="p";
        var jee=Math.ceil((Math.random()+0.1)*4)+10;
        sessionStorage.setItem("Zee",jee);
        showPW();
        return;
    }
    bpbBowling(l);
}

function showPW() {
    document.getElementById("pWin").style="display:100%";
    document.getElementById("blk").style="display:inline-block";
}
function showIW1() {
    document.getElementById("iWin1").style="display:100%";
    document.getElementById("blk").style="display:inline-block";
}
function showIW2() {
    document.getElementById("iWin1").style="display:none";
    document.getElementById("iWin2").style="display:100%";
    document.getElementById("blk").style="display:inline-block";
}
function gameOver() {
    document.getElementById("iWin2").style="display:none";
    document.getElementById("pWin").style="display:none";
    document.getElementById("gOver").style="display:100%";
    document.getElementById("blk").style="display:inline-block";
}

function bpbBowling(ln) {
    if (ln%2==0) { 
        var b1=document.getElementById("bowler1");
        document.getElementById("bowler2").style.display="none";
        b1.style.display="inline-block";
        b1.style.animation="none";
        b1.offsetHeight;
        b1.style.animation=null;
    } else if (ln%2==1) {
        var b2=document.getElementById("bowler2");
        document.getElementById("bowler1").style.display="none";
        b2.style.display="inline-block";
        b2.style.animation="none";
        b2.offsetHeight;
        b2.style.animation=null;
    }
    var ball=document.getElementById("ball");
    ball.style.display="inline-block";
    ball.style.animation="none";
    ball.offsetHeight;
    ball.style.animation=null;
    var ballSc=document.getElementById("curBowlerScore");
    ballSc.style.display="inline-block";
    ballSc.style.animation="none";
    ballSc.offsetHeight;
    ballSc.style.animation=null;
}
function wic() {
    var batsimg=document.getElementById("indBatter");
    var batsc=document.getElementById("curBatScore");
    if (w[w.length-1]==1) {
    switch (wicSum) {
        case 1: {
            batsimg.src="rs.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 2: {
            batsimg.src="vk.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 3: {
            batsimg.src="sky.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 4: {
            batsimg.src="hp.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 5: {
            batsimg.src="dk.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 6: {
            batsimg.src="ap.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 7: {
            batsimg.src="ra.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 8: {
            batsimg.src="bk.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 9: {
            batsimg.src="ms.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
        case 10: {
            batsimg.src="as.jpg";    
            batsimg.style.display="inline-block";
            batsimg.style.animation="none";
            batsimg.offsetHeight;
            batsimg.style.animation=null;
            batsc.style.display="inline-block";
            batsc.style.animation="none";
            batsc.offsetHeight;
            batsc.style.animation=null;
            break;
        }
    }
    }
}

function bpbScore() {
    if (over==true) {
        return;
    }
    runs=document.getElementsByName("runs");
    for (i=0;i<runs.length;i++) {
        if (runs[i].checked) {
            r=runs[i].value;
        }
    }
    b[b.length]=Number(r);
    w[w.length]=Number(0);
    bowler();
    total();
    calcSc();
}

function end() {
    sessionStorage.setItem("IndTotalRuns",sum);
    sessionStorage.setItem("InDWiC",wicSum);
    sessionStorage.setItem("InDBaLL",l);
    sessionStorage.setItem("WiNNeR",win);

    alert("Game is Over . . . Proceeding to the Last Screen!");
    location.href="ProjGameEnd.html";
}

document.addEventListener("keyup", function(e) {
    if (over==true) {
        return;
    }
    const key=e.key;
    hideOut();
    if (key==="W"||key==="w") {
        r0on();
    } else if (key==="A"||key==="a") {
        r1on();
    } else if (key==="Z"||key==="z") {
        r2on();
    } else if (key==="X"||key==="x") {
        r3on();
    } else if (key==="D"||key==="d") {
        r4on();
    } else if (key==="E"||key==="e") {
        r6on();
    } else if (key===" "||key==="S"||key==="s") {
        document.getElementById("sh").style="background-color: rgb(23, 0, 78); color: cyan";
        bpbScore();
    }
    e.preventDefault();
});
var gOCount=0;
document.addEventListener("keydown", function(e1) {
    if (over==true && win=="i") {
        gOCount++;
        if (gOCount==1) {
            showIW2();
        }
        if (gOCount==2) {
            document.getElementById("iWin2").style="display:none";
            gameOver();
        }
        if (gOCount>2) {
            end();
        }
        return;
    } else if (over==true && win=="p") {
        gOCount++;
        if (gOCount==1) {
            gameOver();
        }
        if (gOCount>2) {
            end();
        }
    }
    const key1=e1.key;
    if (key1===" "||key1==="S"||key1==="s") {
        document.getElementById("sh").style="background-color: rgb(44, 0, 69); color: yellow;"
    }
    e1.preventDefault();
});

