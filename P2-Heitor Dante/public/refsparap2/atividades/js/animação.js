let canvas = document.getElementById("anima");
let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.moveTo(15, 250);
ctx.lineTo(15, 100);
ctx.lineTo(285, 100);
ctx.stroke();
ctx.closePath();

let messi = {
    x: 0,
    y: 10,
    altura: 50,
    largura: 50,
    img: new Image(),
    desenha: function () {

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.moveTo(30, 300);
        ctx.lineTo(30, 200);
        ctx.lineTo(270, 200);
        ctx.lineTo(270, 300);
        ctx.moveTo(80, 300);
        ctx.lineTo(80, 260);
        ctx.lineTo(220, 260);
        ctx.lineTo(220, 300);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.arc(150, 0, 5, 1 * Math.PI, 0 * Math.PI, true);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.arc(150, 0, 50, 1 * Math.PI, 0 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.moveTo(0, 1);
        ctx.lineTo(300, 0);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.arc(150, 233, 3, 0 * Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.arc(150, 233, 57, 1.20 * Math.PI, 1.80 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.moveTo(110, 300);
        ctx.lineTo(110, 290);
        ctx.lineTo(190, 290);
        ctx.lineTo(190, 300);
        ctx.stroke();
        ctx.closePath();

        this.img.src = "imagens/messi.webp";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        ctx.closePath();



    }
};
function animação() {
    ctx.clearRect(0, 0, 300, 300);
    messi.desenha();
    requestAnimationFrame(animação)
};
document.addEventListener("mousemove", function (evento) {
    let rect = canvas.getBoundingClientRect();
    let xmouse = evento.clientX - rect.left - messi.largura / 2;
    let ymouse = evento.clientY - rect.top - messi.altura / 2;
    if ((xmouse > -30 && xmouse < 290) && (ymouse > -30 && ymouse < 290)) {
        messi.x = Math.max(0, Math.min(xmouse, 250));
        messi.y = Math.max(0, Math.min(ymouse, 250));
    }


})
animação();

let canvas2 = document.getElementById("titulo");
let ctx2 = canvas2.getContext("2d");

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Chewy&display=swap";
link.rel = "stylesheet";

document.head.appendChild(link);


let anima = {
    x: 20,
    y: 70,
    desenha2: function () {
        ctx2.fillStyle = "yellow";
        ctx2.font = "70px 'Chewy'";
        ctx2.fillText("Animação", this.x, this.y);
    }
}

let offset = 0;

function desenharCaminhoCompleto() {

    ctx2.arc(65, 35, 10, 1.25 * Math.PI, 1.75 * Math.PI);
    ctx2.arc(80, 37, 13, 1.30 * Math.PI, 1.75 * Math.PI);
    ctx2.arc(100, 25, 10, 0.9 * Math.PI, 2.10 * Math.PI);
    ctx2.arc(115, 27, 5, 1 * Math.PI, 2 * Math.PI);
    ctx2.arc(129, 29, 8, 1.2 * Math.PI, 1.9 * Math.PI);
    ctx2.arc(145, 30, 7, 1.2 * Math.PI, 2 * Math.PI);
    ctx2.arc(170, 48, 25, 1.25 * Math.PI, 1.70 * Math.PI);
    ctx2.arc(202, 48, 25, 1.3 * Math.PI, 1.67 * Math.PI);
    ctx2.arc(227, 24, 12, 0.95 * Math.PI, 1.67 * Math.PI);
    ctx2.arc(242, 23, 10, 1.25 * Math.PI, 2.1 * Math.PI);
    ctx2.ellipse(264, 50, 19, 27, Math.PI, 2.3 * Math.PI, 1.70 * Math.PI);
    ctx2.arc(242, 67, 10, 2.1 * Math.PI, 2.75 * Math.PI);
    ctx2.arc(225, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.moveTo(185,75);
    ctx2.arc(180, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(164, 65, 13, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(148, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(132, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(116, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(100, 65, 12, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(84, 65, 13, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(68, 65, 13, 2.3 * Math.PI, 2.7 * Math.PI);
    ctx2.arc(50, 63, 14, 2.3 * Math.PI, 2.8 * Math.PI);
    ctx2.ellipse(35, 45, 20, 31, Math.PI/8, 2.3 * Math.PI, 1.70 * Math.PI);
}

// let espaco=1;
// let somador=1;
function linha() {
    ctx2.clearRect(0, 0, 600, 400);
    anima.desenha2();

    ctx2.save();
    ctx2.beginPath();
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 2;
    ctx2.lineCap = "round";
    // espaco = espaco + somador;
    ctx2.setLineDash([70, 50]);

    ctx2.lineDashOffset = -offset;

    desenharCaminhoCompleto();

    ctx2.stroke();
    ctx2.restore();

    offset += 2;
    // if (offset>2000){
    //     offset=0
    // }
    // if (espaco>=100){
    //     somador= -1
    // }
    // if(espaco==0){
    //     somador=1
    // }
    requestAnimationFrame(linha);
}

linha();


