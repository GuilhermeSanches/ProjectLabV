<?php

session_start(); // Inicia a session   
session_checker();

 function session_checker(){  
     
     if (!isset($_SESSION['sessao'])){  
     exit();
         echo 0;
     
    }else{
         
        $user = $_SESSION['sessao_user'];
        echo $user;
     }  
     
     



       }



?>