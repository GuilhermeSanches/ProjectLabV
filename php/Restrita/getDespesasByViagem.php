<?php
  include "../Conexao/config.php";
  session_start();            

  $id_usuario = $_SESSION['sessao_id_user'];
  $id_viagem = $_POST['id_viagem'];
      
  $sql = $conexao_pdo->prepare("SELECT d.id, d.idviagem, d.descricao, d.data_lancamento, d.valor, c.descricao as categoria
                                FROM bd_agendafin d
                                JOIN bd_tipo_despesa c on c.id = d.iddespesa
                                JOIN bd_viagens v on v.id = d.idviagem
                                WHERE v.id_usuario='{$id_usuario}' and d.idviagem='{$id_viagem}'");                 
  $sql->execute();
  $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
  echo json_encode($sql_ret);
?>