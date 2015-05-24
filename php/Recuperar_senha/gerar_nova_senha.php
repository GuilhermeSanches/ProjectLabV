                    <?php

                     include "../Conexao/config.php";

                    $recupera = $_POST['recupera'];
                    $email = $_POST['email'];

            
                    switch ($recupera){

                    case "recupera" :

                    recupera_senha($email);
                    break;

                    default :

                    include "../../index.html";
                    break;

                    }

                    function recupera_senha($email){
                      include "../Conexao/config.php";       
                    if ($email == ''){
                         

                   echo 2;
                        die();
                    
                    } // Checando se o email informado está cadastrado

                        
                        
                    $sql_check = $conexao_pdo->prepare("SELECT email, login FROM bd_cadastro WHERE email='{$email}'");
                    $sql_check->execute();
                    $sql_check_num = $sql_check->rowCount();    
                     $username = $sql_check->fetch(PDO::FETCH_ASSOC);
                        

                    if ($sql_check_num == 0){

                   echo 3;
                        die();

                    }

                    // Se tudo OK vamos gerar uma nova senha e enviar para o email do usuário!

                    function makeRandomPassword(){
                     include "../Conexao/config.php";   
                    $salt = "abchefghjkmnpqrstuvwxyz0123456789";
                    srand((double)microtime()*1000000);
                    $i = 0;
                    
                    $pass = "x";    
                    while ($i <= 7){

                    $num = rand() % 33;
                    $tmp = substr($salt, $num, 1);
                    $pass = $pass.$tmp;                        
                    $i++;

                    }

                    return $pass;

                    }

                    $senha_randomica = makeRandomPassword();
                    $senha = md5($senha_randomica);
                      $sql = $conexao_pdo->prepare (

                    "UPDATE bd_cadastro SET senha='{$senha}'
                    WHERE email ='{$email}'"

                    );
                        
                        $sql->execute();

                    $user = $username["login"];
                        
                    $headers = "MIME-Version: 1.0\n";
                    $headers .= "Content-type: text/html; charset=UTF-8\n";
                    $headers .= "From: My Travel - Webmaster<gui@guisanches.com.br>";
                    $headers .= "Return-Path: guilherme@guisanches.com.br\r\n"; // return-path

                    $subject = "Sua nova senha em guisanches.com.br";

                    $message = "Olá, redefinimos sua senha.<br /><br />
                    <strong>Usuário</strong>: {$user}<br />
                    <strong>Nova Senha</strong>: {$senha_randomica}<br /><br />

                    <a href='http://www.guisanches.com.br/index.html'>

                    http://www.guisanches.com.br/index.html

                    </a><br /><br />
                    Obrigado!<br /><br />
                    Webmaster<br /><br /><br />

                    Esta é uma mensagem automática, por favor não responda!";

                   $envio =  mail($email, $subject, $message, $headers);
                        if($envio)
                    echo 1;       
                        else
                            echo 9;
                    

                    }

                    ?>