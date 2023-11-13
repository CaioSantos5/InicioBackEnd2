const Sequelize = require('sequelize')
const sequelize = new Sequelize('Futura', 'root', 'rover', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function () {
    console.log("Conectado!!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});