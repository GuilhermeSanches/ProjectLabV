<?php
  include "../Conexao/config.php";
  session_start();            

  $id_despesa = $_POST['id_despesa'];
      
  $sql = $conexao_pdo->prepare("SELECT d.id, d.idviagem as viagem, d.iddespesa as despesa, d.valor, d.data_lancamento, d.descricao FROM  bd_agendafin d where d.id='{$id_despesa}'");                 
  $sql->execute();
  $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
  echo json_encode($sql_ret);
?>