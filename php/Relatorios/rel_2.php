<?php
     include "../Conexao/config.php";
            session_start();            
            $usuario = $_SESSION['sessao_user'];
            $id_usuario = $_SESSION['sessao_id_user'];
          
    
         $sql = $conexao_pdo->prepare(
"select
        (t2.valor/t2.contador) as media,
        t2.ano,
        t2.contador
    from
      (
      select
         t.cont as contador,
         sum(a.valor) as valor ,
         t.ano
       from
        (
        select
               count(v.id)as cont,
               extract(year from v.data_partida)as ano
            from bd_viagens v join bd_cadastro c1 on c1.id=v.id_usuario
                where c1.id='{$id_usuario}'
         group by 2
        )as t   join bd_agendafin a on extract(year from a.data_lancamento)=t.ano
                join bd_viagens v1 on v1.id=a.idviagem
                join bd_cadastro c on c.id=v1.id_usuario
                where c.id='{$id_usuario}'
                group by 1,3
     )as t2
         
         
         ");             
                    $sql->execute();
                   
                    

                     $sql_ret = $sql->fetchall(PDO::FETCH_ASSOC);
                   
                     
                    echo json_encode($sql_ret);
            

    

?>