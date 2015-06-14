            <?php

             include "../Conexao/config.php";
            session_start();
            $usuario = $_SESSION['sessao_user'];
            $tipo = $_POST['comboCategoria'];
            $valor=$_POST['valor'];
            $idviagem=$_POST['comboViagem'];
            $data=$_POST['data_lanc'];
            $descricao=$_POST['descricao'];
           
            $dataFinal = implode("-",array_reverse(explode("/",$data)));

            
            
            /* Vamos checar algum erro nos campos */

            if ((!$tipo) || (!$valor)){


            if (!$tipo || !$valor){

           
            echo 2;
             
                
            }
                      

            }else{
                
                $sql_viagem = $conexao_pdo->prepare("select v.data_partida as partida, v.data_retorno as retorno from bd_viagens v where v.id='{$idviagem}'");
                $sql_viagem->execute();

                $datas = $sql_viagem->fetch(PDO::FETCH_ASSOC);
                $partida=$datas["partida"];
                $retorno=$datas["retorno"];
                
           if($dataFinal < $partida || $dataFinal > $retorno){
               $partidaF = implode("/",array_reverse(explode("-",$partida)));
               $retornoF = implode("/",array_reverse(explode("-",$retorno)));
               
               echo "A data do lançamento deve estar entre $partidaF e $retornoF";
                die();
           }
                
                
                try{
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_agendafin
            (idviagem, iddespesa, valor, data_lancamento, descricao)

            VALUES
            ('$idviagem', '$tipo', '$valor', '$dataFinal','$descricao')");            
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                    echo(1);
                    

            }

            ?>