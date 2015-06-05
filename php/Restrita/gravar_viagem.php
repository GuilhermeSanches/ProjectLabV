            <?php

             include "../Conexao/config.php";
            session_start();
            $usuario = $_SESSION['sessao_user'];
            $id = $_SESSION['sessao_id_user'];
            $local = $_POST['local'];
            $cidade = $_POST['cidade'];
            $pais = $_POST['pais'];
            $dataPartida=$_POST['dateCheckin'];
            $dataRetorno=$_POST['dateCheckout'];
            $valorP = $_POST['valorP'];
            $valorL = $_POST['valorL'];
            $observacao = $_POST['observacao'];
    
            $dataPartidafinal = implode("-",array_reverse(explode("/",$dataPartida)));
            $dataRetornofinal = implode("-",array_reverse(explode("/",$dataRetorno)));

            //verificar se nao existe viagem nesta mesma data 
            $sql_verifica_viagem = $conexao_pdo->prepare(
            "select b.id from bd_viagens b where ((b.data_partida between '{$dataPartidafinal}' and '{$dataRetornofinal}') or( b.data_retorno between '{$dataPartidafinal}' and '{$dataRetornofinal}')) and b.id_usuario = '{$id}'"            
            );
            $sql_verifica_viagem->execute();

            $num = $sql_verifica_viagem->rowCount();

            if($num > 0){
                echo 2;
                die();
            }
            
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_viagens
            (id_usuario, local, cidade, pais, data_partida, data_retorno, valor_previsto, valor_limite, observacao)

            VALUES
            ('$id', '$local', '$cidade', '$pais', '$dataPartidafinal','$dataRetornofinal', '$valorP','$valorL', '$observacao')");
                  
               
                $sql->execute();     
                   echo 1;
                                                                                                                     
            ?>