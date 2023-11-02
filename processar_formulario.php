<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "pedrodeoliveirapi123@duck.com"; // Substitua com seu endereço de email
    $subject = "Novo formulário de contato de $name";
    $headers = "De: $email";
    
    mail($to, $subject, $message, $headers);
    
    // Redirecionar de volta para a página do formulário ou exibir uma mensagem de confirmação
    header("Location: formulario.html");
} else {
    // Página de acesso indevido
    echo "Acesso indevido!";
}
?>
