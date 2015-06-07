<?php
      include "../Conexao/config.php";
      session_start();            
      
      $id_categoria = $_POST['id_categoria'];
      $id_usuario = $_SESSION['sessao_id_user'];

      $sql = $conexao_pdo->prepare("DELETE FROM bd_tipo_despesa WHERE ID='{$id_categoria}' and ID_USUARIO='{$id_usuario}'");                   
      $verifica = $sql->execute();

      if($verifica){
            print 'true';
      }else{
            print 'false';
      }
      

?>