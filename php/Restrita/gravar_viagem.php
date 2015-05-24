            <?php

             include "../Conexao/config.php";
            session_start();
            $usuario = $_SESSION['sessao_user'];
            $id = $_SESSION['sessao_id_user'];
            $local = $_POST['Local'];
            $dataPartida=$_POST['dateCheckin'];
            $dataRetorno=$_POST['dateCheckout'];
            $valorP = $_POST['valorP'];
            $valorL = $_POST['ValorL'];
           
            /* Vamos checar algum erro nos campos */

                                  
                try{
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_viagens
            (id_usuario, local, data_partida, data_retorno, valor_previsto, valor_limite)

            VALUES
            ('$id', '$local','$dataPartida','$dataRetorno', '$valorP','$valorL')");
                  
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                    echo(1);
                    

            

            ?>