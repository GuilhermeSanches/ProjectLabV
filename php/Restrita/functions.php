<?php

session_start(); // Inicia a session   
        session_checker();

 function session_checker(){  
     
     if (!isset($_SESSION['sessao'])){  
     
         header ("Location:../../index.html");  
         exit();   
     
    }else{
        echo 1;
     }  
     
     



       }



?>