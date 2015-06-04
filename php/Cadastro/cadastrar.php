            <?php

             include "../Conexao/config.php";

            $nome = trim($_POST['nome']);
            $sobrenome = trim($_POST['sobrenome']);
            $email = trim($_POST['email']);
            $usuario = trim($_POST['usuario']);
            $senha = md5($_POST['senha']);
            $senha2 = ($_POST['senha_rec']);
            $idade = ($_POST['idade']);
            $info = trim($_POST['info']);

            /* Vamos checar algum erro nos campos */

            if ((!$nome) || (!$sobrenome) || (!$email) || (!$usuario)){


            if (!$nome || !$sobrenome || !$email || !$usuario){

           
            echo 2;

            }
                

      

            }else{

            /* Vamos checar se o nome de Usuário escolhido e/ou Email já existem no banco de dados */

            $sql_email_check = $conexao_pdo->prepare(

            "SELECT * FROM bd_cadastro WHERE email='{$email}'"

            );
                
             $sql_email_check->execute();
                
            $eReg = $sql_email_check->rowCount();
                
            $sql_usuario_check = $conexao_pdo->prepare(

            "SELECT * FROM bd_cadastro WHERE login='{$usuario}'"

            );
                $sql_usuario_check->execute();
             
                

           
            $uReg =$sql_usuario_check->rowCount();

          

            if (($eReg > 0) || ($uReg > 0)){
            

            if ($eReg > 0){

            echo 3;
                            
            }

            if ($uReg> 0){

            echo 4;
                                 
            }

            

            }else{

            /* Se passarmos por esta verificação ilesos é hora de
            finalmente cadastrar os dados. Vamos utilizar uma função para gerar a senha de
            forma randômica*/

            function makeRandomPassword(){

            $salt = "abchefghjkmnpqrstuvwxyz0123456789";
            srand((double)microtime()*1000000);
            $i = 0;

            $pass=1;    
            while ($i <= 7){
            
            $num = rand() % 33;
            $tmp = substr($salt, $num, 1);
            $pass = $pass . $tmp;
            $i++;

            }

            return $pass;

            }

            $senha_randomica = makeRandomPassword();
           // $senhaR = md5($senha);

            // Inserindo os dados no banco de dados

            $info = htmlspecialchars($info);

            
            
            try{
            $sql = $conexao_pdo->prepare(

            "INSERT INTO bd_cadastro
            (nome, sobrenome, login, email, senha, idade, info, data_ultimo_login, ativo)

            VALUES
            ('$nome', '$sobrenome', '$usuario', '$email', '$senha', '$idade', '$info', now(),'0' )");
                  
               
                $sql->execute();  }
                catch(PDOException $e){
                echo 'Error: ' . $e->getMessage();
                }
                
                
            if (!$sql){
                
                
            echo "Ocorreu um erro ao criar sua conta, entre em contato.";

            }else{

                
           
                                    
             $usuario_id = $conexao_pdo->lastInsertId();     
                
            
            

            // Enviar um email ao usuário para confirmação e ativar o cadastro!

            $headers = "MIME-Version: 1.0\n";
            $headers .= "Content-type: text/html; charset=UTF-8\n";
            $headers .= "From: MyTravel - Webmaster<gui@guisanches.com.br>";

            $subject = "Confirmação de cadastro - guisanches.com.br";
            $mensagem = "Prezado {$nome} {$sobrenome},<br />
            Obrigado pelo seu cadastro em nosso site, <a href='http://www.guisanches.com.br'>
            http://www.guisanches.com.br</a>!<br /> <br />

            Para confirmar seu cadastro e ativar sua conta em nosso site, podendo acessar à
            áreas exclusivas, por favor clique no link abaixo ou copie e cole na barra de
            endereço do seu navegador.<br /> <br />

            <a href='http://www.guisanches.com.br/php/Cadastro/ativar.php?id={$usuario_id}&code={$senha}'>

            http://www.guisanches.com.br/php/Cadastro/ativar.php?id={$usuario_id}&code={$senha}

            </a>

            <br /> <br />
            Após a ativação de sua conta, você poderá ter acesso ao conteúdo exclusivo
            efetuado o login com os seguintes dados abaixo:<br > <br />

            <strong>Usuario</strong>: {$usuario}<br />
            <strong>Senha</strong>: {$senha2}<br /> <br />

            Obrigado!<br /> <br />

            Webmaster<br /> <br /> <br />
            Esta é uma mensagem automática, por favor não responda!";

             mail($email, $subject, $mensagem, $headers);
              
                echo 1;
                    
                   

                  

            }

            }

            }

            ?>