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
           
            /* Vamos checar algum erro nos campos */

                                  
                try{
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_viagens
            (id_usuario, local, cidade, pais, data_partida, data_retorno, valor_previsto, valor_limite, observacao)

            VALUES
            ('$id', '$local', '$cidade', '$pais', '$dataPartida','$dataRetorno', '$valorP','$valorL', '$observacao')");
                  
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                    echo(1);
                    

            

            ?>