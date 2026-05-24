
var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://heitor_dn:Hdn261206@heitor-fullstack.5akf9eh.mongodb.net/?appName=heitor-fullstack";
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);
server.listen(3000);

let db;

async function conectarBanco() {
    try {
        await client.connect();

        db = client.db('banco_prova');
        console.log("Conectado ao banco!".green);
    } catch (erro) {
        console.error("Erro ao conectar no MongoDB:".red, erro);
    }
}

conectarBanco();

console.log('Servidor rodando ...'.rainbow);

app.get('/', async function (requisicao, resposta) {
    resposta.redirect('/atividades/project.html')
});

app.post('/cadastro', async function (requisicao, resposta) {
    var nome = requisicao.body.nome;
    var Email = requisicao.body.Email;
    var nascimento = requisicao.body.nascimento;
    var civil = requisicao.body.civil;
    var senha = requisicao.body.senha;

    const novoUsuario = { nome, Email, nascimento, civil, senha };

    await db.collection("usuarios").insertOne(novoUsuario);

    resposta.render('resposta_cadastro', { nome, Email, nascimento, civil, senha })
});


app.post('/login', async function (requisicao, resposta) {
    var Emaildigitado = requisicao.body.Email;
    var senhadigitada = requisicao.body.senha;

    const Encontrado = await db.collection("usuarios").findOne({
        Email: Emaildigitado,
        senha: senhadigitada
    })

    if (Encontrado) {
        resposta.redirect("/escolha.html")
    } else {
        resposta.send("E-mail ou senha incorretos! <a href='/login.html'>Tentar novamente</a>");
    }

});
app.get("/blognovo", async function (requisicao, resposta) {
    resposta.redirect("/criarpost.html")
});
app.post("/criarpost", async function (requisicao, resposta) {
    var titulo = requisicao.body.titulo;
    var resumo = requisicao.body.resumo;
    var conteudo = requisicao.body.conteudo;

    const novoPost = { titulo, resumo, conteudo };

    await db.collection('posts').insertOne(novoPost);

    resposta.redirect("/blog")
});
app.get("/blog", async function (requisicao, resposta) {

    const postsDoBanco = await db.collection('posts').find().toArray();


    resposta.render('blog', { posts: postsDoBanco });
});


app.get("/carronovo", async function (requisicao, resposta) {
    resposta.redirect("/cadastrarcarro.html")
});
app.post("/cadastrarcarro", async function (requisicao, resposta) {
    var marca = requisicao.body.marca;
    var modelo = requisicao.body.modelo;
    var ano = requisicao.body.ano;
    var qtde_disp = parseInt(requisicao.body.qtd)

    const carroExistente = await db.collection('carros').findOne({
        marca: marca,
        modelo: modelo,
        ano: ano
    });
    if (carroExistente) {
        await db.collection('carros').updateOne(
            { _id: carroExistente._id },
            { $inc: { qtde_disponivel: qtde_disp } }
        );
    } else {
        const novoCarro = {
            marca: marca,
            modelo: modelo,
            ano: ano,
            qtde_disponivel: qtde_disp
        };
        await db.collection('carros').insertOne(novoCarro);
    }


    resposta.redirect("/carros");
});
app.get("/carros", async function (requisicao, resposta) {

    const carrosDoBanco = await db.collection("carros").find().toArray();


    resposta.render("carros", { carros: carrosDoBanco });
});
app.get("/vender/:id", async function (requisicao, resposta) {
    var iddoCarro = requisicao.params.id;


    await db.collection("carros").updateOne(
        { _id: new mongodb.ObjectId(iddoCarro) },
        { $inc: { qtde_disponivel: -1 } }
    );

    resposta.redirect("/carros");
});
app.get("/remover/:id", async function (requisicao, resposta) {
    var iddoCarro = requisicao.params.id;


    await db.collection("carros").deleteOne({

        _id: new mongodb.ObjectId(iddoCarro)
    });

    resposta.redirect("/carros");
});
