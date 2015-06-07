<?php
  include "../Conexao/config.php";
  session_start();            

  $id_usuario = $_SESSION['sessao_id_user'];
  $id_viagem = $_POST['id_viagem'];
      
  $sql = $conexao_pdo->prepare("SELECT v.local as local,
                                       v.cidade as cidade,
                                       v.pais as pais,
                                       v.data_partida as data_partida,
                                       v.data_retorno as data_retorno,
                                       v.valor_previsto as valor_previsto,
                                       v.valor_limite as valor_limite,
                                       v.observacao as observacao,
                                       v.id as id_viagem
                                FROM  bd_viagens v
                                WHERE v.id_usuario='{$id_usuario}' and v.id='{$id_viagem}'");                 
  $sql->execute();
  $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
  echo json_encode($sql_ret);
?>