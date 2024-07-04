// Incluir a dependência MySQL
const mysql = require('mysql2');

// Criar a conexão com banco de dados MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro-usuarios'
});

// Verificar a conexão do Node.js com banco de dados 
connection.connect(function (err) {
    console.log("Conexão com o banco de dados realizado com sucesso!");
});

// Executar a QUERY para recuperar registro do banco de dados
connection.query("SELECT id, nome, email FROM usuarios", function (err, rows, fields) {
    if (!err) {
        console.log("Resultado:", rows);
    } else {
        console.log('Erro: Consulta não realizada com sucesso!');
    }
});