

<?php
/* Variáveis PDO */
/* Conexão com BD Hostinger
$base_dados = 'u698654501_bd';
$usuario_bd = 'u698654501_bd';
$senha_bd   = 'travel';
$host_db    = 'mysql.hostinger.com.br';
$conexao_pdo = null;
*/
$base_dados = 'a4826563_server';
$usuario_bd = 'root';
$senha_bd   = '';
$host_db    = 'localhost';
$conexao_pdo = null;
 
/* Concatenação das variáveis para detalhes da classe PDO */
$detalhes_pdo = 'mysql:host=' . $host_db . ';dbname='. $base_dados;
 
// Tenta conectar
try {
    // Cria a conexão PDO com a base de dados
    $conexao_pdo = new PDO($detalhes_pdo, $usuario_bd, $senha_bd);    
    $conexao_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    
    // Se der algo errado, mostra o erro PDO
    print "Erro: " . $e->getMessage() . "<br/>";
	
    // Mata o script
    die();
}
?>