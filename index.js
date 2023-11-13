const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const connection = require("./database/database");

app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

produtos = [];
app.post('/addProduto',urlencodedParser, (req, res) => {
    var codigo = req.body.codigo;
    var nome = req.body.nome;
    var idade = req.body.idade;
    var endereco = req.body.end;
    var email = req.body.email;
    var sinopse = req.body.sin;
    var titulo = req.body.tit;

    var novoProduto = {codigo:codigo, nome:nome,
    idade:idade, endereco:endereco, email:email, sinopse:sinopse, titulo:titulo}
    produtos.push(novoProduto)

    var todosProdutos = [];
    for (var i = 0; i < novoProduto.length; i++) {
        todosProdutos += "Código: " + novoProduto[i].codigo;
        todosProdutos += "Nome: " + novoProduto[i].nome;
        todosProdutos += "idade: " + novoProduto[i].idade;
        todosProdutos += "endereco: " + novoProduto[i].endereco;
        todosProdutos += "email: " + novoProduto[i].email;
        todosProdutos += "sinopse: " + novoProduto[i].sinopse;
        todosProdutos += "titulo: " + novoProduto[i].titulo;
        todosProdutos += "<br>";

    } 
    res.send("<div> Seu título foi cadastrado com sucesso, confira os dados abaixo:" + "<br>" +
    "<br>" +
    "Código: " + novoProduto.codigo + "<br>"+
    "Nome: " + novoProduto.nome + "<br>" +
    "Idade: " + novoProduto.idade + "<br>"+
    "Endereço: " + novoProduto.endereco + "<br>"+
    "Email: " + novoProduto.email + "<br>"+
    "Titulo: " + novoProduto.titulo + "<br>"+
    "Sinopse: " + novoProduto.sinopse + "<br>"+    
    "</div>");
    });

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});
