<?php
     include "../Conexao/config.php";
            session_start();
            $categoria = $_POST['categoria'];
            $usuario = $_SESSION['sessao_user'];
          
    
         $sql = $conexao_pdo->prepare("SELECT sum(valor) as soma,  extract(month from data_lancamento)as mes,td.descricao as descr FROM bd_agendafin ag join bd_tipo_despesa td  on ag.iddespesa=td.id join  bd_viagens v on v.id = ag.idviagem join bd_cadastro c on c.id = v.id_usuario  where td.id=$categoria and c.LOGIN='{$usuario}' group by mes, descr");             
                    $sql->execute();
                   
                    

                     $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
                   
                     
                    echo json_encode($sql_ret);
            

    

?>