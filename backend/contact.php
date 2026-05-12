<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "fatimabashir732@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";
if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
} else {
    echo "Failed to send message.";
}
?>