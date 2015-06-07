<?php
    include "../Conexao/config.php";
    session_start();

    $id_usuario = $_SESSION['sessao_id_user'];
    $id_viagem = $_POST['id_viagem'];
    $local = $_POST['local'];
    $cidade = $_POST['cidade'];
    $pais = $_POST['pais'];
    $dataPartida = $_POST['dateCheckin'];
    $dataRetorno = $_POST['dateCheckout'];
    $valorPrevisto = $_POST['valorP'];
    $valorLimite = $_POST['valorL'];
    $observacao = $_POST['observacao'];
               
    /* Vamos checar algum erro nos campos */
                                  
    try{
        
        $sql = $conexao_pdo->prepare(
            "UPDATE bd_viagens SET local='{$local}',
                                    cidade='{$cidade}',
                                    pais='{$pais}',
                                    data_partida='{$dataPartida}',
                                    data_retorno='{$dataRetorno}',
                                    valor_previsto='{$valorPrevisto}',
                                    valor_limite='{$valorLimite}',                                                                         observacao='{$observacao}'
            WHERE id='{$id_viagem}' and id_usuario='{$id_usuario}'"
        );                  
               
        $sql->execute(); 
        
    }catch(PDOException $e){
        
        echo 'Error: ' . $e->getMessage();
    }
                
    echo(1);
                    
?>