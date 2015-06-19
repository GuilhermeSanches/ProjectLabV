<?php
  include "../Conexao/config.php";
  session_start();            

  $id_usuario = $_SESSION['sessao_id_user'];
  $login = $_SESSION['sessao_user'];
  $senhaDigitada = md5($_POST['passA']);   
  $senha = md5($_POST['passN']);                                              
       



  $sql = $conexao_pdo->prepare("SELECT * FROM bd_cadastro  WHERE LOGIN='{$login}' AND                                        SENHA='{$senhaDigitada}'");     
  $sql->execute();
  $num = $sql->rowCount();

    if($num > 0){
          $sqls = $conexao_pdo->prepare(
            "update bd_cadastro set senha = '{$senha}' where id=$id_usuario");                              
               
                $sqls->execute(); 
        
        
        echo 1;
        die();}
    else{
        echo 0;
        die();    
    }

?>