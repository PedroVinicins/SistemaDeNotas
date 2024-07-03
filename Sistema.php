<?php
    if(isset($_POST['submit']));
    {
        // print_r('Nome : ' . $_POST['nome']);
        // print_r('<br>');
        // print_r('Senha : ' . $_POST['senha']);
        // print_r('<br>');
        // print_r('Data de nascimento : ' . $_POST['data_nascimento']);
        // print_r('<br>');
        // print_r('Sexo : ' . $_POST['genero']);


        include_once('config.php');
        
        $nome = $_POST['nome'];
        $senha = $_POST['senha'];
        $sexo =  $_POST['genero'];
        $data_nasc = $_POST['data_nascimento'];
    
         $result = mysqli_query ($conexao, "INSERT INTO usuarios (nome, senha, sexo,  data_nasc) VALUES ('$nome', '$senha', '$sexo', '$data_nasc')");
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <div class="main-center">
        <form action="Sistema.php" method="POST">
            <div class="Cadastro">
                <h2><b>Seu Cadastro</b></h2>
                <br>
                <div class="inputBox">
                    <input type="text" name="nome" id="nome" class="inputUser" required>
                    <label for="nome" class="labelInput">Nome</label>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="password" name="senha" id="senha" class="inputUser" required>
                    <label for="senha" class="labelInput">Senha</label>
                </div>  
                <p>Sexo:</p>
                <input type="radio" id="feminino" name="genero" value="feminino" required>
                <label for="feminino">Feminino</label>
                <br>
                <input type="radio" id="masculino" name="genero" value="masculino" required>
                <label for="masculino">Masculino</label>
                <br>
                <input type="radio" id="outro" name="genero" value="outro" required>
                <label for="outro">Outro</label>
                <br><br>
                <label for="data_nascimento"><b>Data de Nascimento:</b></label>
                <input type="date" name="data_nascimento" id="data_nascimento" required>
                <br><br>
                <input type="submit" name="submit" id="submit">
            </div>
        </form>
    </div>
</body>
</html>