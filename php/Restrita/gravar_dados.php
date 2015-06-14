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
                
                $sql_viagem = $conexao_pdo->prepare("select v.id as idvia from bd_cadastro c join bd_viagens v on c.id=v.id_usuario where c.login='{$usuario}'");
                $sql_viagem->execute();

                $viagem = $sql_viagem->fetch(PDO::FETCH_ASSOC);
                $viagem_id=$viagem["idvia"];
                
           
                
                try{
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_agendafin
            (idviagem, iddespesa, valor, data_lancamento, descricao)

            VALUES
<<<<<<< HEAD
            ('$idviagem', '$tipo', '{$valor}', '$dataFinal')");
=======
            ('$idviagem', '$tipo', '$valor', '$dataFinal','$descricao')");
>>>>>>> 1f688e07f1196f143c3dc2d81eb5a77e7474feed
                  
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                    echo(1);
                    

            }

            ?>