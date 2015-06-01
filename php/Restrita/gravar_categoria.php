<?php
    include "../Conexao/config.php";
    session_start();

    $usuario = $_SESSION['sessao_user'];
    $id = $_SESSION['sessao_id_user'];
    $descricao = $_POST['descricao'];
           
    /* Vamos checar algum erro nos campos */
                                  
    try{
        $sql = $conexao_pdo->prepare(
            
            "INSERT INTO bd_tipo_despesa (id_usuario, descricao) VALUES('$id', '$descricao')"
        );                  
               
        $sql->execute(); 
        
    }catch(PDOException $e){
        
        echo 'Error: ' . $e->getMessage();
    }
                
    echo(1);
                    
?>