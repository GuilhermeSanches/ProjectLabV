<?php
      include "../Conexao/config.php";
            session_start();            
            $usuario = $_SESSION['sessao_user'];
            $id_usuario = $_SESSION['sessao_id_user'];
          
    
            $sql = $conexao_pdo->prepare("SELECT c.id as id_categoria, c.descricao FROM  bd_tipo_despesa c where v.id_usuario='{$id_usuario}'");             
            
            $sql->execute();
            $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
            echo json_encode($sql_ret);
?>