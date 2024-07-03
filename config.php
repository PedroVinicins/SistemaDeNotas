   <?php
   
    $dbHost = '127.0.0.1';
    $dbUsername = 'root';
    $dbPassoword = '';
    $dbName = 'formulario-aluno';

    $conexao = new mysqli ($dbHost,$dbUsername,$dbPassoword,$dbName);

   // if($conexao->connect_errno)
   // {
   //     echo "erro";
   // }
   // else{
   //     echo "cadastro efetuado com sucesso";
   // }
?>