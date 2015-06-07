<?php
      include "../Conexao/config.php";
            session_start();            
            $id_usuario = $_SESSION['sessao_id_user'];
    
            $sql = $conexao_pdo->prepare("SELECT c.id as id_categoria, c.descricao as descricao,c.id_usuario as id_usuario FROM  bd_tipo_despesa c where c.id_usuario='{$id_usuario}' or c.id_usuario IS NULL or c.id_usuario =0");             
            
            $sql->execute();
            $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
            echo json_encode($sql_ret);
?>