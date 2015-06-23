                <?php

                 include "../Conexao/config.php";

                 session_start();
                 $id_user = $_SESSION['sessao_id_user'] ;
                                

                $sql = $conexao_pdo->prepare(

                "UPDATE bd_cadastro SET desativado='0'
                WHERE id='{$id_user}'"
 
                );
                $sql->execute();

                $sql_doublecheck = $conexao_pdo->prepare(

                "SELECT desativado FROM bd_cadastro
                WHERE id='{$id_user}'"

                );
                $sql->execute();
                $doublecheck = $sql_doublecheck->fetch(PDO::FETCH_ASSOC);
                $ativo = array($doublecheck["desativado"]);

                if ($ativo == 1){

                echo 0;

                }else{
                    
                session_destroy();
                echo 1;

                }

                ?>