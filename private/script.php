<!-- script php pour la reception du formulaire en POST et le traitement pour un envoit par mail.  -->
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/vlucas/phpdotenv/src/Dotenv.php';

$dotenv =  Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once "../vendor/phpmailer/phpmailer/src/Exception.php";
require_once "../vendor/phpmailer/phpmailer/src/PHPMailer.php";
require_once "../vendor/phpmailer/phpmailer/src/SMTP.php";

if ($_POST && !empty($_POST["email"]) && !empty($_POST["sujet"]) && !empty($_POST["message"])) {

    $email = trim(htmlspecialchars($_POST["email"]));
    $sujet = trim(strip_tags($_POST["sujet"]));
    $message = trim(strip_tags($_POST["message"]));



    $mail = new PHPMailer(true);
    if (isset($_POST) && !empty($email)) {

        try {
            // on configure le SMTP
            $mail->isSMTP();
            $mail->Host = "smtp.free.fr";
            $mail->SMTPAuth = TRUE;
            $mail->SMTPSecure = 'tls';
            $mail->Username = $_ENV["SMTP_USER"];
            $mail->Password = $_ENV["SMTP_PASSWORD"];
            $mail->Port = 587;
            //charset
            $mail->CharSet = "utf-8";
            $mail->addAddress("othollas@free.fr");

            // expediteur 
            $mail->setFrom($email);

            //contenue
            $mail->isHTML(true);
            $mail->Subject = $sujet;
            $corps = '<p>' . $message . '</p>';
            $mail->Body = $corps;

            //on envois

            $redirection = '<h2>Merci ' . $email . ' ,ton message a été bien envoyé</h2><br><a style="text-align:center; margin:100px 50px 100px 50px" href="../public/index.html">Retour à la page d\'acceuil<a>';


            if ($mail->send()) {
                echo $redirection;
            };
        } catch (Exception $e) {
            echo "Message non envoyé. Ereur: {$mail->ErrorInfo} <br> <p><a href=../public/index.html>retour à la page d'acceuil</a></p>";
        };
    };
}
?>