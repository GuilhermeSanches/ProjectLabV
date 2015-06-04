            <?php

             include "../Conexao/config.php";
            session_start();
            $usuario = $_SESSION['sessao_user'];
            $tipo = $_POST['comboCategoria'];
            $valor=$_POST['Valor'];
            $idviagem=$_POST['comboViagem'];
           
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
            (idviagem, iddespesa, valor, data_lancamento)

            VALUES
            ('$idviagem', '$tipo', '$valor', now())");
                  
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                    echo(1);
                    

            }

            ?>