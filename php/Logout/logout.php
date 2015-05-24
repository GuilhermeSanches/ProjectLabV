<?php

session_start();
unset($_SESSION['sessao']);
session_destroy();
header("location:../../index.html");
  


?>