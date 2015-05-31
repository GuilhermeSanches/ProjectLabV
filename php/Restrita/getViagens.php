<?php
      include "../Conexao/config.php";
            session_start();            
            $usuario = $_SESSION['sessao_user'];
            $id_usuario = $_SESSION['sessao_id_user'];
          
    
            $sql = $conexao_pdo->prepare("SELECT v.id as id_viagem, v.local as local, v.data_partida as partida, v.data_retorno as retorno, sum(a.valor) as total FROM  bd_viagens v left join bd_agendafin a on v.id=a.idviagem where v.id_usuario='{$id_usuario}' group by 1,2,3,4");             
            
            $sql->execute();
            $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
            echo json_encode($sql_ret);
?>