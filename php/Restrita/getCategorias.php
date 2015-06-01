<?php
      include "../Conexao/config.php";
            session_start();            
            //$usuario = $_SESSION['sessao_user'];
            $id_usuario = $_SESSION['sessao_id_user'];
          
    
            $sql = $conexao_pdo->prepare("SELECT c.id as id_categoria, c.descricao as descricao FROM  bd_tipo_despesa c left  join bd_cadastro b on c.id_user=b.id where c.id_user='{$id_usuario}' or c.id_user = 0");             
            
            $sql->execute();
            $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
            echo json_encode($sql_ret);
?>