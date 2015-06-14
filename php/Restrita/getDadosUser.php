<?php
  include "../Conexao/config.php";
  session_start();            

  $id_usuario = $_SESSION['sessao_id_user'];
  
      
  $sql = $conexao_pdo->prepare("SELECT v.nome as nome,
                                       v.sobrenome as sobrenome,
                                       v.email as email,
                                       v.login as usuario,
                                       v.idade as idade,
                                       v.info as informacao                                                           
                                FROM  bd_cadastro v
                                WHERE v.id='{$id_usuario}'");                 
  $sql->execute();
  $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
  echo json_encode($sql_ret);
?>