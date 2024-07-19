<!-- script php pour la reception du formulaire en POST et le traitement pour un envoit par mail.  -->
 <?php

if($_POST && !empty($_POST["email"]) && !empty($_POST["sujet"]) && !empty($_POST["message"])){
    
    $email = trim(htmlspecialchars($_POST["email"]));
    $sujet = trim(strip_tags($_POST["sujet"]));
    $message = trim(strip_tags($_POST["message"]));

    require './send_mail.php';
}

 ?>
