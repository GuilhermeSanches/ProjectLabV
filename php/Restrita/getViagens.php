<?php
      include "../Conexao/config.php";
            session_start();            
            $usuario = $_SESSION['sessao_user'];
          
    
         $sql = $conexao_pdo->prepare("SELECT v.id as id_viagem, v.local as local FROM  bd_cadastro c join  bd_viagens v on c.id=v.id_usuario where c.LOGIN='{$usuario}'");             
                    $sql->execute();
                   
                    

                     $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
                   
                     
                    echo json_encode($sql_ret);
            

    

?>