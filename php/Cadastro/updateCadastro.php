            <?php

             include "../Conexao/config.php";
            session_start();

            $nome = trim($_POST['nome']);
            $sobrenome = trim($_POST['sobrenome']);
            $email = trim($_POST['email']);
            $usuario = trim($_POST['usuario']);          
            $idade = ($_POST['idade']);
            $info = trim($_POST['info']);
            $id_usuario = $_SESSION['sessao_id_user'];

            /* Vamos checar algum erro nos campos */

            if ((!$nome) || (!$sobrenome) || (!$email) || (!$usuario)){


            if (!$nome || !$sobrenome || !$email || !$usuario){

           
            echo 2;

            }
                

      

            }else{

            /* Vamos checar se o nome de Usuário escolhido e/ou Email já existem no banco de dados */

            $sql_email_check = $conexao_pdo->prepare(

            "SELECT * FROM bd_cadastro WHERE email='{$email}' and id != '{$id_usuario}'"

            );
                
             $sql_email_check->execute();
                
            $eReg = $sql_email_check->rowCount();
                
            $sql_usuario_check = $conexao_pdo->prepare(

            "SELECT * FROM bd_cadastro WHERE login='{$usuario}' and id != '{$id_usuario}' "

            );
                $sql_usuario_check->execute();
             
                

           
            $uReg =$sql_usuario_check->rowCount();

          

            if (($eReg > 0) || ($uReg > 0)){
            

            if ($eReg > 0){

            echo 3;
                die();
                            
            }

            if ($uReg> 0){

            echo 4;
                die();
                                 
            }

            

            }else{

         

            $info = htmlspecialchars($info);
                        
            try{
            $sql = $conexao_pdo->prepare(
            "update bd_cadastro set nome = '{$nome}', sobrenome='{$sobrenome}', login='{$usuario}', email='{$email}', idade=$idade, info='{$info}' where id=$id_usuario");                              
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                
            if (!$sql){
                
                
            echo "Ocorreu um erro ao criar sua conta, entre em contato.";

            }else{                                                                       
                echo 1;
                                                         
            }

            }

            }

            ?>