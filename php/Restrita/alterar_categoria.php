<?php
    include "../Conexao/config.php";
    session_start();

    $id_usuario = $_SESSION['sessao_id_user'];
    $descricao = $_POST['descricao'];
    $id_categoria = $_POST['id_categoria'];
           
    /* Vamos checar algum erro nos campos */
                                  
    try{
        
        $sql = $conexao_pdo->prepare(
            "UPDATE bd_tipo_despesa SET descricao='{$descricao}' WHERE id='{$id_categoria}' and id_usuario='{$id_usuario}'"
        );                  
               
        $sql->execute(); 
        
    }catch(PDOException $e){
        
        echo 'Error: ' . $e->getMessage();
    }
                
    echo(1);
                    
?>