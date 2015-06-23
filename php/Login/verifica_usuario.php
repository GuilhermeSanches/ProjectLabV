                    <?php

                    session_start(); // Inicia a session

                     include "../Conexao/config.php";

                    $usuario = addslashes($_POST['usuario']);  //pega variavel do ajax
                    $senha = md5($_POST['senha']);       
                    
                                    
                    
                    $sql = $conexao_pdo->prepare("SELECT id, ativo, desativado FROM bd_cadastro  WHERE LOGIN='{$usuario}' AND SENHA='{$senha}'            "); //prepara o sql que ira verificar se existe o usuario e a senha                  
                    $sql->execute();//
                    $num = $sql->rowCount();
                    $ativo = $sql->fetch(PDO::FETCH_ASSOC);
                    $ativo_checked = $ativo["ativo"];
                    $desativado_checked = $ativo["desativado"];
                    $id = $ativo["id"];
                  
                    if($desativado_checked==1){
                        $_SESSION['sessao_id_user'] = $id;
                        echo 7;                        
                        die();
                    }else{
                

                   if ($num>0 and $ativo_checked==1 and $desativado_checked==0){
                        
                       
                     
                                                                                            
                       $usuario_id =  $conexao_pdo->prepare("SELECT id FROM bd_cadastro  WHERE LOGIN='{$usuario}' AND                                        SENHA='{$senha}'");
                        
                         

                       $usuario_id->execute();
                       $linha = $usuario_id->fetch(PDO::FETCH_ASSOC);
                       $id_user = $linha["id"];
                    
                       
                    
                       
                       $_SESSION['sessao'] = sha1(time());
                       $_SESSION['sessao_user'] = $usuario;
                       $_SESSION['sessao_id_user'] = $id_user;
                       
                       
                       $sql = $conexao_pdo->prepare(
                        "UPDATE bd_cadastro SET data_ultimo_login = now()
                        WHERE id = ? "                        
                        );
                                              
                        // Parâmetros do comando SQL
                       $parametros = array($linha["id"]);

                         $sql->execute($parametros);
                       
                          
                   
                       echo 1;
                    }
                   

                    else{
                            echo 0;
                    }
                        }
                    
                
                    ?>