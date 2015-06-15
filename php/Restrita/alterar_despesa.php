<?php
    include "../Conexao/config.php";
    session_start();

    $id_usuario = $_SESSION['sessao_id_user'];
    $id_despesa = $_POST['id_despesa'];
    $categoria = $_POST['comboCategoria'];
    $valor=$_POST['valor'];
    $data=date_format(new DateTime(str_replace("/","-",$_POST['data_lanc'])), 'Y-m-d');
    $descricao=$_POST['descricao'];

           
    /* Vamos checar algum erro nos campos */
                                  
    try{
        
        $sql = $conexao_pdo->prepare("UPDATE bd_agendafin SET iddespesa='{$categoria}',valor='{$valor}',data_lancamento='{$data}',descricao='{$descricao}' WHERE id='{$id_despesa}'");                  
               
        $sql->execute(); 
        
    }catch(PDOException $e){
        
        echo 'Error: ' . $e->getMessage();
    }
                
    echo(1);
                    
?>