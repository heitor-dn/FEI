let canvas = document.getElementById("seta");
let ctx = canvas.getContext("2d");

let seta = {
    x: 50,
    y: 40,
    direção: 0.3,
    desenha: function () {
        ctx.beginPath();
        ctx.strokeStyle = "darkred";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - 15, this.y - 15);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 15, this.y - 15);
        ctx.stroke();
    }
}

function animação() {
    ctx.clearRect(0, 0, 100, 50);
    seta.desenha();

    seta.y += seta.direção;
    if (seta.y >= 48) {
        seta.direção = -0.3
    }
    else if (seta.y <= 30) {
        seta.direção = 0.6

    };
    requestAnimationFrame(animação);
}


window.onload = function () {
    const elemento = document.getElementById("animada");
    elemento.classList.add("ativo");

    animação();
};


function irPara(){
    const destino = document.getElementById("destino");
    destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function irpara(){
    const destino = document.getElementById("link");
    destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

let linkAtual = ""

function trocarIframe(url) {
    const iframe = document.getElementById("oiframe");
    const cont = document.getElementById("container");

    if (linkAtual === url) {
        cont.classList.remove('visible');
        cont.classList.add('hidden');
        linkAtual = ""; 
        iframe.src = ""; 
    } 
    else {
        container.classList.remove('visible');
        iframe.src = url;
        cont.classList.remove('hidden');
        cont.classList.add('visible');
        linkAtual = url; 
    }
}


function abrirModal(titulo, resumo) {
    const modal = document.getElementById('modal-overlay');
    
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-resumo').innerText = resumo;
    
    
    modal.style.display = 'flex';
}


document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal-overlay').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('modal-overlay');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
