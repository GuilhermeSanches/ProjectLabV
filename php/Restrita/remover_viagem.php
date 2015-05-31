<?php
      include "../Conexao/config.php";
      session_start();            
      
      $id_viagem = $_POST['id_viagem'];
    
      $sql = $conexao_pdo->prepare("DELETE FROM bd_agendafin WHERE idviagem='{$id_viagem}'");                       $verifica = $sql->execute();

      $sql = $conexao_pdo->prepare("DELETE FROM bd_viagens WHERE ID='{$id_viagem}'");                   
      $verifica = $sql->execute();

      if($verifica){
            print 'true';
      }else{
            print 'false';
      }
      

?>