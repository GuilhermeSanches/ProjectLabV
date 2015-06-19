            <?php

             include "../Conexao/config.php";
            session_start();

            $senha = md5($_POST['senhaN']);
            $senha2 = md5($_POST['senhaN2']);                                                
            $id_usuario = $_SESSION['sessao_id_user'];


         
            try{
            $sql = $conexao_pdo->prepare(
            "update bd_cadastro set senha = '{$senha}' where id=$id_usuario");                              
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                
            if (!$sql){
                
                
            echo 0;
                die();

            }else{                                                                     
                echo 1;                                                         
            }

            }

            

            ?>