
var canvas = document.getElementById("myCanvas");

function drawCircle(){    
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLine(){
    let ctx = canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();    
}

function drawSquare(){
    let ctx = canvas.getContext("2d");
    ctx.rect(150, 150, 150, 150);
    ctx.stroke();
}