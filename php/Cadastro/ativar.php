                <?php

                 include "../Conexao/config.php";

                $usuario_id = $_REQUEST['id'];
                $senha = $_REQUEST['code'];

                $sql = $conexao_pdo->prepare(

                "UPDATE bd_cadastro SET ativo='1'
                WHERE id='{$usuario_id}'
                AND senha='{$senha}'"
 
                );
                $sql->execute();

                $sql_doublecheck = $conexao_pdo->prepare(

                "SELECT ativo FROM bd_cadastro
                WHERE id='{$usuario_id}'
                AND senha='{$senha}'"

                );
                $sql->execute();
                $doublecheck = $sql_doublecheck->fetch(PDO::FETCH_ASSOC);
                $ativo = array($doublecheck["ativo"]);

                if ($ativo == 0){

                echo "<strong>Sua conta não pode ser ativada!</strong>";

                }else{

                echo "<script language='javascript' type='text/javascript'>alert('Cadastro ativado com sucesso! ');window.location.href='../../index.html'</script>";

                include "../../index.html";

                }

                ?>