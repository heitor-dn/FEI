let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

let canvasT = document.getElementById("canvasT");
let ctx3 = canvasT.getContext("2d");


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.arc(300, 100, 50, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "gray";
ctx.strokeStyle = "gray";
ctx.strokeRect(0, 305, 400, 410);
ctx.fillRect(0, 305, 400, 410);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgb(110, 60, 19)";
ctx.fillRect(155, 200, 100, 105);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgba(255, 107, 70, 1)";
ctx.strokeStyle = "rgba(255, 107, 70, 1)";
ctx.lineWidth = 2;
ctx.moveTo(205, 150);
ctx.lineTo(155, 200);
ctx.lineTo(255, 200);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgba(59, 23, 2, 0.726)";
ctx.fillRect(193, 255, 25, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgba(70, 212, 255, 1)";
ctx.fillRect(163, 225, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgba(70, 212, 255, 1)";
ctx.fillRect(218, 225, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "royalblue";
ctx.arc(0, 305, 50, 1.5 * Math.PI, 2.5 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "royalblue";
ctx.fillRect(0, 305, 50, 410);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "royalblue";
ctx.fillRect(0, 360, 155, 410);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "royalblue";
ctx.arc(155, 410, 50, 1.5 * Math.PI, 2.5 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgb(110, 60, 19)";
ctx.fillRect(50, 245, 20, 60);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(60, 235, 30, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgb(110, 60, 19)";
ctx.fillRect(350, 305, 20, 60);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(360, 295, 30, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.arc(151, 151, 80, 1 * Math.PI, 1.25* Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.arc(151, 151, 80, 1.75 * Math.PI, 0 * Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.arc(151, 151, 60, 1 * Math.PI, 0 * Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.arc(151, 302, 80, 1 * Math.PI, 1.5 * Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.arc(151, 302, 60, 1.5 * Math.PI, 0 * Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.lineWidth = 2;
ctx2.fillStyle = "yellow";
ctx2.arc(71, 222, 15, 0 * Math.PI, 2 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.lineWidth = 2;
ctx2.fillStyle = "yellow";
ctx2.arc(221, 222, 15, 0 * Math.PI, 2 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "gray";
ctx2.lineWidth = 2;
ctx2.moveTo(151,151);
ctx2.lineTo(151,262);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.fillStyle = "cyan";
ctx2.lineWidth = 2;
ctx2.arc(151, 302, 40, 1 * Math.PI, 0 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.lineWidth = 2;
ctx2.fillStyle = "cyan";
ctx2.arc(151, 115, 15, 0 * Math.PI, 2 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.lineWidth = 1;
ctx2.moveTo(151, 151);
ctx2.lineTo(0, 0);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.lineWidth = 1;
ctx2.moveTo(151, 151);
ctx2.lineTo(302, 0);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.fillRect(0,0,51,51);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "red";
ctx2.fillRect(251,0,302,51);
ctx2.moveTo(111,151);
ctx2.fillRect(111,151,40,40);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "cyan";
ctx2.fillRect(0,121,30,60);
ctx2.moveTo(272,136);
ctx2.fillRect(272,136,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.moveTo(0,151);
ctx2.lineTo(302,151);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "yellow";
ctx2.fillRect(0,242,30,60);
ctx2.fillRect(30,272,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "black";
ctx2.fillRect(272,242,30,60);
ctx2.fillRect(242,272,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = "black";
ctx2.strokeStyle = "black";
ctx2.font = "19px Arial";
ctx2.scale(1.03,1.04);
ctx2.textAlign = "center";
ctx2.lineWidth = 0.5;
ctx2.fillText("Canvas", 145, 51);
ctx2.stroke();
ctx2.closePath();

ctx3.beginPath();
ctx3.fillStyle = "rgba(255, 123, 0, 1)";
ctx3.strokeStyle = "rgba(255, 51, 0, 1)";
ctx3.font = "100px Permanent Marker";
ctx3.lineWidth = 2;
ctx3.textAlign = "center";
ctx3.fillText("Canvas", 200, 75);
ctx3.strokeText("Canvas", 200, 75);
ctx3.closePath();

let canvas4 = document.getElementById("nuvem");
let ctx4 = canvas4.getContext("2d");
let hover = false

function raio() {
    ctx4.beginPath();
    ctx4.fillStyle = "yellow";
    ctx4.strokeStyle = "yellow";
    ctx4.moveTo(59, 75);
    ctx4.lineTo(90, 75);
    ctx4.lineTo(78, 100);
    ctx4.lineTo(98, 100);
    ctx4.lineTo(63, 140);
    ctx4.lineTo(67, 112);
    ctx4.lineTo(50, 112);
    ctx4.lineTo(59, 75);
    ctx4.stroke();
    ctx4.fill();
}
function desenhar() {
    ctx4.beginPath();
    if (hover) {
        ctx4.fillStyle = "rgb(107, 101, 101)";
    }
    else {
        ctx4.fillStyle = "rgb(0, 154, 196)";
    }
    ctx4.rectStyle = "rgb(0, 154, 196)";
    ctx4.strokeStyle = "rgb(0, 154, 196)";
    ctx4.arc(18.25, 56.25, 18.25, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx4.moveTo(131.75, 56.25);
    ctx4.arc(131.75, 56.25, 18.25, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx4.rect(18, 37.75, 114, 36.75);
    ctx4.moveTo(37.5, 37.5);
    ctx4.arc(37.5, 37.5, 20, 0.9 * Math.PI, 0.5 * Math.PI);
    ctx4.moveTo(73, 23);
    ctx4.arc(73, 23, 22, 1 * Math.PI, 0 * Math.PI);
    ctx4.moveTo(109, 37.5);
    ctx4.arc(109, 37.5, 20, 1.25 * Math.PI, 0.5 * Math.PI);
    ctx4.moveTo(37.5, 23);
    ctx4.rect(37.5, 23, 71.5, 15);
    ctx4.fill();
}
function escrever() {
    ctx4.beginPath();
    ctx4.lineWidth = 1;
    ctx4.fillStyle = "white";
    ctx4.font = "20px Arial";
    ctx4.textAlign = "center";
    ctx4.fillText("Menu", 75, 50.5);
}
function rede() {
    ctx4.clearRect(0, 0, 150, 200);
    if (hover) {
        desenhar();
        escrever();
        raio();
    }
    else {
        desenhar();
        escrever();
    }
}

canvas4.addEventListener("mousemove", function (ev) {
    const rect = canvas4.getBoundingClientRect();
    const X = ev.clientX - rect.left;
    const Y = ev.clientY - rect.top;

    desenhar();

    if (ctx4.isPointInPath(X, Y)) {
        hover = true
        canvas4.style.cursor = "pointer";

    } else {
        hover = false
        canvas4.style.cursor = "default";
    }

    rede();
});

canvas4.addEventListener("click", function (ev) {
    const rect = canvas4.getBoundingClientRect();
    const X = ev.clientX - rect.left;
    const Y = ev.clientY - rect.top;

    desenhar();

    if (ctx4.isPointInPath(X, Y)) {
        window.location.href = "project.html";
    }

    rede();
});

canvas4.addEventListener("mouseleave", function () {
    hover = false;

    canvas4.style.cursor = "default";

    rede();
});

rede();



