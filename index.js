const express = require('express')
const server = express();
//query p

server.get("/hello", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    return res.json({
        title: "hellow word",
        mensagem: `Olá ${nome}`,
        idade: idade
    })
});
server.listen(3000)