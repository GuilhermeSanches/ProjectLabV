<?php
      include "../Conexao/config.php";
      session_start();            
      
      $id_despesa = $_POST['id_despesa'];
 
      $sql = $conexao_pdo->prepare("DELETE FROM bd_agendafin WHERE ID='{$id_despesa}'");
      $verifica = $sql->execute();

      if($verifica){
            print 'true';
      }else{
            print 'false';
      }
      

?>