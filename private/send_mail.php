<?php


use Dotenv\Dotenv;
use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';

$dotenv =  Dotenv::createImmutable(__DIR__);
$dotenv->load();




require_once "../vendor/phpmailer/phpmailer/src/Exception.php";
require_once "../vendor/phpmailer/phpmailer/src/PHPMailer.php";
require_once "../vendor/phpmailer/phpmailer/src/SMTP.php";

$mail = new PHPMailer(true);
        if (isset($_POST) && !empty($email)) {

            try {
                //configuration
                // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // je veux des informations de debug

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
                $corps = '<p>'. $message . '</p>';
                $mail->Body = $corps;

                //on envois

                $redirection = '<h2>Merci '. $email .' ,ton message a été bien envoyé</h2><br><a style="text-align:center; margin:100px 50px 100px 50px" href="../public/index.html">Retour à la page d\'acceuil<a>';
                

                if($mail->send()){
                    echo $redirection;
                };
            } catch (Exception) {
                echo "Message non envoyé. Ereur: {$mail->ErrorInfo} <br> <p><a href=../public/index.html>retour à la page d'acceuil</a></p>";
            }
        }
        ?>