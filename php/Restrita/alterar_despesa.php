<?php
    include "../Conexao/config.php";
    session_start();

    $id_usuario = $_SESSION['sessao_id_user'];
    $id_despesa = $_POST['id_despesa'];
    $idviagem = $_POST['id_viagem'];
    $categoria = $_POST['comboCategoria'];
    $valor=$_POST['valor'];
    $data=date_format(new DateTime(str_replace("/","-",$_POST['data_lanc'])), 'Y-m-d');
    $descricao=$_POST['descricao'];

           
    /* Vamos checar algum erro nos campos */

    $sql_viagem = $conexao_pdo->prepare("SELECT v.data_partida as partida, v.data_retorno as retorno FROM bd_viagens v WHERE v.id='{$idviagem}'");
    $sql_viagem->execute();

    $datas = $sql_viagem->fetch(PDO::FETCH_ASSOC);
    $partida=$datas["partida"];
    $retorno=$datas["retorno"];
                
    if($data < $partida || $data > $retorno){
        $partidaF = implode("/",array_reverse(explode("-",$partida)));
        $retornoF = implode("/",array_reverse(explode("-",$retorno)));
       
        echo "A data do lançamento deve estar entre $partidaF e $retornoF";
        die();
    }else{
                                  
        try{
            $sql = $conexao_pdo->prepare("UPDATE bd_agendafin SET iddespesa='{$categoria}',valor='{$valor}',data_lancamento='{$data}',descricao='{$descricao}' WHERE id='{$id_despesa}'");                  
            $sql->execute(); 
        }catch(PDOException $e){
            echo 'Error: ' . $e->getMessage();
        }
        echo(1);
    }
?>