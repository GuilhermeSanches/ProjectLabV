<?php
      include "../Conexao/config.php";
      session_start();            
      
      $id_categoria = $_POST['id_categoria'];
      $id_usuario = $_SESSION['sessao_id_user'];


        $sql_verifica =  $conexao_pdo->prepare("select * from bd_agendafin a join bd_tipo_despesa d on a.iddespesa=d.id where d.id='{$id_categoria}'");
      $sql_verifica->execute();  
       $num = $sql_verifica->rowCount();
                                                            
    if($num > 0){
        echo 0;
        die();
    }
        else
    {
      $sql = $conexao_pdo->prepare("DELETE FROM bd_tipo_despesa WHERE ID='{$id_categoria}' and ID_USUARIO='{$id_usuario}'"); 
      $sql->execute();
        echo 1;
    }
?>